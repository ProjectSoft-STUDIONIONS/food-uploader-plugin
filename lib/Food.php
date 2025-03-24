<?php

namespace ProjectSoft;

class Food {

	public const FOOD_NAME = FOOD_NAME;
	public const FOOD_PATH = FOOD_PATH;
	public const FOOD_ABSPATH = FOOD_ABSPATH;

	public const FOOD_EXTS = array(
		"xlsx", // Excel xlsx file
		"pdf" // PDF File
	);
	public const FOOD_TYPES = array(
		'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', // Excel xlsx file
		'application/pdf' // PDF File
	);

	private $dir = '';
	private $folders = array();
	private $files = array();

	public function __construct() {
		$folders  = get_option('food_folders', '');
		$folders  = preg_split('/[\s,;]+/', $folders);
		$food     = array("food");
		// Получение директорий
		$this->folders = array_filter(array_unique(array_merge($food, $folders)));
		sort($this->folders);
		// Здесь нужно сделать загрузку, переименование, удаление
		if(isset($_REQUEST['mode'])):
			$mode = $_REQUEST['mode'];
			switch ($mode) {
				case 'upload':
					// upload...
					break;
				case 'rename':
					// rename...
					break;
				case 'delete':
					// delete...
					break;
				default:
					// Redirect
					break;
			}
		endif;
		$this->files = array();
		/** 
		 * 
		 */
		// Получение файлов
		if(isset($_REQUEST["dir"])):
			$dir = $_REQUEST["dir"];
			if(in_array($dir, $this->folders)):
				$this->dir = $dir;
				$this->files = $this->getFiles();
			else:
				// Redirect 404
				header( "Location: " . site_url() . '/wp-admin/admin.php?page=' . $this::FOOD_NAME, true, 302);
				exit;
			endif;
		endif;
		$this->save();
		$this->registerAction()->registerFilter();
	}

	// Загрузка языка
	public function food_init() {
		load_plugin_textdomain( $this::FOOD_NAME, false, $this::FOOD_NAME . '/languages/' );
	}

	// Регистрация опций
	public function food_admin_init() {
		register_setting(
			'food-group',
			'food_folders',
		);
		register_setting(
			'food-group',
			'food_auto_delete',
		);
		register_setting(
			'food-group',
			'food_auto_year',
		);
	}

	// Добавление пунктов меню в административную панель сайта
	public function food_admin_menu() {
		// Пункт меню в общее меню
		add_menu_page(
			__("food-menu-plugin", $this::FOOD_NAME),
			__("food-menu-plugin", $this::FOOD_NAME),
			'manage_options',
			FOOD_NAME,
			array($this, 'food_page'),
			'dashicons-open-folder',
			20
		);
		// Пункт меню в меню Настройки
		add_submenu_page( 
			'options-general.php', 
			__('food-settings', $this::FOOD_NAME) . ' «' . __('food-menu-plugin', $this::FOOD_NAME) . '»', 
			__("food-menu-settings", $this::FOOD_NAME), 
			'manage_options', 
			$this::FOOD_NAME . '/options.php',
			'',
			7
		);
	}

	// Вывод ссылки настройки в разделе информации о Плагина
	public function row_meta_link($meta, $plugin_file) {
		if( false === strpos($plugin_file, $this::FOOD_NAME))
			return $meta;
		$meta[] = FOOD_NAME;
		return $meta;
	}

	// Вывод ссылки настройки в разделе Имени Плагина
	public function settings_link($actions, $plugin_file) {
		if( false === strpos($plugin_file, $this::FOOD_NAME))
			return $actions;
		return $actions;
	}

	// Вывод
	public function food_page() {
		include $this->realPath(dirname(__FILE__)) . "/tmpl/page.php";
	}

	// Тест
	public function print() {
		return print_r(FOOD, true);
	}

	// Получение path
	public function realPath($path) {
		return rtrim(preg_replace('/\\\\/', '/', $path), '/');
	}

	// add actions
	private function registerAction() {
		add_action('init',       array($this, 'food_init'));
		add_action('admin_init', array($this, 'food_admin_init'));
		add_action('admin_menu', array($this, 'food_admin_menu'));
		return $this;
	}

	// add filters
	private function registerFilter() {
		add_filter( 'plugin_row_meta',  array($this, 'row_meta_link'), 10, 4 );
		add_filter( 'plugin_action_links',  array($this, 'settings_link'), 10, 2 );
		return $this;
	}

