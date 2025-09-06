!(function($){
	//$.noConflict();

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

	if('object' == typeof jQuery.fancybox) {
		jQuery.fancybox.defaults.transitionEffect = "circular";
		jQuery.fancybox.defaults.transitionDuration = 500;
		jQuery.fancybox.defaults.lang = "ru";
		jQuery.fancybox.defaults.i18n.ru = {
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
	jQuery(document)
		.on("input", "#uploader [type=file]", (e) => {
			let input = document.querySelector("#uploader [type=file]"),
				info = jQuery("#p_uploads"),
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
			if(typeof jQuery.fancybox == 'object') {
					options = {
						src: window.location.origin + '/viewer/pdf_viewer/?file=' + href,
						opts : {
							afterShow : function( instance, current ) {
								jQuery(".fancybox-content").css({
									height: '100% !important',
									overflow: 'hidden'
								}).addClass(`${ext}_viewer`);
							},
							afterLoad : function( instance, current ) {
								jQuery(".fancybox-content").css({
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
					jQuery.fancybox.open(options);
				}else{
					window.open(href);
			}
			return !1;
		}).on('click', '.food-rename, .food-delete', function(e) {
			e.preventDefault();
			let element = e.target;
			// Переименование
			let form = document.querySelector('form[name=form_mode]'),
				mode = form.querySelector('input[name=mode]'),
				new_file = form.querySelector('input[name=new_file]'),
				old_file = form.querySelector('input[name=file]'),
				file;
			if(element.classList.contains("food-rename")){
				file = jQuery(element).data('file');
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
				old_file.value = file;
				new_file.value = nwfile + `.${fileExtension}`;
				mode.value = "rename";
				jQuery(form).submit();
			}
			// Удаление
			if(element.classList.contains("food-delete")){
				file = jQuery(element).data('file');
				if(!confirm(`Удалить файл ${file}?`)){
					return !1;
				}
				mode.value = "delete";
				old_file.value = file;
				jQuery(form).submit();
				return !1;
			}
			return !1;
		});
	// Если есть dir, значит список файлов
	if(searchAPI.dir) {
		DataTable.Buttons.defaults.dom.button.liner.tag = '';
		DataTable.Buttons.defaults.dom.button.className = 'dt-button btn btn-default';
		DataTable.Buttons.defaults.dom.container.className = DataTable.Buttons.defaults.dom.container.className + ' btn-group';
		// Изменим PDF Классы
		DataTable.ext.buttons.pdfHtml5.className = DataTable.ext.buttons.pdfHtml5.className + ' btn btn-secondary';
		// Изменим Excel Классы
		DataTable.ext.buttons.excelHtml5.className = DataTable.ext.buttons.excelHtml5.className + ' btn btn-secondary';
		// Изменим layout Классы
		DataTable.ext.classes.layout.start = 'dt-layout-start col-lg-6';
		DataTable.ext.classes.layout.end = 'dt-layout-end col-lg-6';
		const url = `${location.origin}/${searchAPI.dir}/`;
		let table = jQuery('.table').DataTable({
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
				topStart: {
					buttons: [
						{
							extend: 'colvis',
							className: 'button-colvis btn btn-primary',
							text: `<i class="glyphicon glyphicon-tasks"></i>Видимость столбцов`,
							attr: {
								title: `Видимость столбцов\r\nВлияет на Печать`
							},
							columns: [1,2,3,4],
							select: true,
							//postfixButtons: ['colvisRestore']
						},
						{
							extend: 'print',
							className: 'button-print btn btn-success',
							text: `<i class="glyphicon glyphicon-print"></i>Печать`,
							attr: {
								title: `Вывести данные на Печать`
							},
							exportOptions: {
								columns: [':visible']
							},
							messageTop: document.title,
							messageBottom: false,
							header: true,
							footer: true,
							title: ``,
							autoPrint: true,
						},
					],
					'pageLength': 'pageLength',
					'search': 'search',
				},
				topEnd: {
					buttons: [
						// Выбор файлов к загрузке
						{
							text: '<i class="glyphicon glyphicon-floppy-save"></i>Выберите файлы для загрузки',
							className: 'button-upload btn btn-success',
							action: function (e, dt, node, config) {
								let uploader, input;
								if( uploader = document.querySelector('#uploader')){
									if(input = uploader.querySelector('[type=file]')) {
										input.click();
									}
								}
							}
						},
						// Кнопка экспорта XLSX
						/*{
							extend: 'excel',
							text: '<i class="glyphicon glyphicon-save-file"></i>Экспорт в XLSX',
							download: '',
							filename: `Экспорт ${searchAPI.dir} в XLSX`,
							title: `Директория ${url}`,
							sheetName: `${searchAPI.dir}`,
							attr: {
								title: `Сохранить данные в файл XLSX`
							},
							exportOptions: {
								columns: [':visible']
							},
							customize: function (xlsx) {
								let date = new Date();
								let dateISO = date.toISOString();
								// Создаём xml файлы для свойств документа (метатеги)
								xlsx["_rels"] = {};
								xlsx["_rels"][".rels"] = jQuery.parseXML(`<?xml version="1.0" encoding="UTF-8" standalone="yes"?>` +
									`<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">` +
										`<Relationship Id="rId3" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/extended-properties" Target="docProps/app.xml"/>` +
										`<Relationship Id="rId2" Type="http://schemas.openxmlformats.org/package/2006/relationships/metadata/core-properties" Target="docProps/core.xml"/>` +
										`<Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="xl/workbook.xml"/>` +
									`</Relationships>`);
								xlsx["docProps"] = {};
								xlsx["docProps"]["core.xml"] = jQuery.parseXML(`<?xml version="1.0" encoding="UTF-8" standalone="yes"?>` +
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
								xlsx["docProps"]["app.xml"] = jQuery.parseXML(
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
							text: '<i class="glyphicon glyphicon-save-file"></i>Экспорт в PDF',
							download: '',
							filename: `Экспорт ${searchAPI.dir} в PDF`,
							title: `Директория ${url}`,
							exportOptions: {
								columns: [':visible']
							},
							attr: {
								title: `Сохранить данные в файл PDF`
							},
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
						}*/
					]
				}
			},
			language: {
				url: '/wp-content/plugins/food-uploader-plugin/js/ru_RU.json',
			}
		});
	}else{
		jQuery('.food-row').addClass('row-disabled');
	}
	jQuery('.food-row').removeClass('hidden');

	jQuery('body').on('thickbox:removed', function() {
		//window.location.reload();
	});


	window.tb_position = function () {
		var wid = jQuery(window).width(),
			height = jQuery(window).height() - 70,
			width = 792 < wid ? 772 : wid - 60;
		let frm = jQuery("#TB_window");
		if(frm.length) {
			frm.width(width);//.height(height);
			jQuery("#TB_iframeContent").width(width).css({
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
		jQuery("a.thickbox").each(function () {
			var t = jQuery(this).attr("href");
			t && ((t = (t = t.replace(/&width=[0-9]+/g, "")).replace(/&height=[0-9]+/g, "")), jQuery(this).attr("href", t + "&width=" + width + "&height=" + height));
		});
	}

	window.tb_position();

	/*jQuery(document).on('thickbox:iframe:loaded', '#TB_window', function() {
		
	})*/
	jQuery(document).on('thickbox:iframe:loaded', function(e) {
		jQuery(window).trigger('resize');
		let title = "Настройки «Меню ежедневного питания»";
		jQuery("#TB_window")
			.addClass( 'plugin-food-settings-modal' )
			.attr({
				'role': 'dialog',
				'aria-label': title
			});
		// Set title attribute on the iframe.
		jQuery("#TB_window").find( '#TB_ajaxWindowTitle' ).html( '<i class="dashicons dashicons-admin-generic"></i>&nbsp;Настройки «Меню ежедневного питания»' );
		jQuery(window).trigger('resize');
	});
	jQuery(window).on('resize', window.tb_position).trigger('resize');

}(jQuery));