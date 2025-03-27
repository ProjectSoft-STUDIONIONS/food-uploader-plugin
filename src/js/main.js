!(function($){
	$.noConflict();
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
		const docDefinition = {
			info: {
				title: 'awesome Document',
				author: 'john doe',
				subject: 'subject of document',
				keywords: 'keywords for document',
			},
			 content:  'This is an sample PDF printed with pdfMake'
		};
		let table = new DataTable('.table', {
			select: true,
			columns: [
				{ name: 'file' },
				{ name: 'permission' },
				{ name: 'date' },
				{ name: 'size' },
				{ name: 'actions' }
			],
			columnDefs : [
				{ 
				   'searchable'    : false, 
				   'targets'       : [1,2,3,4] 
				},
			],
			ordering: false,
			stateSave: true,
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
						{
							extend: 'excel',
							text: 'Экспорт в XLSX',
							customize: function (...args) {
								console.log(args);
							},
							action: function (e, dt, node, config, cb) {
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
						{
							extend: 'pdf',
							text: 'Экспорт в PDF',
							/*action: function(...args) {
								console.log(args);
							},*/
							download: '', //'open',
							customize: function (doc) {
								console.log(doc);
								let title = [
									`Меню ежедневного питания.`,
									`Директория ${location.origin}/${searchAPI.dir}/`
								];

								doc.language = 'ru-RU';

								doc.info = {
									title: title.join(' '),
									author: location.origin,
									subject: title.join(' '),
									keywords: title.join(' '),
									creator: 'Food Uploader Plugin for WordPress CMS',
								};

								doc.header = {
    								columns: [
    									{
    										text: `${location.origin}/${searchAPI.dir}/`,
    										margin: [15, 15, 15, 15],
    										alignment: 'center'
    									}
									]
								};

								doc.footer = function(currentPage, pageCount) {
									return [
										{
    										text: currentPage.toString() + ' из ' + pageCount,
    										margin: [15, 15, 15, 15],
    										alignment: 'center'
    									}
									];
								};

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