	// Сохранение настроек, проверка существования дополнительных директорий директорий
	// Копирование дополнительных директорий. Перезапись htaccess
	private function save() {
		// htaccess
		include $this->realPath(dirname(__FILE__)) . "/tmpl/htaccess.php";
		// Проверяем существование директории icons-full
		if(!is_dir($this::FOOD_ABSPATH . "/icons-full")):
			// Создаём директорию
			@mkdir($this::FOOD_ABSPATH . "/icons-full", 0755, true);
			@chmod($this::FOOD_ABSPATH . "/icons-full", 0755);
			// Копируем директорию
			$this->copyDir($this->realPath(dirname(__FILE__)) . "/icons-full", $this::FOOD_ABSPATH . "/icons-full");
		endif;
		// Проверяем существование директории viewer
		if(!is_dir($this::FOOD_ABSPATH . "/viewer")):
			// Создаём директорию
			@mkdir($this::FOOD_ABSPATH . "/viewer", 0755, true);
			@chmod($this::FOOD_ABSPATH . "/viewer", 0755);
			// Копируем директорию
			$this->copyDir($this->realPath(dirname(__FILE__)) . "/viewer", $this::FOOD_ABSPATH . "/viewer");;
		endif;

		// Кажется неправильно. Вернее точно неправильно, но пока так.
		// С сохранением и выводом опций пока не разобрался
		// Обновляем опции
		if(isset($_REQUEST["food_folders"])):
			$tmp_folders = esc_sql($_REQUEST["food_folders"]);
			$tmp_folders = preg_split('/[\s,;]+/', $tmp_folders);
			$tarr = array();
			if(is_array($tmp_folders)):
				$food = array("food");
				$this->folders = array_filter(array_unique(array_merge($food, $tmp_folders)));
				sort($this->folders);
				foreach($this->folders as $t_folder):
					$str_t_folder = $this::FOOD_ABSPATH . "/" . $t_folder;
					if(!is_dir($str_t_folder) && !is_file($str_t_folder)):
						// Создаём
						@mkdir($this::FOOD_ABSPATH . "/" . $t_folder, 0755, true);
						@chmod($this::FOOD_ABSPATH . "/" . $t_folder, 0755);
					endif;
					// Перезаписываем файл htaccess
					@file_put_contents($this::FOOD_ABSPATH . "/" . $t_folder . "/.htaccess", $htaccess);
					if($t_folder !== "food"):
						$tarr[] = $t_folder;
					endif;
				endforeach;
			endif;
			$tmp_folders = implode(";", $tarr);
			$autodelete = intval($_REQUEST["food_auto_delete"]);
			$autodelete_year = intval($_REQUEST["food_auto_year"]);
			update_option("food_folders", $tmp_folders);
			update_option("food_auto_delete", $autodelete);
			update_option("food_auto_year", $autodelete_year);
			// Пробегаемся по директориям
			// Перезаписываем htaccess
			foreach($this->folders as $t_folder):
				$str_t_folder = $this::FOOD_ABSPATH . "/" . $t_folder;
				if(!is_dir($str_t_folder) && !is_file($str_t_folder)):
					// Создаём
					@mkdir($this::FOOD_ABSPATH . "/" . $t_folder, 0755, true);
					@chmod($this::FOOD_ABSPATH . "/" . $t_folder, 0755);
				endif;
				// Перезаписываем файл htaccess
				@file_put_contents($this::FOOD_ABSPATH . "/" . $t_folder . "/.htaccess", $htaccess);
			endforeach;
			add_action( 'all_admin_notices', function () {
				wp_admin_notice( 'Настройки сохранены', array(
					'type' => 'success',
					'dismissible' => true,
				));
			} );
		endif;
		return $this;
	}

	// Поиск файлов в директории
	private function getFiles() {
		$files = array();
		if($this->dir):
			// Поиск файлов в директории
			$files_path = join("/", array(
				$this->realPath($this::FOOD_ABSPATH),
				$this->dir
			));
			$iterators = new \DirectoryIterator($files_path);
			foreach ($iterators as $fileinfo):
				// Если это файл
				if($fileinfo->isFile()):
					$ext = strtolower($fileinfo->getExtension());
					if(in_array($ext, $this::FOOD_EXTS)):
						// Проверить дату (год) в имени файла
						$name = $fileinfo->getFilename();
						$re = '/^(?:[\w]+)?(\d{4})/';
						preg_match($re, $name, $matches);
						// Если есть 4 цифры в имени файла
						// Автоудаление
						$autodelete = intval(get_option('food_auto_delete', 0));
						if($matches && $autodelete):
							// Год сейчас
							$year = intval(date("Y", time()));
							// Год в имени файла
							$file_year = intval($matches[1]);
							// Если разница лет больше/равно n лет.
							$year_option = intval(get_option('food_auto_year', 5));
							if($year - $file_year >= $year_option):
								// Удаляем файл
								$file_absolute =  join("/", array($files_path, $name));
								@unlink($file_absolute);
							else:
								// Добавляем файл в отображение
								$files[] = $name;
							endif;
						else:
							// Добавляем файл в отображение
							$files[] = $name;
						endif;
					endif;
				endif;
			endforeach;
			natsort($files);
			$files = array_reverse($files, false);
		endif;
		return $files;
	}

