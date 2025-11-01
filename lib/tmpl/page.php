<?php
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}
?>
<?php
/**
 * Версионность файлов
 * Время последнего изменения файлов
 */
$path = $this->realPath(ABSPATH);
$versions = array();

$main_css = join("/", array(
	$path,
	"wp-content/plugins/" . $this::FOOD_NAME . "/css/main.min.css"
));
$app_css = join("/", array(
	$path,
	"viewer/app.min.css"
));
$jquery_js = join("/", array(
	$path,
	"wp-content/plugins/" . $this::FOOD_NAME . "/js/appjs.min.js"
));
$fansybox_js = join("/", array(
	$path,
	"viewer/fancybox.min.js"
));
$app_js = join("/", array(
	$path,
	"viewer/app.min.js"
));
$main_js = join("/", array(
	$path,
	"wp-content/plugins/" . $this::FOOD_NAME . "/js/main.min.js"
));
$versions = array(
	"main_css" => filemtime($main_css),
	"app_css" => filemtime($app_css),
	"jquery_js" => filemtime($jquery_js),
	"fansybox_js" => filemtime($fansybox_js),
	"app_js" => filemtime($app_js),
	"main_js" => filemtime($main_js),
);
$langArray = array(
	"alert_error_upload_max"         => __("Вы не можете загружать больше %s файл(a/ов).", "food-uploader-plugin"),
	"select_upload_files"            => __("Выберите файлы для загрузки", "food-uploader-plugin"),
	"alert_error_upload_type"        => __("Нельзя загрузить данный тип файла!", "food-uploader-plugin"),
	"one_file"                       => __("файл", "food-uploader-plugin"),
	"two_file"                       => __("файла", "food-uploader-plugin"),
	"thre_file"                      => __("файлов", "food-uploader-plugin"),
	"selected"                       => __("Выбрано:", "food-uploader-plugin"),
	"upload"                         => __("Загрузить", "food-uploader-plugin"),
	"selected_upload_files"          => __("Выберите файлы для загрузки", "food-uploader-plugin"),
	"prompt_rename"                  => __("Укажите новое имя для файла:", "food-uploader-plugin"),
	"confirm_delete"                 => __("Удалить файл %s?"),
	"upload_block_title"             => __("Перетащите сюда файлы *.xlsx или *.pdf для загрузки
Или выберите их с помощю диалога", "food-uploader-plugin"),
	"upload_block_before"            => __("Перетащите сюда файлы (*.xlsx или *.pdf)
Или выберите их с помощю диалога", "food-uploader-plugin"),
	"tools"                          => __("Инструменты", "food-uploader-plugin"),
	"colvis"                         => __("Видимость столбцов", "food-uploader-plugin"),
	"colvis_title"                   => __("Видимость столбцов
Влияет на Печать", "food-uploader-plugin"),
	"export"                         => __("Экспорт", "food-uploader-plugin"),
	"export_excel"                   => __("Экспорт в XLSX", "food-uploader-plugin"),
	"export_excel_attr_title"        => __("Сохранить данные в файл XLSX", "food-uploader-plugin"),
	"export_excel_filename"          => __("Экспорт %s в XLSX", "food-uploader-plugin"),
	"export_pdf"                     => __("Экспорт в PDF", "food-uploader-plugin"),
	"export_pdf_attr_title"          => __("Сохранить данные в файл PDF", "food-uploader-plugin"),
	"export_pdf_filename"            => __("Экспорт %s в PDF", "food-uploader-plugin"),
	"export_title"                   => __("Директория %s", "food-uploader-plugin"),
	"export_pdf_info"                => __("Меню ежедневного питания.", "food-uploader-plugin"),
	"print"                          => __("Печать", "food-uploader-plugin"),
	"print_title"                    => __("Вывести данные на печать", "food-uploader-plugin"),
	"settings"                       => __("Настройки «Меню ежедневного питания»", "food-uploader-plugin"),
);
?>
<script>
	const LANG = <?= json_encode($langArray);?>;
</script>
<link rel="stylesheet" href="/viewer/app.min.css?<?= $versions["app_css"];?>">
<link rel="stylesheet" href="/wp-content/plugins/<?= $this::FOOD_NAME;?>/css/main.min.css?<?= $versions["main_css"];?>">
<div class="wrap" id="wp-plugins-food">
	<div class="display-flex wp-heading-title">
		<h1 class="wp-heading-inline"><i class="food-icon food-icon-folder-open"></i>&nbsp;<?= __("Меню ежедневного питания", "food-uploader-plugin");?></h1>
		<span>
			<a class="dashicons dashicons-admin-generic thickbox open-plugin-details-modal" href="options-general.php?page=food-uploader-plugin%2Foptions.php&tab=plugin-settings&TB_iframe=true"></a>
		</span>
	</div>
	<hr class="wp-header-end">
<?php
	if($this->dir):
?>
	<div class="folder-title">
		<h3><?= __("Директория", "food-uploader-plugin");?> <code>/<?= $this->dir;?>/</code> <a class="food-icon food-icon-new-window" href="/<?= $this->dir;?>/" target="_blank" title="<?= __("Открыть в новой вкладке для просмотра директории", "food-uploader-plugin");?>"></a></h3>
		<p class="food-title-root"><i class="food-icon food-icon-folder-open-o"></i>&nbsp;&nbsp;&nbsp;<a href="admin.php?page=<?= $this::FOOD_NAME;?>"><?= __("На верхний уровень", "food-uploader-plugin");?></a> / <a href="admin.php?page=<?= $this::FOOD_NAME;?>&dir=<?= $this->dir;?>"><?= $this->dir;?></a></p>
	</div>
<?php
	else:
?>
	<div class="clearfix"></div>
	<div class="folder-title">
		<h3><?= __("Корневая директория", "food-uploader-plugin");?></h3>
	</div>
<?php
	endif;
?>
<?php
	if($this->dir):
?>
	<form action="admin.php?page=<?= $this::FOOD_NAME;?>&dir=<?= $this->dir;?>" class="text-right" name="upload" method="post" enctype="multipart/form-data">
		<input type="hidden" name="mode" value="upload">
		<input type="file" name="userfiles[]" multiple="" accept=".xlsx,.pdf" max="20" onchange="uploadFiles(this)">
		<p id="p_uploads" class="alert alert-info"></p>
	</form>
	<form action="admin.php?page=<?= $this::FOOD_NAME;?>&dir=<?= $this->dir;?>" class="hidden" name="form_mode" method="post" enctype="multipart/form-data">
		<input type="hidden" name="mode">
		<input type="hidden" name="file">
		<input type="hidden" name="new_file">
	</form>
<?php
	endif;
?>
	<div class="food-row hidden">
		<div class="">
			<table class="table table-bordered table-hover text-nowrap" style="width: 100%;">
				<thead>
					<tr style="width: 100%;">
<?php
						if($this->dir):
?>
						<th data-dt-name="name" class="manage-column column-primary text-nowrap text-left text-upercase"><?= __("Имя", "food-uploader-plugin");?></th>
						<th data-dt-name="permissions" class="manage-column text-nowrap text-right text-upercase" width="1%"><?= __("Права", "food-uploader-plugin");?></th>
						<th data-dt-name="change" class="manage-column text-nowrap text-right text-upercase" width="1%"><?= __("Изменён", "food-uploader-plugin");?></th>
						<th data-dt-name="size" class="manage-column text-nowrap text-right text-upercase" width="1%"><?= __("Размер", "food-uploader-plugin");?></th>
						<th data-dt-name="actions" class="manage-column text-nowrap text-right text-upercase" width="1%"><?= __("Действия", "food-uploader-plugin");?></th>
<?php
						else:
?>
						<th><?= __("Директории", "food-uploader-plugin");?></th>
						<th style="width: 1%;"></th>
<?php
						endif;
?>
					</tr>
				</thead>
				<tbody>
<?php
					$timezone = wp_timezone();
					if($this->dir):
						if(count($this->files)):
							foreach($this->files as $key => $value):
?>
					<tr>
						<td><i class="food-icon <?= $value["icon"];?>"></i><a href="<?= $value["link"];?>" target="_blank" class="food-link"><?= $value["name"];?></a></td>
						<td><?= $value["perms"]; ?></td>
						<td><?= wp_date( "d-m-Y H:i:s", $value["time"], $timezone );  ?></td>
						<td><?= $value["size"];  ?></td>
						<td>
							<div class="flex">
								<button class="btn btn-default food-icon food-icon-edit" data-mode="rename" data-file="<?= $value["name"];?>" title="<?= __("Переименовать", "food-uploader-plugin");?> «<?= $value["name"];?>»"></button><button class="btn btn-danger food-icon food-icon-trash" data-mode="delete" data-file="<?= $value["name"];?>" title="<?= __("Удалить", "food-uploader-plugin");?> «<?= $value["name"];?>»"></button>
							</div>
						</td>
					</tr>
<?php
							endforeach;
						endif;
					else:
						if(count($this->folders)):
							foreach ($this->folders as $key => $value):
?>
					<tr>
						<td><i class="food-icon food-icon-folder-open-o"></i><a href="admin.php?page=<?= $this::FOOD_NAME;?>&dir=<?= $value;?>"><?= $value;?></a></td>
						<th style="width: 1%;"><a href="/<?= $value;?>/" target="_blank" class="food-icon food-icon-new-window" title="<?= __("Открыть в новой вкладке для просмотра директории", "food-uploader-plugin");?>"></a></th>
					</tr>
<?php
							endforeach;
						endif;
					endif;
?>
				</tbody>
			</table>
		</div>
	</div>
	<hr>
	<div class="wp-footer">
		<p><?= __("Если возникнут проблемы или вопросы, то обращайтесь в Telegram к", "food-uploader-plugin"); ?> <a href="https://t.me/ProjectSoft" target="_blank">ProjectSoft</a> (Чернышёв Андрей)</p>
	</div>
</div>
<script src="/wp-content/plugins/<?= $this::FOOD_NAME;?>/js/appjs.min.js?<?= $versions["jquery_js"];?>"></script>
<script src="/viewer/fancybox.min.js?<?= $versions["fansybox_js"];?>"></script>
<!--script src="/viewer/app.min.js?<?= $versions["app_js"];?>"></script-->
<script src="/wp-content/plugins/<?= $this::FOOD_NAME;?>/js/main.min.js?<?= $versions["main_js"];?>"></script>