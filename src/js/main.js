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
					if(ex == "xlsx"){
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
				url = base + href,
				arr = href.split('.'),
				ext = arr.at(-1).toLowerCase(),
				go;
			//Просмотр
			if(element.classList.contains("food-view")){
				if(typeof $.fancybox == 'object') {
					let options = {
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
					};
					go = window.location.origin + '/viewer/pdf_viewer/?file=' + href;
					options = {
						src: go,
						opts : options
					};
					$.fancybox.open(options);
				}else{
					window.open(href);
				}
			}
			// Переименование
			let mode, new_file, old_file, form, submit, file;
			if(element.classList.contains("food-rename")){
				file = href.split("/").pop();
				const segments = file.split('.');
				const fileExtension = segments.pop();
				let fileName = segments.join('.');
				let nwfile = prompt("Укажите новое имя для файла:", fileName);
				if(!nwfile) {
					return !1
				}
				form = document.querySelector('form[name=modifed]');
				new_file = form.querySelector('input[name=new_file]');
				old_file = form.querySelector('input[name=file]');
				mode = form.querySelector('input[name=mode]');
				submit = form.querySelector('input[name=mode]');
				old_file.value = file;
				new_file.value = nwfile + `.${fileExtension}`;
				mode.value = "rename";
				$(form).submit();
			}
			// Удаление
			if(element.classList.contains("food-delete")){
				file = href.split("/").pop();
				if(!confirm(`Удалить файл ${file}?`)){
					return !1;
				}
				form = document.querySelector('form[name=modifed]');
				old_file = form.querySelector('input[name=file]');
				mode = form.querySelector('input[name=mode]');
				mode.value = "delete";
				old_file.value = file;
				$(form).submit();
			}
			return !1;
		});
}(jQuery));