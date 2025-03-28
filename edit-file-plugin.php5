<?php
/*
	Plugin Name:        Food File Uploader
	Plugin URI:         %homepage%
	Description:        %description%
	Version:            %version%
	Author:             %author%
	Author URI:         https://github.com/ProjectSoft-STUDIONIONS/
	GitHub Plugin URI:  %homepage%
	License:            %license%
	License URI:        %license_uri%
	Donate link:        https://projectsoft.ru/donate/
	Domain Path:        languages/
	Text Domain:        %name%
	Requires at least:  5.7
	Requires PHP:       7.4
	Last Update:        %date%
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
