<?php if (!defined('ABSPATH')) die(); ?>
<h1><i class="dashicons dashicons-admin-generic"></i>&nbsp;<?= esc_html(get_admin_page_title());?></h1>
<div class="wrap">
<?php
$url = (isset( $_GET['tab'] ) && ( 'plugin-settings' === $_GET['tab'] )) ? 
		"options-general.php?&tab=plugin-settings&page=food-uploader-plugin%2Foptions.php"
		: 
		"options-general.php?page=food-uploader-plugin%2Foptions.php";
?>
	<form action="<?= $url;?>" method="post">
		<?php settings_fields( 'food-group' ); ?>
		<?php do_settings_sections( 'food-group' ); ?>
		<table class="form-table" style="width: 100%;">
			<tr valign="top">
				<th scope="row"><?= __("Дополнительные директории", "food-uploader-plugin");?></th>
				<td>
					<input type="text" name="food_folders" value="<?= esc_attr( get_option('food_folders', '') );?>" style="width: 100%;">
					<p class="description"><em><?= __("Вводить через пробел, запятую или точку с запятой<br>Директория <code>food</code> присутствует всегда и независимо от этой настройки", "food-uploader-plugin");?></em></p>
				</td>
			</tr>
			<tr valign="top">
				<th scope="row"><?= __("Автоудаление старых файлов", "food-uploader-plugin");?></th>
				<td>
					<select name="food_auto_delete" value="<?= esc_attr( get_option('food_auto_delete', '0') );?>">
						<option value="1" <?= esc_attr( get_option('food_auto_delete', '0') ) == "1" ? "selected" : "";?>>Да</option>
						<option value="0"<?= esc_attr( get_option('food_auto_delete', '0') ) == "1" ? "" : "selected";?>>Нет</option>
					</select>
					<p class="description"><em></em></p>
				</td>
			</tr>
			<tr valign="top">
				<th scope="row"><?= __("Автоудаление старых файлов старше", "food-uploader-plugin");?></th>
				<td>
					<input type="number" name="food_auto_year" value="<?= esc_attr( get_option('food_auto_year', '5') );?>" min="1" max="5"> Года/Лет
					<p class="description"><em></em></p>
				</td>
			</tr>
			<tr valign="top">
				<td colspan="2" style="text-align: right;">
					<?php submit_button(); ?>
				</td>
			</tr>
		</table>
	</form>
</div>
<style>
	p.submit {
		text-align: right;
	}
</style>
<script>
<?php
if(IFRAME_REQUEST && isset( $_GET['tab'] ) && ( 'plugin-settings' === $_GET['tab'] ) && isset($_REQUEST['food_folders'])):
?>
let btn, wind;
wind = window.parent;
if(btn = wind.document.querySelector("#TB_closeWindowButton")) {
	setTimeout(() => {
		btn.click();
		wind.location.reload();
	}, 300);
}
<?php
endif;
?>
</script>