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
?>
<link rel="stylesheet" href="/viewer/app.min.css?<?= $versions["app_css"];?>">
<link rel="stylesheet" href="/wp-content/plugins/<?= $this::FOOD_NAME;?>/css/main.min.css?<?= $versions["main_css"];?>">
<div class="wrap" id="wp-plugins-food">
	<div class="display-flex wp-heading-title">
		<h1 class="wp-heading-inline"><i class="dashicons dashicons-open-folder"></i>&nbsp;<?= __("food-menu-plugin", $this::FOOD_NAME);?></h1>
		<span>
			<a class="dashicons dashicons-admin-generic thickbox open-plugin-details-modal" href="options-general.php?page=food-uploader-plugin%2Foptions.php&tab=plugin-settings&TB_iframe=true&width=772&height=623"></a>
		</span>
	</div>
	<hr class="wp-header-end">
<?php
	if($this->dir):
?>
	<div class="clearfix">
		<form action="admin.php?page=<?= $this::FOOD_NAME;?>&dir=<?= $this->dir;?>" class="text-right" name="upload" method="post" enctype="multipart/form-data">
			<input type="hidden" name="mode" value="upload">
			<div id="uploader" class="text-right">
				<label class="btn btn-primary text-uppercase">
					<i class="glyphicon glyphicon-floppy-save"></i>&nbsp;<?= __("food-select-btn", $this::FOOD_NAME);?> <input type="file" name="userfiles[]" multiple="" accept=".xlsx,.pdf" max="20">
				</label>
				<p id="p_uploads" class="alert alert-info"></p>
				<button class="btn btn-primary text-uppercase" type="button" onclick="document.upload.submit()"><i class="glyphicon glyphicon-cloud-upload"></i>&nbsp;<?= __("food-upload-btn", $this::FOOD_NAME);?></button>
			</div>
		</form>
		<form action="admin.php?page=<?= $this::FOOD_NAME;?>&dir=<?= $this->dir;?>" class="hidden" name="form_mode" method="post" enctype="multipart/form-data">
			<input type="hidden" name="mode">
			<input type="hidden" name="file">
			<input type="hidden" name="new_file">
		</form>
	</div>
	<div class="folder-title">
		<h3>Директория <code>/<?= $this->dir;?>/</code> <a href="/<?= $this->dir;?>/" target="_blank"></a></h3>
		<p class="food-title-root"><i class="glyphicon glyphicon-folder-open"></i>&nbsp;&nbsp;&nbsp;<a href="admin.php?page=<?= $this::FOOD_NAME;?>">На верхний уровень</a></p>
	</div>
<?php
	else:
?>
	<div class="clearfix"></div>
	<div class="folder-title">
		<h3>Корневая директория</h3>
	</div>
<?php
	endif;
?>
	<div class="food-row hidden">
		<div class="table-responsive">
			<table class="table table-bordered table-hover text-nowrap">
				<thead>
					<tr>
<?php
						if($this->dir):
?>
						<th data-dt-name="name" class="manage-column column-primary text-nowrap text-left text-upercase"><?= __("name", $this::FOOD_NAME);?></th>
						<th data-dt-name="permissions" class="manage-column text-nowrap text-right text-upercase" width="1%"><?= __("file-permissions", $this::FOOD_NAME);?></th>
						<th data-dt-name="change" class="manage-column text-nowrap text-right text-upercase" width="1%"><?= __("time-of-change", $this::FOOD_NAME);?></th>
						<th data-dt-name="size" class="manage-column text-nowrap text-right text-upercase" width="1%"><?= __("file-size", $this::FOOD_NAME);?></th>
						<th data-dt-name="actions" class="manage-column text-nowrap text-right text-upercase" width="1%"><?= __("actions", $this::FOOD_NAME);?></th>
<?php
						else:
?>
						<th><?= __("food-table-dirs", $this::FOOD_NAME);?></th>
						<th style="width: 1%;"></th>
<?php
						endif;
?>
					</tr>
				</thead>
				<tbody>
<?php
					if($this->dir):
						if(count($this->files)):
							foreach($this->files as $key => $value):
								$file = join("/", array(
									$this::FOOD_ABSPATH,
									$this->dir,
									$value
								));
								$perms = substr(sprintf('%o', fileperms($file)), -4);
								$size = $this->getSize($file);
								$ltime = strtotime(wp_timezone_string(), filemtime($file));
								$date = $this->toDateFormat($ltime);
?>
					<tr>
						<td><a href="/<?= $this->dir . "/" . $value;?>" target="_blank" class="food-link"><?= $value;?></td>
						<td><?= $perms; ?></td>
						<td><?= $date;  ?></td>
						<td><?= $size;  ?></td>
						<td>
							<div class="flex">
								<i class="btn btn-primary glyphicon glyphicon-edit food-rename" data-mode="rename" data-file="<?= $value;?>" title="Переименовать «<?= $value;?>»"></i>
								<i class="btn btn-primary glyphicon glyphicon-trash food-delete" data-mode="delete" data-file="<?= $value;?>" title="Удалить «<?= $value;?>»"></i>
							</div>
						</td>
					</tr>
<?php
							endforeach;
						else:
?>
					<tr>
						<td><?= __('files-not-found', $this::FOOD_NAME);?></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
					</tr>
<?php
						endif;
					else:
						foreach ($this->folders as $key => $value):
?>
					<tr>
						<td><a href="admin.php?page=<?= $this::FOOD_NAME;?>&dir=<?= $value;?>"><?= $value;?></a></td>
						<th style="width: 1%;"><a href="/<?= $value;?>/" target="_blank" class="glyphicon glyphicon-new-window"></a></th>
					</tr>
<?php
						endforeach;
					endif;
?>
				</tbody>
			</table>
		</div>
	</div>
<?php
$tmp_folders = get_option('food_folders', '');
$tmp_folders = preg_split('/[\s,;]+/', $tmp_folders);
?>
</div>
<script src="/wp-content/plugins/<?= $this::FOOD_NAME;?>/js/appjs.min.js?<?= $versions["jquery_js"];?>"></script>
<script src="/viewer/fancybox.min.js?<?= $versions["fansybox_js"];?>"></script>
<!--script src="/viewer/app.min.js?<?= $versions["app_js"];?>"></script-->
<script src="/wp-content/plugins/<?= $this::FOOD_NAME;?>/js/main.min.js?<?= $versions["main_js"];?>"></script>