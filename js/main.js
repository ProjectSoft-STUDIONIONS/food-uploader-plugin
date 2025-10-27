!(function(jq){
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
	getExtFile = function (filename) {
		let baseName = filename.split('/').pop();  // извлекаем имя файла
		if(baseName.indexOf('.') === -1 || baseName.startsWith('.')) return '';  // если расширения нет, возвращаем пустую строку
		return baseName.slice(baseName.lastIndexOf('.') + 1); // расширение файла
	},
	componentName = `Плагин питания для WordPress CMS`,
	userName = `ProjectSoft`;

	if('object' == typeof jq.fancybox) {
		jq.fancybox.defaults.transitionEffect = "circular";
		jq.fancybox.defaults.transitionDuration = 500;
		jq.fancybox.defaults.lang = "ru";
		jq.fancybox.defaults.i18n.ru = {
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

	// Загрузка файлов
	window.uploadFiles = function(el) {
		const maxCountFile = el.getAttribute('max');
		let p = jq("#p_uploads"),
			files = [...el.files],
			out = [], str = "",
			btn = document.querySelector('.button-upload'),
			btnDrag = document.querySelector('.dt-dragdrop-block');

		if(files.length > maxCountFile) {
			btn && (btn.innerHTML = `${LANG.upload}`);
			btnDrag && btnDrag.setAttribute('data-length', "0");
			alert( sprintf(LANG.alert_error_upload_max, maxCountFile) );
			document.upload.reset();
			return !1;
		}
		for (let a of files){
			const regex = /[^.]+$/;
			let m;
			if ((m = regex.exec(a.name)) !== null) {
				let ex = m[0].toLowerCase();
				if(ex == "xlsx" || ex == "pdf"){
					out.push(`<code>${a.name}</code>`);
				}else{
					p.html("");
					btnDrag && (
						btnDrag.setAttribute('data-title-after', "")
					);
					// Выбор файлов
					btn && (
						btn.innerHTML = LANG.select_upload_files
					);
					console.log(a);
					alert( LANG.alert_error_upload_type + `\n${a.name} - ${a.type}`);
					document.upload.reset();
					return !1;
				}
			}
		}
		if(out.length){
			// Загрузка
			let afterSufix = out.length == 1 ? LANG.one_file : ((out.length > 1 && out.length < 5) ? LANG.two_file : LANG.thre_file ),
				afterPrefix = LANG.selected;
			btn && (
				btn.innerHTML = LANG.upload
			);
			btnDrag && btnDrag.setAttribute('data-title-after', `${afterPrefix} ${out.length} ${afterSufix}`);
		}else{
			// Выбор файлов
			btn && (
				btn.innerHTML = LANG.selected_upload_files
			);
			btnDrag && btnDrag.removeAttribute('data-title-after');
		}
		p.html(out.join(""));
		return !1;
	}
	jq(document)
		.on('click', "a.food-link", (e) => {
			e.preventDefault();
			let base = window.location.origin,
				element = e.target,
				href = element.href,
				arr = href.split('.'),
				ext = arr.at(-1).toLowerCase();
			//Просмотр
			if(typeof jq.fancybox == 'object') {
					switch(ext) {
						case "pdf":
						case "xlsx":
							options = {
								src: `${window.location.origin}/viewer/${ext}_viewer/?file=${href}`,
								opts : {
									afterShow : function( instance, current ) {
										jq(".fancybox-content").css({
											height: '100% !important',
											overflow: 'hidden'
										}).addClass(`${ext}_viewer`);
									},
									afterLoad : function( instance, current ) {
										jq(".fancybox-content").css({
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
							jq.fancybox.open(options);
							break;
						default:
							window.open(href);
							break;
					}
					/**/
			}else{
				window.open(href);
			}
			return !1;
		}).on('click', '[data-mode]', function(e) {
			e.preventDefault();
			let element = e.target;
			let form = document.querySelector('form[name=form_mode]'),
				mode = form.querySelector('input[name=mode]'),
				new_file = form.querySelector('input[name=new_file]'),
				old_file = form.querySelector('input[name=file]'),
				ext = jq(element).data('mode'),
				file = jq(element).data('file');
			switch(ext) {
				case "rename":
					const segments = file.split('.');
					const fileExtension = segments.pop();
					let fileName = segments.join('.');
					let nwfile = prompt(LANG.prompt_rename, fileName);
					if(!nwfile) {
						return !1
					}
					if(nwfile == segments.join('.')){
						return !1;
					}
					old_file.value = file;
					new_file.value = nwfile + `.${fileExtension}`;
					mode.value = "rename";
					jq(form).submit();
					return !1;
					break;
				case "delete":
					if( !confirm( sprintf( LANG.confirm_delete, file) ) ){
						return !1;
					}
					mode.value = "delete";
					old_file.value = file;
					jq(form).submit();
					return !1;
					break;
			}
			return !1;
		});
	// Если есть dir, значит список файлов
	if(searchAPI.dir) {
		DataTable.Buttons.defaults.dom.button.liner.tag = '';
		DataTable.Buttons.defaults.dom.container.className = 'btn-group';
		// Изменим PDF Классы
		DataTable.ext.buttons.pdfHtml5.className = DataTable.ext.buttons.pdfHtml5.className + ' btn';
		// Изменим Excel Классы
		DataTable.ext.buttons.excelHtml5.className = DataTable.ext.buttons.excelHtml5.className + ' btn';
		// Изменим layout Классы
		DataTable.ext.classes.layout.start = 'dt-layout-start col-lg-6';
		DataTable.ext.classes.layout.end = 'dt-layout-end col-lg-6';
		// Drag and Drop Block
		DataTable.ext.buttons.dragdrop = {
			className: 'dt-dragdrop-block btn-default btn-block',
			text: '',
			attr: {
				title: LANG.upload_block_title,
				"data-title-before": LANG.upload_block_before
			},
			tag: "button",
			action: function (e, dt, node, config) {
				let uploader, input;
				if( uploader = document.querySelector('[name="upload"]')){
					if(input = uploader.querySelector('[type=file]')) {
						input.click();
					}
				}
			}
		};

		const url = `${location.origin}/${searchAPI.dir}/`,
			dateString = () => {
				let date = (new Date()).getTime();
				return `${date}`;
			};

		jq.extend(true, DataTable.Buttons.defaults, {
			dom: {
				container: {
					className: 'dt-buttons btn-group flex-wrap'
				},
				button: {
					className: 'btn text-uppercase'
				}
			}
		});
		let dateFile = new Date();
		let table = jq('.table').DataTable({
			responsive: false,
			// Колонки
			columns: [
				{ name: 'file'       },
				{ name: 'permission' },
				{ name: 'date'       },
				{ name: 'size'       },
				{ name: 'actions'    }
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
				// Видимость
				{
					'targets': [1,4],
					'visible': false
				}
			],
			// Разрешена сортировка
			ordering: !0,
			// Фиксируем сортировку (по умолчанию)
			order: {
				name: "file",
				dir: ""
			},
			// Разрешаем запоминание всех свойств
			stateSave: !0,
			// Сохранение свойств определённой таблицы директории
			stateSaveCallback: function (settings, data) {
				// Данные о состоянии данной таблице
				// DataTables_com_food
				localStorage.setItem(
					'DataTables_com_food',
					JSON.stringify(data)
				);
			},
			// Загружаем свойства для определённой таблицы
			stateLoadCallback: function (settings) {
				return JSON.parse(localStorage.getItem('DataTables_com_food'));
			},
			// Меню вывода кол-ва файлов
			lengthMenu: [
				[10, 25, 50, 100, -1],
				['по 10', 'по 25', 'по 50', 'по 100', 'Все']
			],
			// Контейнеры
			layout: {
				// Контейнер слева: Меню вывода кол-ва файлов
				topStart: {
					buttons: [
						// Инструменты
						{
							extend: 'collection',
							text: LANG.tools,
							className: 'button-collection-tools btn-default food-icon-tools',
							dropIcon: false,
							buttons: [
								// Видимость столбцов
								{
									extend: 'colvis',
									className: 'button-colvis btn-default food-icon-tasks',
									text: LANG.colvis,
									attr: {
										title: LANG.colvis_title
									},
									columns: [1,2,3,4],
									select: true,
									dropIcon: false,
									//postfixButtons: ['colvisRestore']
								},
								{
									extend: 'pageLength',// dt-button-page-length
									className: 'button-page-length btn-default food-icon-lists',
									dropIcon: false,
								},
								// Экспорт
								{
									extend: 'collection',
									text: LANG.export,
									className: 'button-collection-tools food-icon-export',
									dropIcon: false,
									buttons: [
										// Кнопка экспорта XLSX
										{
											extend: 'excel',
											className: 'btn-default food-icon-export-xlsx',
											text: LANG.export_excel,
											download: '',
											filename: sprintf(LANG.export_excel_filename, searchAPI.dir),
											title: sprintf(LANG.export_title, url),
											sheetName: `${searchAPI.dir}`,
											attr: {
												title: LANG.export_excel_attr_title
											},
											exportOptions: {
												columns: [':visible']
											},
											customize: function (xlsx) {
												let date = new Date();
												let dateISO = date.toISOString();
												// Создаём xml файлы для свойств документа (метатеги)
												xlsx["_rels"] = {};
												xlsx["_rels"][".rels"] = jq.parseXML(`<?xml version="1.0" encoding="UTF-8" standalone="yes"?>` +
													`<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">` +
														`<Relationship Id="rId3" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/extended-properties" Target="docProps/app.xml"/>` +
														`<Relationship Id="rId2" Type="http://schemas.openxmlformats.org/package/2006/relationships/metadata/core-properties" Target="docProps/core.xml"/>` +
														`<Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="xl/workbook.xml"/>` +
													`</Relationships>`);
												xlsx["docProps"] = {};
												xlsx["docProps"]["core.xml"] = jq.parseXML(`<?xml version="1.0" encoding="UTF-8" standalone="yes"?>` +
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
												xlsx["docProps"]["app.xml"] = jq.parseXML(
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
										},
										// Кнопка экспорта PDF
										{
											extend: 'pdf',
											className: 'btn-default food-icon-export-pdf',
											text: LANG.export_pdf,
											download: '',
											filename: sprintf(LANG.export_pdf_filename, searchAPI.dir),
											title: sprintf(LANG.export_title, url),
											exportOptions: {
												columns: [':visible']
											},
											attr: {
												title: LANG.export_pdf_attr_title
											},
											// Кастомизируем вывод
											customize: function (doc) {
												let date = new Date();
												let dateISO = date.toISOString();
												let title = [
													LANG.export_pdf_info,
													LANG.export_title
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
										},
									],
								},
								{
									extend: 'print',
									className: 'button-print btn btn-default food-icon-print',
									text: LANG.print,
									attr: {
										title: LANG.print_title
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
							]
						},
					],
					'search': 'search',
				},
				topEnd: {
					buttons: [
						// Кнопка/блок приёма файлов
						{
							extend: 'dragdrop',
						},
						// Кнопка выбора файлов
						{
							text: LANG.selected_upload_files,
							className: 'button-upload btn-success food-icon-flopy-save',
							action: function (e, dt, node, config) {
								let uploader, input;
								if( uploader = document.querySelector('[name="upload"]')){
									if(input = uploader.querySelector('[type=file]')) {
										if(input.files.length){
											uploader.submit();
										}else{
											input.click();
										}
									}
								}
							}
						},
					]
				},
				bottomStart: [],
				bottomEnd: [
					"info",
					"paging"
				]
			},
			language: {
				url: '/wp-content/plugins/food-uploader-plugin/js/ru_RU.json?date=' +dateString(),
			}
		});
		setTimeout(() => {

			const dropArea = document.querySelector('#wp-plugins-food'),
				inputFile = document.querySelector('input[type="file"]'),
				preventDefaults = function(e) {
					e.preventDefault();
					e.stopPropagation();
				},
				handleDrop = function(e) {
					preventDefaults(e);
					if(inputFile) {
						const maxCountFile = inputFile.getAttribute('max');
						let dataTransfer = new DataTransfer();
						// Пробежимся по переданным файлам
						for(let file of e.dataTransfer.files) {
							let ext = getExtFile(file.name).toLowerCase();
							switch(ext){
								case "pdf":
								case "xlsx":
									if(dataTransfer.files.length < maxCountFile) {
										dataTransfer.items.add(file);
									}else{
										console.log(`%cFile ${file.name} not upload!\nThe maximum number of files has been exceeded`, "background: green; color: white");
									}
									break;
								default:
									console.log(`%cFile ${file.name} not suported!`, "background: red; color: white");
							}
						}
						inputFile.files = dataTransfer.files;
						inputFile.dispatchEvent(new Event('change'));
					}
					return !1;
				},
				highlight = function(e) {
					dropArea && dropArea.classList.add('drophandle');
				},
				unhighlight = function(e) {
					dropArea && dropArea.classList.remove('drophandle');
				};

			['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
				dropArea && dropArea.addEventListener(eventName, preventDefaults, false)
				document.body.addEventListener(eventName, preventDefaults, false)
			});

			['dragenter', 'dragover'].forEach(eventName => {
				dropArea && dropArea.addEventListener(eventName, highlight, false);
			});

			['dragleave', 'drop'].forEach(eventName => {
				dropArea && dropArea.addEventListener(eventName, unhighlight, false);
			});

			// Handle dropped files
			dropArea && dropArea.addEventListener('drop', handleDrop, false);

		}, 1000);
		/*setTimeout(() => {
			[...document.querySelectorAll('.notice .notice-dismiss')].forEach((el)=>{
				el.click();
			});
		}, 5000);*/
	}else{
		jq('.food-row').addClass('row-disabled');
	}
	jq('.food-row').removeClass('hidden');

	jq('body').on('thickbox:removed', function() {
		//window.location.reload();
	});


	window.tb_position = function () {
		var wid = jq(window).width(),
			height = jq(window).height() - 70,
			width = 792 < wid ? 772 : wid - 60;
		let frm = jq("#TB_window");
		if(frm.length) {
			frm.width(width);//.height(height);
			jq("#TB_iframeContent").width(width).css({
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
		jq("a.thickbox").each(function () {
			var t = jq(this).attr("href");
			t && ((t = (t = t.replace(/&width=[0-9]+/g, "")).replace(/&height=[0-9]+/g, "")), jq(this).attr("href", t + "&width=" + width + "&height=" + height));
		});
	}

	window.tb_position();

	/*jq(document).on('thickbox:iframe:loaded', '#TB_window', function() {
		
	})*/
	jq(document).on('thickbox:iframe:loaded', function(e) {
		jq(window).trigger('resize');
		let title = LANG.settings;
		jq("#TB_window")
			.addClass( 'plugin-food-settings-modal' )
			.attr({
				'role': 'dialog',
				'aria-label': title
			});
		// Set title attribute on the iframe.
		jq("#TB_window").find( '#TB_ajaxWindowTitle' ).html( '<i class="dashicons dashicons-admin-generic"></i>&nbsp;' + LANG.settings );
		jq(window).trigger('resize');
	});
	jq(window).on('resize', window.tb_position).trigger('resize');

}(jQuery));