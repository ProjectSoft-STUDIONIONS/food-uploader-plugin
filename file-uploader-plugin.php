<?php
/*
Plugin Name: Food File Uploader
Description: WordPress Плагин для загрузки файлов (PDF и XLSX) в папку /food/, доступен только администраторам.
Version: 1.0
Author: ProjectSoft
*/

if (!defined('ABSPATH')) die();

if(!defined('FOOD_LINK_PAGE')):
	define('FOOD_LINK_PAGE', 'food_uploader');
endif;

$lang_dir = preg_replace('/\\\\/', '/', WP_PLUGIN_DIR) . '/file-uploader-plugin/lang/';

define('FOOD_LANG_DIR', $lang_dir);

global $mask_extensions, $mask_folder, $_lang, $all;

$mask_extensions = array("xlsx", "pdf");
$mask_folder = array("food", "food-individual");

$local = get_user_locale();

$_lang = array();

include_once (FOOD_LANG_DIR . "ru_RU.php");

if(is_file(FOOD_LANG_DIR . $local . ".php")):
	include_once (FOOD_LANG_DIR . $local . ".php");
endif;

// Сбор удач и ошибок.
$all = array();
$all["success"] = "";
$all["error"] = "";

// Добавление стилей, добавление скриптов
add_action('admin_enqueue_scripts', 'food_plugin_add_admin_style_script');

// Создание страницы в админ-панели
add_action('admin_menu', 'food_plugin_add_admin_menu', 30);

function food_plugin_add_admin_menu() {
	global $_lang;
	add_menu_page(
		$_lang["title"],
		$_lang["menu_title"],
		'manage_options',
		'food_uploader',
		'food_plugin_file_uploader_page',
		'dashicons-open-folder',
		26
	);
}

// Функция отображения страницы загрузки файлов
function food_plugin_file_uploader_page() {
	global $_lang;
	if (!current_user_can('manage_options')) {
		wp_die($_lang["die_actons"]);
	}

	// Обработка загрузки файла
	if (isset($_POST['submit']) && !empty($_FILES['food_plugin_file']['name'])) {
		food_plugin_handle_file_upload($_FILES['food_plugin_file']);
	}

	// Форма загрузки файла
	echo '<div class="wrap"><h1>' . $_lang["upload_title"] . '</h1>';
	echo '<form method="post" enctype="multipart/form-data">
			<input type="file" name="food_plugin_file[]" accept=".pdf,.xlsx" required multiple>
			<input type="submit" name="submit" class="button button-primary" value="' . $_lang["upload_botton"] . '">
		</form>';

	// Отображение списка загруженных файлов
	food_plugin_display_uploaded_files();
	echo '</div>';
}

