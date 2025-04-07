!(function($){
	$.noConflict();

	const getDateTime = function(timestamp = 0) {
		let time = new Date(timestamp),
			date = time.getDate(),
			month = time.getMonth() + 1,
			year = time.getFullYear(),
			hour = time.getHours(),
			minute = time.getMinutes(),
			second = time.getSeconds(),
			arrDate = [
				leftPad(date,  2, '0'),
				leftPad(month, 2, '0'),
				String(year)
			],
			arrTime = [
				leftPad(hour,   2, '0'),
				leftPad(minute, 2, '0'),
				leftPad(second, 2, '0')
			];
		return arrDate.join('-') + ' ' + arrTime.join(':');

	},
	leftPad = function (str, len, ch) {
		str = String(str);
		let i = -1;
		if (!ch && ch !== 0) ch = ' ';
		len = len - str.length;
		while (++i < len) {
			str = ch + str;
		}
		return str;
	},
	componentName = `Плагин питания для WordPress CMS`,
	userName = `ProjectSoft`;

	if('object' == typeof $.fancybox) {
		$.fancybox.defaults.transitionEffect = "circular";
		$.fancybox.defaults.transitionDuration = 500;
		$.fancybox.defaults.lang = "ru";
		$.fancybox.defaults.i18n.ru = {
			CLOSE: "Закрыть",
			NEXT: "Следующий",
			PREV: "Предыдущий",
			ERROR: "Запрошенный контент не может быть загружен.<br/>Повторите попытку позже.",
			PLAY_START: "Начать слайдшоу",
			PLAY_STOP: "Остановить слайдшоу",
			FULL_SCREEN: "Полный экран",
			THUMBS: "Миниатюры",
			DOWNLOAD: "Скачать",
			SHARE: "Поделиться",
			ZOOM: "Увеличить"
		};
	}
	let search = location.search.replace(/\?/g, '');
	let search_api = search.split('&').map((item, index, array) => {
		let param = item.split('=');
		return param;
	});
	const searchAPI = Object.fromEntries(search_api);
	$(document)
		.on("input", "#uploader [type=file]", (e) => {
			let input = document.querySelector("#uploader [type=file]"),
				info = $("#p_uploads"),
				max = parseInt(input.getAttribute('data-max')),
				out = [], str = "";
			if([...input.files].length > max) {
				alert(`Вы не можете загружать больше ${max} файл(a/ов).`);
				document.upload_food.reset();
			}
			for (let a of [...input.files]){
				const regex = /[^.]+$/;
				let m;
				if ((m = regex.exec(a.name)) !== null) {
					let ex = m[0].toLowerCase();
					if(ex == "xlsx" || ex == "pdf"){
						out.push(a.name);
					}else{
						info.html("");
						alert("Нельзя загрузить данный тип файла!\n\n" + a.type + "\n\n");
						document.upload_food.reset();
						return !1;
					}
				}
			}
			info.html(out.join("<br>"));
		})
		.on('click', "a.food-link", (e) => {
			e.preventDefault();
			let base = window.location.origin,
				element = e.target,
				href = element.href,
				arr = href.split('.'),
				ext = arr.at(-1).toLowerCase();
			//Просмотр
			if(typeof $.fancybox == 'object') {
					options = {
						src: window.location.origin + '/viewer/pdf_viewer/?file=' + href,
						opts : {
							afterShow : function( instance, current ) {
								$(".fancybox-content").css({
									height: '100% !important',
									overflow: 'hidden'
								}).addClass(`${ext}_viewer`);
							},
							afterLoad : function( instance, current ) {
								$(".fancybox-content").css({
									height: '100% !important',
									overflow: 'hidden'
								}).addClass(`${ext}_viewer`);
							},
							afterClose: function() {
								Cookies.remove('pdfjs.history', { path: '' });
								window.localStorage.removeItem('pdfjs.history');
							}
						}
					};
					$.fancybox.open(options);
				}else{
					window.open(href);
			}
			return !1;
		}).on('click', '.food-rename, .food-delete', function(e) {
			e.preventDefault();
			console.log(e);
			let element = e.target;
			// Переименование
			let form = document.querySelector('form[name=form_mode]'),
				mode = form.querySelector('input[name=mode]'),
				new_file = form.querySelector('input[name=new_file]'),
				old_file = form.querySelector('input[name=file]'),
				file;
			if(element.classList.contains("food-rename")){
				file = $(element).data('file');
				const segments = file.split('.');
				const fileExtension = segments.pop();
				let fileName = segments.join('.');
				let nwfile = prompt("Укажите новое имя для файла:", fileName);
				if(!nwfile) {
					return !1
				}
				if(nwfile == segments.join('.')){
					return !1;
				}
				console.log(nwfile, segments.join('.'));
				old_file.value = file;
				new_file.value = nwfile + `.${fileExtension}`;
				mode.value = "rename";
				$(form).submit();
			}
			// Удаление
			if(element.classList.contains("food-delete")){
				file = $(element).data('file');
				if(!confirm(`Удалить файл ${file}?`)){
					return !1;
				}
				mode.value = "delete";
				old_file.value = file;
				$(form).submit();
				return !1;
			}
			return !1;
		});
	// Если есть dir, значит список файлов
	if(searchAPI.dir) {
		const url = `${location.origin}/${searchAPI.dir}/`;
		let table = new DataTable('.table', {
			// Колонки
			columns: [
				{ name: 'file' },
				{ name: 'permission' },
				{ name: 'date' },
				{ name: 'size' },
				{ name: 'actions' }
			],
			// Настройки по колонкам
			columnDefs : [
				// Разрешено для первой колонки поиск, сортировка
				{ 
					'searchable'    : !0, 
					'targets'       : [0],
					'orderable'     : !0
				},
				// Запрещено для последующих колонок поиск, сортировка
				{ 
					'searchable'    : !1, 
					'targets'       : [1,2,3,4],
					'orderable'     : !1
				},
			],
			// Разрешена сортировка
			ordering: !0,
			// Разрешаем запоминание всех свойств
			stateSave: !0,
			stateSaveCallback: function (settings, data) {
				localStorage.setItem(
					'DataTables_' + settings.sInstance + '_' + searchAPI.dir,
					JSON.stringify(data)
				);
			},
			stateLoadCallback: function (settings) {
				return JSON.parse(localStorage.getItem('DataTables_' + settings.sInstance + '_' + searchAPI.dir));
			},
			lengthMenu: [
				[10, 25, 50, 100, -1],
				['по 10', 'по 25', 'по 50', 'по 100', 'Все']
			],
			layout: {
				topStart: [
					'pageLength',
					'search'
				],
				topEnd: {
					buttons: [
						// Кнопка экспорта XLSX
						{
							extend: 'excel',
							text: 'Экспорт в XLSX',
							download: '',
							filename: `Экспорт ${searchAPI.dir} в XLSX`,
							title: `Директория ${url}`,
							sheetName: `${searchAPI.dir}`,
							customize: function (xlsx) {
								let date = new Date();
								let dateISO = date.toISOString();
								// Создаём xml файлы для свойств документа (метатеги)
								xlsx["_rels"] = {};
								xlsx["_rels"][".rels"] = $.parseXML(`<?xml version="1.0" encoding="UTF-8" standalone="yes"?>` +
									`<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">` +
										`<Relationship Id="rId3" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/extended-properties" Target="docProps/app.xml"/>` +
										`<Relationship Id="rId2" Type="http://schemas.openxmlformats.org/package/2006/relationships/metadata/core-properties" Target="docProps/core.xml"/>` +
										`<Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="xl/workbook.xml"/>` +
									`</Relationships>`);
								xlsx["docProps"] = {};
								xlsx["docProps"]["core.xml"] = $.parseXML(`<?xml version="1.0" encoding="UTF-8" standalone="yes"?>` +
									`<cp:coreProperties xmlns:cp="http://schemas.openxmlformats.org/package/2006/metadata/core-properties" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:dcterms="http://purl.org/dc/terms/" xmlns:dcmitype="http://purl.org/dc/dcmitype/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">` +
										// Заголовок
										`<dc:title>Директория ${url}</dc:title>` +
										// Тема
										`<dc:subject>Директория ${url}</dc:subject>` +
										// Создатель
										`<dc:creator>${componentName}</dc:creator>` +
										// Теги
										`<cp:keywords />` +
										// Описание
										`<dc:description>${componentName}</dc:description>` +
										// Последнее изменение
										`<cp:lastModifiedBy>${componentName}</cp:lastModifiedBy>` +
										// Дата создания - время создания
										`<dcterms:created xsi:type="dcterms:W3CDTF">${dateISO}</dcterms:created>` +
										// Дата изменеия - время создания
										`<dcterms:modified xsi:type="dcterms:W3CDTF">${dateISO}</dcterms:modified>` +
										// Категория
										`<cp:category>${searchAPI.dir}</cp:category>` +
									`</cp:coreProperties>`);
								xlsx["docProps"]["app.xml"] = $.parseXML(
									`<?xml version="1.0" encoding="UTF-8" standalone="yes"?>` +
									`<Properties xmlns="http://schemas.openxmlformats.org/officeDocument/2006/extended-properties" xmlns:vt="http://schemas.openxmlformats.org/officeDocument/2006/docPropsVTypes">` +
										`<Application>Microsoft Excel</Application>` +
										`<DocSecurity>0</DocSecurity>` +
										`<ScaleCrop>false</ScaleCrop>` +
										`<HeadingPairs>` +
											`<vt:vector size="2" baseType="variant">` +
												`<vt:variant>` +
													`<vt:lpstr>Листы</vt:lpstr>` +
												`</vt:variant>` +
												`<vt:variant>` +
													`<vt:i4>1</vt:i4>` +
												`</vt:variant>` +
											`</vt:vector>` +
										`</HeadingPairs>` +
										`<TitlesOfParts>` +
											`<vt:vector size="1" baseType="lpstr">` +
												`<vt:lpstr>${searchAPI.dir}</vt:lpstr>` +
											`</vt:vector>` +
										`</TitlesOfParts>` +
										// Руководитель - автор компонента
										`<Manager>${userName}</Manager>` +
										// Организация - автор компонента
										`<Company>${userName}</Company>` +
										`<LinksUpToDate>false</LinksUpToDate>` +
										`<SharedDoc>false</SharedDoc>` +
										`<HyperlinkBase>${url}</HyperlinkBase>` +
										`<HyperlinksChanged>false</HyperlinksChanged>` +
										`<AppVersion>16.0300</AppVersion>` +
									`</Properties>`
								);
								let contentType = xlsx["[Content_Types].xml"];
								let Types = contentType.querySelector('Types');

								let Core = contentType.createElement('Override');
								Core.setAttribute("PartName", "/docProps/core.xml");
								Core.setAttribute("ContentType", "application/vnd.openxmlformats-package.core-properties+xml");
								Types.append(Core);

								let App = contentType.createElement('Override');
								App.setAttribute("PartName", "/docProps/app.xml");
								App.setAttribute("ContentType", "application/vnd.openxmlformats-officedocument.extended-properties+xml");
								Types.append(App);

								xlsx["[Content_Types].xml"] = contentType;
								//console.log(contentType);
							},
							action: function (e, dt, node, config, cb) {
								//console.log(e, dt, node, config, cb);
								DataTable.ext.buttons.excelHtml5.action.call(
									this,
									e,
									dt,
									node,
									config,
									cb
								);
							}
						},
						// Кнопка экспорта PDF
						{
							extend: 'pdf',
							text: 'Экспорт в PDF',
							download: '',
							filename: `Экспорт ${searchAPI.dir} в PDF`,
							title: `Директория ${url}`,
							// Кастомизируем вывод
							customize: function (doc) {
								let date = new Date();
								let dateISO = date.toISOString();
								let title = [
									`Меню ежедневного питания.`,
									`Директория ${url}`
								];
								// Используемый язык экспорта
								doc.language = 'ru-RU';
								// Метатеги экспорта
								doc.info = {
									title: title.join(' '),
									author: componentName,
									subject: title.join(' '),
									keywords: title.join(' '),
									creator: `${componentName}`,
									producer: `${userName}`,
									modDate: `${dateISO}`
								};
								// Колонтитулы
								// Верхний
								doc.header = {
	   								columns: [
	   									{
	   										text: `${url}`,
	   										margin: [15, 15, 15, 15],
	   										alignment: 'left'
	    								},
	    								{
	    									text: getDateTime((new Date()).getTime()),
	    									margin: [15, 15, 15, 15],
	   										alignment: 'right'
	   									}
									]
								};
								// Нижний
								doc.footer = function(currentPage, pageCount) {
									return [
										{
	    									text: currentPage.toString() + ' из ' + pageCount,
	    									margin: [15, 15, 15, 15],
	    									alignment: 'center'
	   									}
									];
								};
								// Текст контента.
								doc.content[0].text = title.join('\r\n');
							},
							action: function (e, dt, node, config, cb) {
								DataTable.ext.buttons.pdfHtml5.action.call(
									this,
									e,
									dt,
									node,
									config,
									cb
								);
							}
						}
					]
				}
			},
			language: {
				url: '/wp-content/plugins/food-uploader-plugin/js/ru_RU.json',
			}
		});
	}else{
		$('.food-row').addClass('row-disabled');
	}
	$('.food-row').removeClass('hidden');

	$('body').on('thickbox:removed', function() {
		//window.location.reload();
	});


	window.tb_position = function () {
		var wid = $(window).width(),
			height = $(window).height() - 70,
			width = 792 < wid ? 772 : wid - 60;
		let frm = $("#TB_window");
		if(frm.length) {
			frm.width(width);//.height(height);
			$("#TB_iframeContent").width(width).css({
				"position": "relative",
				"height"  : "calc(100% - 30px)"
			})
			frm.css({
				"margin-left"   : "-" + parseInt(width / 2, 10) + "px",
				"overflow"      : "hidden",
				"margin-top"    : "calc(35px - 50vh)"
				//"margin-top"    : "33px",
				//"margin-bottom" : "33px",
				//"top"           : "0"
			});
		}
		$("a.thickbox").each(function () {
			var t = $(this).attr("href");
			t && ((t = (t = t.replace(/&width=[0-9]+/g, "")).replace(/&height=[0-9]+/g, "")), $(this).attr("href", t + "&width=" + width + "&height=" + height));
		});
	}

	window.tb_position();

	/*$(document).on('thickbox:iframe:loaded', '#TB_window', function() {
		
	})*/
	$(document).on('thickbox:iframe:loaded', function(e) {
		$(window).trigger('resize');
		let title = "Настройки «Меню ежедневного питания»";
		$("#TB_window")
			.addClass( 'plugin-food-settings-modal' )
			.attr({
				'role': 'dialog',
				'aria-label': title
			});
		// Set title attribute on the iframe.
		$("#TB_window").find( '#TB_ajaxWindowTitle' ).html( '<i class="dashicons dashicons-admin-generic"></i>&nbsp;Настройки «Меню ежедневного питания»' );
		$(window).trigger('resize');
	});
	$(window).on('resize', window.tb_position).trigger('resize');

}(jQuery));