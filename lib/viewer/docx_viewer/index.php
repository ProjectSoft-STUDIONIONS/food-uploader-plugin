<!DOCTYPE html>
<html lang="ru">
	<head>
		<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
		<meta http-equiv="X-UA-Compatible" content="IE=EmulateIE9">
		<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
		<meta name="google" content="notranslate">
		<title>Предпросмотр Microsoft Office Word (docx) файлов</title>
		<link rel="shortcut icon" href="/favicon.ico">
	</head>
	<body>
		<div class="title-bar">
			<div id="title">&nbsp;</div><a id="download"><span>Скачать</span></a>
		</div>
		<div id="document-wrapper">
			<div class="overflow-auto flex-grow-1 h-100" id="document-container"></div>
		</div>
		<link type="text/css" rel="stylesheet" href="docx_main.min.css?<?=filemtime(dirname(__FILE__) . 'docx_main.min.css');?>">
		<script src="docx_viewer.js?<?=filemtime(dirname(__FILE__) . 'docx_viewer.js');?>"></script>
	</body>
</html>