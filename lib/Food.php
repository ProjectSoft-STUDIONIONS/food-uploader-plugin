<?php

namespace ProjectSoft;

class Food {
	// Имя плагина
	public const FOOD_NAME = FOOD_NAME;
	// Абсолютный путь к директории плагина
	public const FOOD_PATH = FOOD_PATH;
	// Аьсолютный путь к установленной системе
	public const FOOD_ABSPATH = FOOD_ABSPATH;
	// Локализацию задаём здесь.
	// Файл локализации должен существовать
	// Например, для локали en_US (Английский США) - food-uploader-plugin-en_US.mo
	public const FOOD_LOCALE = 'ru_RU';

	// Расширения доступные для загрузки
	public const FOOD_EXTS = array(
		"xlsx", // Excel xlsx file
		"pdf" // PDF File
	);
	// Типы файлов разрешённые для загрузки
	public const FOOD_TYPES = array(
		'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', // Excel xlsx file
		'application/pdf' // PDF File
	);

	// Обслуживаемая директория
	private $dir = '';
	// Обслуживаемые директории
	private $folders = array();
	// Список файлов из директории
	private $files = array();

	// Для сбора данных
	private $all = array(
		'success' => array(),
		'error' => array()
	);

	// Для сообщений
	private $msg = '';

	public function __construct() {
		// Загрузка перевода
		load_plugin_textdomain("food-uploader-plugin", false, "food-uploader-plugin/languages");
		//load_textdomain( "$this::FOOD_NAME", $this::FOOD_PATH . '/languages/' . $this::FOOD_NAME . '-' . $this::FOOD_LOCALE . '.mo');
		// События, Действия, Фильтры
		$this->registerAction();
		$this->registerFilter();
		// Получение директорий
		$folders  = get_option('food_folders', '');
		$folders  = preg_split('/[\s,;]+/', $folders);
		$food     = array("food");
		$this->folders = array_filter(array_unique(array_merge($food, $folders)));
		sort($this->folders);
		// Сохранение настроек
		$this->save();
		// Получение файлов
		if(isset($_REQUEST["dir"])):
			$dir = $_REQUEST["dir"];
			if(in_array($dir, $this->folders)):
				// Устанавливаем директорию
				$this->dir = $dir;
				// Здесь нужно сделать загрузку, переименование, удаление
				if(isset($_REQUEST['mode'])):
					$mode = $_REQUEST['mode'];
					switch ($mode) {
						case 'upload':
							// Загрузка
							$this->upload();
							break;
						case 'rename':
							// Переименование
							$this->rename();
							break;
						case 'delete':
							// Удаление
							$this->delete();
							break;
						default:
							break;
					}
				endif;
				// Получаем список файлов
				$this->files = $this->getFiles();
			else:
				// Redirect 302
				header( "Location: " . site_url() . '/wp-admin/admin.php?page=' . $this::FOOD_NAME, true, 302);
				exit;
			endif;
		endif;
	}

	// Загрузка языка
	public function food_init() {
		load_plugin_textdomain( "food-uploader-plugin", false, "food-uploader-plugin/languages");
	}

	// Регистрация опций
	public function food_admin_init() {
		// Дополнительные директории
		register_setting(
			'food-group',
			'food_folders',
		);
		// Включение/Отключение автоудаления старых файлов
		register_setting(
			'food-group',
			'food_auto_delete',
		);
		// Насколько лет старые файлы удалять
		register_setting(
			'food-group',
			'food_auto_year',
		);
	}

	// Добавление пунктов меню в административную панель сайта
	public function food_admin_menu() {
		// Пункт меню в общее меню
		add_menu_page(
			__("Меню ежедневного питания", "food-uploader-plugin"),
			__("Меню ежедневного питания", "food-uploader-plugin"),
			'manage_options',
			FOOD_NAME,
			array($this, 'food_page'),
			'dashicons-open-folder',
			20
		);
		// Пункт меню в меню Настройки
		add_submenu_page( 
			'options-general.php', 
			__('Настройки', "food-uploader-plugin") . ' «' . __('Меню ежедневного питания', "food-uploader-plugin") . '»', 
			__("ПИТАНИЕ", "food-uploader-plugin"), 
			'manage_options', 
			$this::FOOD_NAME . '/options.php',
			'',
			7
		);
	}

