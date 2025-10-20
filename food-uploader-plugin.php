<?php
/*
	Plugin Name:        Food File Uploader
	Plugin URI:         https://github.com/ProjectSoft-STUDIONIONS/food-uploader-plugin
	Description:        WordPress Плагин для загрузки файлов xlsx или pdf в папку /food/, доступен только администраторам. Плагин актуален для сайтов школ России.
	Version:            2.1.7
	Author:             Чернышёв Андрей aka ProjectSoft <projectsoft2009@yandex.ru>
	Author URI:         https://github.com/ProjectSoft-STUDIONIONS/
	GitHub Plugin URI:  https://github.com/ProjectSoft-STUDIONIONS/food-uploader-plugin
	License:            GPL-2.0
	License URI:        https://mit-license.org/
	Donate link:        https://projectsoft.ru/donate/
	Domain Path:        languages/
	Text Domain:        food-uploader-plugin
	Requires at least:  5.7
	Requires PHP:       7.4
	Creation Date:      2025-02-06 04:18:00
	Last Update:        2025-10-20 14:53:26
*/

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}
use ProjectSoft\Food;

// зависимости
wp_cookie_constants();
require ABSPATH . WPINC . '/pluggable.php';

// Нормальный вид ABSPATH
$abs_path = rtrim(preg_replace('/\\\\/', '/', ABSPATH), '/');
// Директория плагина
$plugin_dir = rtrim(preg_replace('/\\\\/', '/', dirname(__FILE__)), '/');
// Имя плагина получаем из имени директории
$plugin_name = dirname( plugin_basename( __FILE__ ) );

// Константы без которых не обойтись
define('FOOD_NAME', $plugin_name);
define('FOOD_PATH', $plugin_dir);
define('FOOD_ABSPATH', $abs_path);

if ( ! defined( 'IFRAME_REQUEST' ) && isset( $_GET['tab'] ) && ( 'plugin-settings' === $_GET['tab'] ) ) {
	define( 'IFRAME_REQUEST', true );
}

if (is_admin() && current_user_can('manage_options')):
	// Подключаем класс Food
	require_once (FOOD_PATH . "/lib/Food.php");
	// Запускаем
	new Food();
endif;