	// Копирование директории
	private function copyDir($source, $dest) {
		$source = rtrim($source, "\\/");
		$dest   = rtrim($dest, "\\/");
		$files = new \RecursiveIteratorIterator(
			new \RecursiveDirectoryIterator(
				$source,
				\RecursiveDirectoryIterator::SKIP_DOTS
			),
			\RecursiveIteratorIterator::SELF_FIRST
		);
		foreach ($files as $item):
			if ($item->isDir()):
				$copy_dir = $dest . "/" . trim(str_replace($source, "", $this->realPath($item->getRealPath())), "\\/");
				@mkdir($copy_dir, 0755, true);
				@chmod($copy_dir, 0755);
			else:
				$copy_file = $dest . "/" . trim(str_replace($source, "", $this->realPath($item->getRealPath())), "\\/");
				@copy($this->realPath($item->getRealPath()), $copy_file);
				@chmod($copy_file, 0644);
			endif;
		endforeach;
	}

	// Удаление директории
	private function removeDir($source) {
		$files = new RecursiveIteratorIterator(
			new RecursiveDirectoryIterator(
				$source,
				RecursiveDirectoryIterator::SKIP_DOTS
			),
			RecursiveIteratorIterator::CHILD_FIRST
		);
		foreach ($files as $item):
			$function = $item->isDir() ? 'rmdir' : 'unlink';
			@$function($this->realPath($item->getRealPath()));
		endforeach;
	}

	/**
	 * Получение размера файла
	 */
	public function getSize($file) {
		$sizes      = array('Tb' => 1099511627776, 'Gb' => 1073741824, 'Mb' => 1048576, 'Kb' => 1024, 'b' => 1);
		$precisions = count($sizes) - 1;
		$size       = filesize($file);
		foreach ($sizes as $unit => $bytes) {
			if ($size >= $bytes) {
				return number_format($size / $bytes, $precisions) . ' ' . $unit;
			}
			$precisions--;
		}
		return '0 b';
	}

	/**
	 * Вывод времени в определённом формате
	 */
	public function toDateFormat( $timestamp = 0 )
	{
		$timestamp = trim($timestamp);
		$timestamp = (int)$timestamp;
		$gmt = get_option('gmt_offset');
		$offset = $timestamp + $gmt * 7200;
		$strTime = date_i18n( "d-m-Y H:i:s", $offset, false );
		return $strTime;
	}

	/**
	 * Очистка имени файла от лишних символов
	 */
	private function stripFileName($filename = "") {
		$filename = strip_tags($filename);
		$filename = preg_replace('/[^\.A-Za-z0-9 _-]/', '', $filename);
		$filename = preg_replace('/\s+/', '-', $filename);
		$filename = preg_replace('/_+/', '-', $filename);
		$filename = preg_replace('/-+/', '-', $filename);
		$filename = trim($filename, '-_.');
		return $filename;
	}

	/**
	 * Транслит имени файла
	 */
	private function translitFile($filename){
		$converter = array(
			'а' => 'a',    'б' => 'b',    'в' => 'v',    'г' => 'g',    'д' => 'd',
			'е' => 'e',    'ё' => 'e',    'ж' => 'zh',   'з' => 'z',    'и' => 'i',
			'й' => 'y',    'к' => 'k',    'л' => 'l',    'м' => 'm',    'н' => 'n',
			'о' => 'o',    'п' => 'p',    'р' => 'r',    'с' => 's',    'т' => 't',
			'у' => 'u',    'ф' => 'f',    'х' => 'h',    'ц' => 'c',    'ч' => 'ch',
			'ш' => 'sh',   'щ' => 'sch',  'ь' => '',     'ы' => 'y',    'ъ' => '',
			'э' => 'e',    'ю' => 'yu',   'я' => 'ya',
	 
			'А' => 'A',    'Б' => 'B',    'В' => 'V',    'Г' => 'G',    'Д' => 'D',
			'Е' => 'E',    'Ё' => 'E',    'Ж' => 'Zh',   'З' => 'Z',    'И' => 'I',
			'Й' => 'Y',    'К' => 'K',    'Л' => 'L',    'М' => 'M',    'Н' => 'N',
			'О' => 'O',    'П' => 'P',    'Р' => 'R',    'С' => 'S',    'Т' => 'T',
			'У' => 'U',    'Ф' => 'F',    'Х' => 'H',    'Ц' => 'C',    'Ч' => 'Ch',
			'Ш' => 'Sh',   'Щ' => 'Sch',  'Ь' => '',     'Ы' => 'Y',    'Ъ' => '',
			'Э' => 'E',    'Ю' => 'Yu',   'Я' => 'Ya',
		);
		$filename = str_replace(array(' ', ','), '-', $filename);
		$filename = strtr($filename, $converter);
		$filename = $this->stripFileName($filename);
		$filename = strtolower($filename);
		return $filename;
	}
}