	// Вывод ссылки настройки в разделе информации о Плагина
	public function row_meta_link($meta, $plugin_file) {
		if( false === strpos($plugin_file, "food-uploader-plugin"))
			return $meta;
		$meta[] = '<a href="options-general.php?page=food-uploader-plugin%2Foptions.php">' . __('Настройки', "food-uploader-plugin") . '</a>';
		return $meta;
	}

	// Вывод ссылки настройки в разделе Имени Плагина
	public function settings_link($actions, $plugin_file) {
		if( false === strpos($plugin_file, $this::FOOD_NAME))
			return $actions;
		$actions[] = '<a href="options-general.php?page=food-uploader-plugin%2Foptions.php">' . __('Настройки', "food-uploader-plugin") . '</a>';
		$actions[] = '<a href="admin.php?page=food-uploader-plugin">' . __('Открыть плагин', "food-uploader-plugin") . '</a>';
		return $actions;
	}

	// Меню к кнопке добавить
	public function admin_bar_link($wp_admin_bar) {
		/**
		 * Можно удалить некоторые пункты меню.
		 * Например:
		 * 
		 * удалить пункт Добавить -> Медиафайл
		 * $wp_admin_bar->remove_node('new-media');
		 * 
		 * удалить пункт Добавить -> Пользователя
		 * $wp_admin_bar->remove_node('new-user');
		 */
		// Добавляем пункт меню для перехода на обслуживание директории food (она присутствует всегда внезависимости от настроек)
		$wp_admin_bar->add_node( array(
			// ID пункта
			'id' => 'food-menu-add',
			// Отображение пункта
			'title' => mb_strtoupper(__('Меню ежедневного питания', "food-uploader-plugin")),
			// Ссылка на пункте
			'href' => admin_url('admin.php?page=food-uploader-plugin&dir=food'),
			// Куда добавляем пункт меню
			'parent' => 'new-content',
			// Аттрибуты тега ссылки
			'meta' => array('class' => 'ab-item')
		));
	}

	// Подключаем Вывод
	public function food_page() {
		include $this->realPath(dirname(__FILE__)) . "/tmpl/page.php";
	}

	// Тест
	public function print() {
		return print_r(FOOD, true);
	}

	// Получение форматированной директории
	public function realPath($path) {
		return rtrim(preg_replace('/\\\\/', '/', $path), '/');
	}

	// Действия
	private function registerAction() {
		add_action('init',            array($this, 'food_init'));
		add_action('admin_init',      array($this, 'food_admin_init'));
		add_action('admin_menu',      array($this, 'food_admin_menu'));
		add_action('admin_bar_menu',  array($this, 'admin_bar_link'), 100 );
		add_thickbox();
		return $this;
	}

	// Фильтры
	private function registerFilter() {
		add_filter( 'plugin_row_meta',     array($this, 'row_meta_link'), 10, 4 );
		add_filter( 'plugin_action_links', array($this, 'settings_link'), 10, 2 );
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
			// Приведём в нужный формат Автоудаление
			$autodelete = $autodelete ? 1 : 0;
			// Приведём в нужный формат время лет от 1 до 5
			$autodelete_year = $autodelete_year > 0 && $autodelete_year < 5 ? $autodelete_year : 5;
			// Обновляем опции
			update_option("food_folders", $tmp_folders);
			update_option("food_auto_delete", $autodelete);
			update_option("food_auto_year", $autodelete_year);
			add_action( 'all_admin_notices', function () {
				wp_admin_notice( __('Настройки сохранены', "food-uploader-plugin"), array(
					'type' => 'success',
					'dismissible' => true,
				));
			});
		endif;
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
		return $this;
	}

	// Поиск файлов в директории
	private function getFiles() {
		$files = array();
		$this->all = array(
			'success' => array(),
			'error' => array()
		);
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
								// Добавляем информацию об удалении файла
								$this->all['success'][] = $name;
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
			// Если информация есть
			if(count($this->all['success'])):
				// Отправляем событие с информацией
				add_action( 'all_admin_notices', function () {
					$this->msg = "<b>" . __("Автоудаление файлов:", "food-uploader-plugin") . "</b> " . count($this->all['success']) . "<br>";
					$this->msg .= "<code>" . implode("<br>", $this->all['success']) . "</code>";
					wp_admin_notice( $this->msg, array(
						'type' => 'success',
						'dismissible' => true,
					));
				});
			endif;
		endif;
		return $files;
	}

