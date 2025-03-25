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
	if(searchAPI.dir) {
		let table = $('.table').dataTable({
			columns: [
				{ name: 'file' },
				{ name: 'permission' },
				{ name: 'date' },
				{ name: 'size' },
				{ name: '' }
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
			language: {
				info: 'Просмотр страницы: _PAGE_ из _PAGES_',
				infoEmpty: 'Нет доступных записей',
				infoFiltered: '(отфильтровано из _MAX_ общего количества записей)',
				lengthMenu: 'Отображение записей _MENU_ на странице',
				zeroRecords: 'Ничего не найдено - извините',
				search: 'Поиск файла:&nbsp;'
			}
		});
	}else{
		$('.food-row').addClass('row-disabled');
	}
	$('.food-row').removeClass('hidden');
}(jQuery));