// Функция обработки загрузки файла
function food_plugin_handle_file_upload($files) {
	global $_lang, $all;
	
	// $all = array();
	// $all["success"] = "";
	// $all["error"] = "";
	
	$upload_dir = ABSPATH . 'food/';

	// Создание папки, если её нет
	if (!file_exists($upload_dir)):
		@mkdir($upload_dir, 0755, true);
		if (!file_exists($upload_dir)):
			echo '<div class="notice notice-error"><p><strong>' . $_lang["error_createdir"] . '</strong> <pre>food</pre>.</p></div>';
			return;
		endif;
	endif;

	$allowed_types = array('application/pdf', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
	foreach ($files['name'] as $i => $name):
		if (empty($files['tmp_name'][$i])) continue;
		// Преобразуем в нижний регистр
		$name = strtolower($files['name'][$i]);
		// Транслит имени файла
		$name = translit_file($name);
		// На всякий случай
		// Удаляет специальные символы
		$name = preg_replace('/[^A-Za-z0-9\-\_.]/', '', $name);
		// Заменяет несколько тире на одно
		$name = preg_replace('/-+/', '-', $name);
		// Заменяет несколько нижних тире на одно
		$name = preg_replace('/_+/', '_', $name);
		// Проверяем тип файла
		if (!in_array($files['type'][$i], $allowed_types)):
			// Собираем ошибки
			$all["error"] .= '<p><strong>' . $_lang["error_extensions"] . '</strong><br>' . $files['name'][$i] . '</p>';
		else:
			// Продолжаем
			$userfile= array();
			$extension = pathinfo($name, PATHINFO_EXTENSION);
			$userfile['name'] = $name;
			$userfile['type'] = $files['type'][$i];
			$userfile['tmp_name'] = $files['tmp_name'][$i];
			$userfile['error'] = $files['error'][$i];
			$userfile['size'] = $files['size'][$i];
			$userfile['extension'] = $extension;
			if(is_uploaded_file($userfile['tmp_name'])):
				// Удалось загрузить файл
				// Перемещаем файл
				if (@move_uploaded_file($userfile['tmp_name'], $upload_dir . $name)):
					// Удалось переместить файл
					// Меняем аттрибуты файла
					if (strtoupper(substr(PHP_OS, 0, 3)) != 'WIN'):
						@chmod($upload_dir . $name, 0644);
					endif;
					// Собираем удачную загрузку
					$all["success"] .= '<p><strong>' . $_lang["file_success"] . '</strong><br>' . $name . '</p>';
				else:
					// Не удалось переместить файл
					$all["error"] .= '<p><strong>' . $_lang["error_movied_file"] . '</strong><br>' . $files['name'][$i] . '</p>';
				endif;
			else:
				// Не удалось загрузить файл
				$all["error"] .= '<p><strong>' . $_lang["error_upload_file"] . '</strong><br>' . $files['name'][$i] . '</p>';
			endif;
		endif;
	endforeach;

	if($all["error"]):
		echo '<div class="notice notice-error">' . $all["error"] . '</div>';
	endif;
	if($all["success"]):
		echo '<div class="notice notice-success">' . $all["success"] . '</div>';
	endif;
}

// Функция отображения загруженных файлов
function food_plugin_display_uploaded_files() {
	$upload_dir = ABSPATH . 'food/';
	if (file_exists($upload_dir)):
		$files = scandir($upload_dir);
		$files = array_diff($files, array('.', '..'));
		// Сортировка файлов
		rsort($files);
		if (!empty($files)):
			echo '<h2>Загруженные файлы:</h2>';
			echo '
<table class="wp-list-table widefat striped">
	<thead>
		<tr>
			<th class="manage-column column-primary">ИМЯ</th>
			<th class="manage-column">ПРАВА</th>
			<th class="manage-column">ИЗМЕНЁН</th>
			<th class="manage-column">РАЗМЕР ФАЙЛА</th>
			<th class="manage-column">ПАРАМЕТРЫ</th>
		</tr>
	</thead>
	<tbody>
';
			foreach ($files as $file):
				if(is_file($upload_dir . $file)):
					// ' . site_url('/food/' . $file) . '
					echo '<tr>
			<td class="column">' . esc_html($file) . '</td>
			<td class="column"></td>
			<td class="column"></td>
			<td class="column"></td>
			<td class="column"></td>
		</tr>';
				endif;
			endforeach;
			echo '
	</tbody>
</table>';
		else:
			echo '<p>Файлы не загружены.</p>';
		endif;
	else:
		echo '<p>Папка для загрузки не существует.</p>';
	endif;
}

// Добавление стилей
function food_plugin_add_admin_style_script() {
	wp_register_style( 'file-uploader-plugin', plugins_url( 'file-uploader-plugin/css/main.css' ) );
	wp_enqueue_style( 'file-uploader-plugin' );
}

// Объединение строк
function string_join(...$string) {
	$result = "<p>" . implode("</p><p>", $string) . "</p>";
    return $result;
}

// Транслит имени файлаfunction translit_file($filename)
function translit_file($filename) {
	$convert = array (
		// File/path punctuation (usually not wanted, but might be wanted in some cases) 
		'/'=>'',
		// Generally unwanted punctuation
		'!'=>'', '('=>'', ')'=>'', '*'=>'', ','=>'', ':'=>'', ';'=>'', '…'=>'', '¡'=>'', '¿'=>'', '%' => '',
		// various quotation marks
		'‘'=>'', '’'=>'', '‚'=>'', '‛'=>'', '“'=>'', '”'=>'', '„'=>'', '‟'=>'', '«'=>'', '»'=>'', '‹'=>'', '›'=>'', 
		// replace various spaces with a regular space (or nothing for zero-width spaces)
		' '=>' ', // no-break space
		' '=>' ', // en quad
		' '=>' ', // em quad
		' '=>' ', // en space
		' '=>' ', // em space
		' '=>' ', // three-per-em space
		' '=>' ', // four-per-em space
		' '=>' ', // six-per-em space
		' '=>' ', // figure space
		' '=>' ', // punctuation space
		' '=>' ', // thin space
		' '=>' ', // narrow no-break space
		' '=>' ', // medium mathmatical space
		'　'=>' ', // ideographic space
		' '=>'', // hair width space
		'​'=>'', // zero-width space
		'﻿'=>'', // zero-width no-break space
		'‍'=>'', // zero-width joiner
		'‌'=>'', // zero-width non-joiner
		'͏'=>'', // combining grapheme joiner
		'⁠'=>'', // word joiner
		// replace various hyphens with a standard hyphen
		'­'=>'-', // some other hyphen
		'‐'=>'-', // hyphen (2010)
		'‑'=>'-', // non-breaking hyphen
		'‒'=>'-', // figure dash
		'–'=>'-', // en dash
		'—'=>'-', // em dash
		'―'=>'-', // horizontal bar
		// greek
		';'=>'', '΄'=>'',
		// armenian punctuation
		'ՙ'=>'', '՚'=>'', '՛'=>'', '՜'=>'', '՝'=>'', '՞'=>'', '՟'=>'', '։'=>'',
		// hebrew punctuation
		'׀'=>'', '׃'=>'', 
		// arabic punctuation
		'،'=>'', '؛'=>'', '؟'=>'', '۔'=>'',
		// hindi punctuation
		'।'=>'', '॥'=>'', 
		// cjk punctuation
		'，'=>'', '、'=>'', '。'=>'', '〃'=>'', '〈'=>'', '〉'=>'', '《'=>'', '》'=>'', 
		'「'=>'', '」'=>'', '『'=>'', '』'=>'', '【'=>'', '】'=>'', '〔'=>'', '〕'=>'', 
		'〖'=>'', '〗'=>'', '〘'=>'', '〙'=>'', '〚'=>'', '〛'=>'', 
		'〝'=>'', '〞'=>'', '〟'=>'', '〿'=>'',
		
		// Common
		'&'=>'and','%'=>'','\''=>'',
		'À'=>'A','Á'=>'A','Â'=>'A','Ã'=>'A','Ä'=>'A','Å'=>'A','Æ'=>'E','Ā'=>'A','Ą'=>'A','Ă'=>'A',
		'Ç'=>'C','Ć'=>'C','Č'=>'C','Ĉ'=>'C','Ċ'=>'C',
		'Ď'=>'D','Đ'=>'D',
		'È'=>'E','É'=>'E','Ê'=>'E','Ë'=>'E','Ē'=>'E','Ę'=>'E','Ě'=>'E','Ĕ'=>'E','Ė'=>'E',
		'Ĝ'=>'G','Ğ'=>'G','Ġ'=>'G','Ģ'=>'G',
		'Ĥ'=>'H','Ħ'=>'H',
		'Ì'=>'I','Í'=>'I','Î'=>'I','Ï'=>'I','Ī'=>'I','Ĩ'=>'I','Ĭ'=>'I','Į'=>'I','İ'=>'I',
		'Ĳ'=>'J','Ĵ'=>'J',
		'Ķ'=>'K',
		'Ľ'=>'L','Ĺ'=>'L','Ļ'=>'L','Ŀ'=>'L','Ł'=>'L',
		'Ñ'=>'N','Ń'=>'N','Ň'=>'N','Ņ'=>'N','Ŋ'=>'N',
		'Ò'=>'O','Ó'=>'O','Ô'=>'O','Õ'=>'O','Ö'=>'O','Ø'=>'O','Ō'=>'O','Ő'=>'O','Ŏ'=>'O',
		'Œ'=>'E',
		'Ŕ'=>'R','Ř'=>'R','Ŗ'=>'R',
		'Ś'=>'S','Ş'=>'S','Ŝ'=>'S','Ș'=>'S',
		'Ť'=>'T','Ţ'=>'T','Ŧ'=>'T','Ț'=>'T',
		'Ù'=>'U','Ú'=>'U','Û'=>'U','Ü'=>'U','Ū'=>'U','Ů'=>'U','Ű'=>'U','Ŭ'=>'U','Ũ'=>'U','Ų'=>'U',
		'Ŵ'=>'W',
		'Ŷ'=>'Y','Ÿ'=>'Y',
		'Ź'=>'Z','Ż'=>'Z',
		'à'=>'a','á'=>'a','â'=>'a','ã'=>'a','ä'=>'a','å'=>'a','æ'=>'e','ā'=>'a','ą'=>'a','ă'=>'a',
		'ç'=>'c','ć'=>'c','č'=>'c','ĉ'=>'c','ċ'=>'c',
		'ď'=>'d','đ'=>'d',
		'è'=>'e','é'=>'e','ê'=>'e','ë'=>'e','ē'=>'e','ę'=>'e','ě'=>'e','ĕ'=>'e','ė'=>'e',
		'ƒ'=>'f',
		'ĝ'=>'g','ğ'=>'g','ġ'=>'g','ģ'=>'g',
		'ĥ'=>'h','ħ'=>'h',
		'ì'=>'i','í'=>'i','î'=>'i','ï'=>'i','ī'=>'i','ĩ'=>'i','ĭ'=>'i','į'=>'i','ı'=>'i',
		'ĳ'=>'j','ĵ'=>'j',
		'ķ'=>'k','ĸ'=>'k',
		'ł'=>'l','ľ'=>'l','ĺ'=>'l','ļ'=>'l','ŀ'=>'l',
		'ñ'=>'n','ń'=>'n','ň'=>'n','ņ'=>'n','ŉ'=>'n','ŋ'=>'n',
		'ò'=>'o','ó'=>'o','ô'=>'o','õ'=>'o','ö'=>'o','ø'=>'o','ō'=>'o','ŏ'=>'o',
		'œ'=>'e',
		'ŕ'=>'r','ř'=>'r','ŗ'=>'r',
		'ù'=>'u','ú'=>'u','û'=>'u','ü'=>'u','ū'=>'u','ů'=>'u','ű'=>'u','ŭ'=>'u','ũ'=>'u','ų'=>'u',
		'ŵ'=>'w',
		'ÿ'=>'y','ŷ'=>'y',
		'ż'=>'z','ź'=>'z',
		'ß'=>'s','ſ'=>'s','ś'=>'s',
		'Α'=>'A','Ά'=>'A','Β'=>'B','Γ'=>'G','Δ'=>'D','Ε'=>'E','Έ'=>'E','Ζ'=>'Z','Η'=>'I','Ή'=>'I',
		'Θ'=>'TH','Ι'=>'I','Ί'=>'I','Ϊ'=>'I','Κ'=>'K','Λ'=>'L','Μ'=>'M','Ν'=>'N','Ξ'=>'KS','Ο'=>'O',
		'Ό'=>'O','Π'=>'P','Ρ'=>'R','Σ'=>'S','Τ'=>'T','Υ'=>'Y','Ύ'=>'Y','Ϋ'=>'Y','Φ'=>'F','Χ'=>'X',
		'Ψ'=>'PS','Ω'=>'O','Ώ'=>'O','α'=>'a','ά'=>'a','β'=>'b','γ'=>'g','δ'=>'d','ε'=>'e','έ'=>'e',
		'ζ'=>'z','η'=>'i','ή'=>'i','θ'=>'th','ι'=>'i','ί'=>'i','ϊ'=>'i','ΐ'=>'i','κ'=>'k','λ'=>'l',
		'μ'=>'m','ν'=>'n','ξ'=>'ks','ο'=>'o','ό'=>'o','π'=>'p','ρ'=>'r','σ'=>'s','τ'=>'t','υ'=>'y',
		'ύ'=>'y','ϋ'=>'y','ΰ'=>'y','φ'=>'f','χ'=>'x','ψ'=>'ps','ω'=>'o','ώ'=>'o',
	);
	$new = '';
	$file = pathinfo(trim($filename));
	if (!empty($file['filename'])) {
		$alias = $file['filename'];
		$alias = strip_tags($alias);
		$alias = strtr($alias, $convert);
		$alias = preg_replace('/[^\.A-Za-z0-9 _-]/', '', $alias);
		$alias = preg_replace('/\s+/', '-', $alias);
		$alias = preg_replace('/-+/', '-', $alias);
		$alias = preg_replace('/_+/', '_', $alias);
		$alias = trim($alias, '-');
		$new .= $alias;
	}
	if (!empty($file['extension'])) {
		$new .= '.' . trim($file['extension']);
	}
	return $new;
}