	// Загрузка файлов
	private function upload() {
		$this->msg = '';
		if($this->dir && in_array($this->dir, $this->folders)):
			if(isset($_FILES['userfiles'])):
				$this->all = array(
					'success' => array(),
					'error' => array()
				);
				$files = $_FILES['userfiles'];
				foreach($files['name'] as $i => $name):
					if (empty($files['tmp_name'][$i])) continue;
					// Преобразуем в нижний регистр
					$name = strtolower($files['name'][$i]);
					// Транслит имени файла
					$name = $this->translitFile($name);
					// Проверяем тип файла
					if (!in_array($files['type'][$i], $this::FOOD_TYPES)):
						// Собираем ошибки
						$this->all["error"][] = '<b>' . __("Ошибка: формат файла не поддерживается", "food-uploader-plugin") . ':</b> <code>' . $files['name'][$i] . '</code>';
					else:
						// Продолжаем
						$uploaddir = $this::FOOD_ABSPATH . "/" . $this->dir;
						$extension = pathinfo($name, PATHINFO_EXTENSION);
						if(is_uploaded_file($files['tmp_name'][$i])):
							// Удалось загрузить файл
							// Перемещаем файл
							if (@move_uploaded_file($files['tmp_name'][$i], $uploaddir . "/" . $name)):
								// Удалось переместить файл
								// Меняем аттрибуты файла
								if (strtoupper(substr(PHP_OS, 0, 3)) != 'WIN'):
									@chmod($uploaddir . "/" . $name, 0644);
								endif;
								// Собираем удачную загрузку
								$this->all["success"][] = '<b>' . __("Файл загружен", "food-uploader-plugin") . ':</b> <code>' . $name . '</code>';
							else:
								// Не удалось переместить файл
								$this->all["error"][] = '<b>' . __("Не удалось переместить файл", "food-uploader-plugin") . ':</b> <code>' . $files['name'][$i] . '</code>';
							endif;
						else:
							// Не удалось загрузить файл
							$this->all["error"][] = '<b>' . __("Не удалось загрузить файл", "food-uploader-plugin") . ':</b> <code>' . $files['name'][$i] . '</code>';
						endif;
					endif;
				endforeach;
				if(count($this->all["error"]) > 0):
					$this->msg = "<b>" . __("Неудачно загруженных файлов:", "food-uploader-plugin") . "</b> " . count($this->all["error"]) . "<br>";
					$this->msg .= implode("<br>", $this->all["error"]);
					add_action( 'all_admin_notices', function () {
						wp_admin_notice( $this->msg, array(
							'type' => 'error',
							'dismissible' => true,
						));
					});
					return;
				endif;
				if(count($this->all["success"]) > 0):
					$this->msg = "<b>" . __("Удачно загруженных файлов:", "food-uploader-plugin") . "</b> " . count($this->all["success"]) . "<br>";
					$this->msg .= implode("<br>", $this->all["success"]);
					add_action( 'all_admin_notices', function () {
						//implode("<br>", $this->all["success"]);
						wp_admin_notice( $this->msg, array(
							'type' => 'success',
							'dismissible' => true,
						));
					});
					return;
				endif;
			endif;
		endif;
	}

