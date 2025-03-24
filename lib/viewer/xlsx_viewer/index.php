<!DOCTYPE html>
<html lang="ru">
	<head>
		<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
		<meta http-equiv="X-UA-Compatible" content="IE=EmulateIE9">
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<title>Предпросмотр Microsoft Office Excel (xls, xlsx) файлов</title>
		<link rel="shortcut icon" href="/favicon.ico">
		<link type="text/css" rel="stylesheet" href="xlsx_main.css?<?=filemtime(dirname(__FILE__) . '/xlsx_main.css');?>">
	</head>
	<body>
		<div class="header">
			<div class="wrapper">
				<p id="title">&nbsp;</p>
				<p><a id="download">Скачать</a></p>
			</div>
		</div>
		<div class="main">
			<div class="wrapper">
				<div id="inner"></div>
			</div>
		</div>
		<div class="footer"></div>
		<script type="text/javascript" src="xlsx_viewer.js?<?=filemtime(dirname(__FILE__) . '/xlsx_viewer.js');?>"></script>
	</body>
</html>