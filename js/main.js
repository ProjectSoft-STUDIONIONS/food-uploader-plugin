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
			btn && (btn.innerHTML = `Ззагрузить`);
			btnDrag && btnDrag.setAttribute('data-length', "0");
			alert(`Вы не можете загружать больше ${maxCountFile} файл(a/ов).` );
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
						btn.innerHTML = `Выберите файлы для загрузки`,
						btn.classList.remove('glyphicon-open'),
						btn.classList.add('glyphicon-floppy-open')
					);
					console.log(a);
					alert(`Нельзя загрузить данный тип файла!\n${a.name} - ${a.type}`);
					document.upload.reset();
					return !1;
				}
			}
		}
		if(out.length){
			// Загрузка
			let afterSufix = out.length == 1 ? `файл` : ((out.length > 1 && out.length < 5) ? `файла` : `файлов`),
				afterPrefix = `Выбрано:`;
			btn && (
				btn.innerHTML = `Загрузить`,
				btn.classList.add('glyphicon-open'),
				btn.classList.remove('glyphicon-floppy-open')
			);
			btnDrag && btnDrag.setAttribute('data-title-after', `${afterPrefix} ${out.length} ${afterSufix}`);
		}else{
			// Выбор файлов
			btn && (
				btn.innerHTML = `Выберите файлы для загрузки`,
				btn.classList.add('glyphicon-file-add'),
				btn.classList.remove('glyphicon-open')
			);
			btnDrag && btnDrag.removeAttribute('data-title-after');
		}
		p.html(out.join(""));
		return !1;
	}
	jq(document)
		/*.on("change", "#uploader [type=file]", (e) => {
			let el = e.target;
			let //input = document.querySelector("#uploader [type=file]"),
				info = jq("#p_uploads"),
				max = parseInt(el.getAttribute('data-max')),
				files = [...el.files],
				btn = document.querySelector('.button-upload'),
				btnDrag = document.querySelector('.dt-dragdrop-block'),
				out = [], str = "";
			if(files.length > max) {
				alert(`Вы не можете загружать больше ${max} файл(a/ов).`);
				document.upload_food.reset();
			}
			for (let a of files){
				const regex = /[^.]+$/;
				let m;
				if ((m = regex.exec(a.name)) !== null) {
					let ex = m[0].toLowerCase();
					if(ex == "xlsx" || ex == "pdf"){
						out.push(a.name);
					}else{
						info.html("");
						btnDrag && (
							btnDrag.setAttribute('data-title-after', "")
						);
						// Выбор файлов
						btn && (
							btn.innerHTML = `Выберите файлы для загрузки`,
							btn.classList.remove('glyphicon-open'),
							btn.classList.add('glyphicon-floppy-open')
						);
						alert("Нельзя загрузить данный тип файла!\n\n" + a.type + "\n\n");
						document.upload_food.reset();
						return !1;
					}
				}
			}
			if(out.length){
				// Загрузка
				let afterSufix = out.length == 1 ? `файл` : ((out.length > 1 && out.length < 5) ? `файла` : `файлов`),
					afterPrefix = `Выбрано:`;
				btn && (
					btn.innerHTML = `Загрузить`,
					btn.classList.add('glyphicon-open'),
					btn.classList.remove('glyphicon-floppy-open')
				);
				btnDrag && btnDrag.setAttribute('data-title-after', `${afterPrefix} ${out.length} ${afterSufix}`);
			}else{
				// Выбор файлов
				btn && (
					btn.innerHTML = `Выберите файлы для загрузки`,
					btn.classList.add('glyphicon-file-add'),
					btn.classList.remove('glyphicon-open')
				);
				btnDrag && btnDrag.removeAttribute('data-title-after');
			}
			info.html(out.join("<br>"));
		})*/
		.on('click', "a.food-link", (e) => {
			e.preventDefault();
			let base = window.location.origin,
				element = e.target,
				href = element.href,
				arr = href.split('.'),
				ext = arr.at(-1).toLowerCase();
			//Просмотр
			if(typeof jq.fancybox == 'object') {
					options = {
						src: window.location.origin + '/viewer/pdf_viewer/?file=' + href,
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
				file = jq(element).data('file');
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
				jq(form).submit();
			}
			// Удаление
			if(element.classList.contains("food-delete")){
				file = jq(element).data('file');
				if(!confirm(`Удалить файл ${file}?`)){
					return !1;
				}
				mode.value = "delete";
				old_file.value = file;
				jq(form).submit();
				return !1;
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
				title: `Перетащите сюда файлы *.xlsx или *.pdf для загрузки\nИли выберите их с помощю диалога`,
				"data-title-before":`Перетащите сюда файлы (*.xlsx или *.pdf)\nИли выберите их с помощю диалога`
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
						// Видимость столбцов
						{
							extend: 'colvis',
							className: 'button-colvis btn-default glyphicon-tasks',
							text: `Видимость столбцов`,
							attr: {
								title: `Видимость столбцов\r\nВлияет на Печать`
							},
							columns: [1,2,3,4],
							select: true,
							dropIcon: false,
							//postfixButtons: ['colvisRestore']
						},
						{
							extend: 'print',
							className: 'button-print btn btn-success glyphicon-print',
							text: `Печать`,
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
						{
							extend: 'pageLength',
							className: 'button-page-length dt-button-page-length btn-default btn-block glyphicon-list',
							dropIcon: false,
							attr: {
								style: "width: 100%"
							}
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
							text: 'Выберите файлы для загрузки',
							className: 'button-upload btn-success glyphicon-floppy-open',
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
						// Кнопка экспорта XLSX
						{
							extend: 'excel',
							className: 'btn-default glyphicon-download-alt',
							text: 'Экспорт в XLSX',
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
							className: 'btn-default glyphicon-download-alt',
							text: 'Экспорт в PDF',
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
						}
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
			const dropArea = document.querySelector('.dt-dragdrop-block'),
				inputFile = document.querySelector('input[type="file"]'),
				preventDefaults = function(e) {
					e.preventDefault();
					e.stopPropagation();
				},
				handleDrop = function(e) {
					inputFile && (inputFile.files = e.dataTransfer.files);
					inputFile && inputFile.dispatchEvent(new Event('change'));
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
		let title = "Настройки «Меню ежедневного питания»";
		jq("#TB_window")
			.addClass( 'plugin-food-settings-modal' )
			.attr({
				'role': 'dialog',
				'aria-label': title
			});
		// Set title attribute on the iframe.
		jq("#TB_window").find( '#TB_ajaxWindowTitle' ).html( '<i class="dashicons dashicons-admin-generic"></i>&nbsp;Настройки «Меню ежедневного питания»' );
		jq(window).trigger('resize');
	});
	jq(window).on('resize', window.tb_position).trigger('resize');

}(jQuery));