	// Переименование файла
	private function rename() {
		if($this->dir):
			if(isset($_REQUEST['file']) && isset($_REQUEST['new_file'])):
				global $file, $new_file;
				$file = esc_sql($_REQUEST['file']);
				$new_file = esc_sql($_REQUEST['new_file']);
				$startpath = $this::FOOD_ABSPATH . "/" . $this->dir;
				$this->msg = '';
				// Если имена одинаковые - ничего не делаем. Выходим
				if($file == $new_file):
					add_action( 'all_admin_notices', function () {
						global $file, $new_file;
						$this->msg = "<b>" . __("Файл существует.", "food-uploader-plugin") . "</b><br><code>" . $file . "</code>";
						wp_admin_notice( $this->msg, array(
							'type' => 'error',
							'dismissible' => true,
						));
					});
					return;
				endif;
				// Исходный файл
				$old_pathinfo = pathinfo($file);
				$old_pathinfo['extension'] = trim($old_pathinfo['extension']);
				// Переименование только pdf или xlsx
				if(!in_array($old_pathinfo['extension'], $this::FOOD_EXTS)):
					// Запрет на переименование файла
					add_action( 'all_admin_notices', function () {
						global $file, $new_file;
						$this->msg = "<b>" . __("Запрет на переименование файла", "food-uploader-plugin") . "</b><br><code>" . $file . "</code>";
						wp_admin_notice( $this->msg, array(
							'type' => 'error',
							'dismissible' => true,
						));
					});
					return;
				endif;
				// Транслит имени файла
				$pthinfo = pathinfo($new_file);
				$f_name = $pthinfo['filename'];

				$f_name = $this->translitFile($f_name);
				// Запрещаем переименовывать расширение.
				// Объединяем новое имя с расширением исходного файла
				$new_file = $f_name . "." . $old_pathinfo['extension'];
				// Если имена одинаковые - выходим c ошибкой
				if($file == $new_file):
					add_action( 'all_admin_notices', function () {
						global $file, $new_file;
						$this->msg = "<b>" . __("Файл существует.", "food-uploader-plugin") . "</b><br><code>" . $file . "</code>";
						wp_admin_notice( $this->msg, array(
							'type' => 'error',
							'dismissible' => true,
						));
					});
					return;
				endif;
				$oFile = $startpath . "/" . $file;
				$nFile = $startpath . "/" . $new_file;
				// Существование исходного файла
				if(is_file($oFile)):
					// Продолжаем. Есть ли имя переименованного файла.
					if(!is_file($nFile)):
						// Переименовываем
						if(@rename($oFile, $nFile)):
							// Удачно
							add_action( 'all_admin_notices', function () {
								global $file, $new_file;
								$this->msg = "<b>" . __("Файл переименован.", "food-uploader-plugin") . "</b><br><code>" . "$file => $new_file" . "</code>";
								wp_admin_notice( $this->msg, array(
									'type' => 'success',
									'dismissible' => true,
								));
							});
							return;
						else:
							// Не удачно
							add_action( 'all_admin_notices', function () {
								global $file, $new_file;
								$this->msg = "<b>" . __("Не удалось переименовать файл.", "food-uploader-plugin") . "</b><br><code>" . "$file => $new_file" . "</code>";
								wp_admin_notice( $this->msg, array(
									'type' => 'error',
									'dismissible' => true,
								));
							});
							return;
						endif;
					else:
						// Уже есть данный файл
						add_action( 'all_admin_notices', function () {
							global $file, $new_file;
							$this->msg = "<b>" . __("Файл существует.", "food-uploader-plugin") . "</b><br><code>" . "$file => $new_file" . "</code>";
							wp_admin_notice( $this->msg, array(
								'type' => 'error',
								'dismissible' => true,
							));
						});
						return;
					endif;
				else:
					// Не существует
					add_action( 'all_admin_notices', function () {
						global $file, $new_file;
						$this->msg = "<b>" . __("Файл не существует.", "food-uploader-plugin") . "</b><br><code>" . $file . "</code>";
						wp_admin_notice( $this->msg, array(
							'type' => 'error',
							'dismissible' => true,
						));
					});
					return;
				endif;
			endif;
		endif;
		return;
	}

	// Удаление файла
	private function delete() {
		if($this->dir):
			if(isset($_REQUEST['file'])):
				global $file;
				$file = esc_sql($_REQUEST['file']);
				$startpath = $this::FOOD_ABSPATH . "/" . $this->dir;
				$old_file = $startpath . "/" . $file;
				if(is_file($old_file)):
					if(@unlink($old_file)):
						add_action( 'all_admin_notices', function () {
							global $file;
							$this->msg = "<b>" . __("Файл удалён.", "food-uploader-plugin") . "</b><br><code>" . $file . "</code>";
							wp_admin_notice( $this->msg, array(
								'type' => 'success',
								'dismissible' => true,
							));
						});
					else:
						add_action( 'all_admin_notices', function () {
							global $file;
							$this->msg = "<b>" . __("Файл не был удален.", "food-uploader-plugin") . "</b><br><code>" . $file . "</code>";
							wp_admin_notice( $this->msg, array(
								'type' => 'error',
								'dismissible' => true,
							));
						});
					endif;
				else:
					add_action( 'all_admin_notices', function () {
						global $file;
						$this->msg = "<b>" . __("Файл не существует.", "food-uploader-plugin") . "</b><br><code>" . $file . "</code>";
						wp_admin_notice( $this->msg, array(
							'type' => 'error',
							'dismissible' => true,
						));
					});
				endif;
				return;
			endif;
		endif;
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