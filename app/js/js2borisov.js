//псевдопротокол javascript:..... Используется вместо ссылок для того,
//чтобы при нажатии на любую ссылку выполнялась функция внутри.

//WINDOW свойства
// History	- отвечает за посещенные страницы в этой вкладке
	//history.back() - предыдущая страница
	//history.forward() - вперед
	//history.go(5) - и отрицательные тоже. Отходит на указанное количество страниц вперед или назад.
// Navigator - сам браузер, служебная информация
// Screen - отвечает за монитор пользователя
// Location - адресная строка браузера
//http://www.site.ru:81/about/index.html?x=10#metka
	// protocol
	// hostname 'www.site.ru'
	// port '81' если указан
	// host: 'www.site.ru:81' и хост имя и порт вместе
	//pathname:  все, что после хоста 
	//search: '?x=10'
	//hash: '#metka'
	//href: целиком все
//Document - основной объект браузеров

// function box(){
// 	document.write('<div style="width: 30px; height: 30px; background: red;">BOM</div>')		
	// document.title = 'Hello';
	// document.bgColor = '#fc3256';
// }
// Методы Window!!!! Диалоговые окна.	
// function box() {
// 	// alert('Привет Вася!!!!!')
// 	var x = confirm('Are you sure?'); // вопрос, возвращается true или false
// 	alert(x);
// }	
//var a = SetTimeout(foo, 3000) // lля передачи параметров 'foo(a,b)',или
// поместить в анонимную функцию
//clearTimeout(a) - отменить тайм аут
// var a = setInterval('alert("ТЫРЫПЫРЫ")', 3000);
// clearInterval(a)
// function User(name) {
// 	this.name = name;
// 	this.say = function() {console.log(this.name);};
// }
// var john = new User('John');
// timer = setTimeout(function(){john.say()},1000);
// clearInterval(timer);

// Открытие нового окна
// var w;
// function demo(p){
// 	w = window.open('https://ya.ru','', 'width=500, height=200'); // w это ссылка на объект открытого окна
// 	//параметры menubar=1 и w.blur уже не акутуальны
// 	// w.blur(); //если окно вызывается отдельно, тогда оно сразу же прячется
// }
// //a(href="javascript:demo('top=500, left=500, width=20, height=30, resizable=0, menubar=1, status=1')
// //параметры, задаваемые в HTML
// function demoClose(){
// 	// w.closed проверяет закрыто окно или нет, возвр true или false
// 	w.close();//закрыть это открытое окно
// }
// // window.opener //ссылка на окно, которое открыло окно W!!!!!

// //МЕТОДЫ WINDOW

// function demoTest(){
// 	w.focus();
// 	// w.moveTo(0,0);
// 	// w.resizeTo(300,300);
//  	// w.moveBy(100,100);
//  	// w.resizeBy(100,100); ничего из этого не работает
// }

// Фреймы

// frames
// frames[0]
// frames.length
// frames.content // сontent это то, что указано в html у фрейма в поле name!!!!!
// parent.g() // из фрейма можно вызвать элементы index.html
// //если в фрейме вызвать window, вызовется именно виндов фрейма
// top.g() //самая первая страница, при большом количестве фремов.
// 

//DOCUMENT!!!!!!!

// document.links //можно посмотреть все ссылки на странице в виде массива
// document.images// картинки
// document.forms // формы
// //вместо дефиса свойства, второе слово пишется с большой буквы
// document.links[0].style.backgroundColor = 'green'
// // Для обращения к атрибуту, похожему на свойство JavaScript
// // Оно записывается так
// <label for....>
// label.htmlFor // для разрешения конфликта имен
// // Конфликт с float
// float
// style.cssFloat // второе исключение
// div.className // третье исключение



// Ф О Р М Ы !!!! Коллекции!!! К О Л Л Е К Ц И И!!!!!!!!!!!!!!!!!!!!!



// var f;
// f = document.forms.search
// 	document.forms[0]
// 	document.forms['search'] // обращение к форме через свойство атрибутов
// f.method
// f.length // количество вложенных элементов
// f.elements //вложенные элементы
// f.submit() // отправляет форму
// f.reset() // сбросить форму
// txt.defaultValue // меняется валюе по умолчанию, и не сбрасывается
// txt.form.reset() // обратиться обратно к элементу формы и сбросить, работает
// только с коллекциями и формами

// Элементы формы

// f.elements[1].focus(); // передает фокус форме
// f.elements[1].select(); // выделить все содержимое формы
// f.elements[5].click(); // выбирается кнопка и кликается по ней автоматически

// Тест из learnJavaScript 
// var userName = prompt('Login:');
// if(userName == 'админ'){
// 	var pass = prompt('Password:');
// 	pass == 'Черный'? alert('Добро Пожаловать!')
// 		: pass == '' | pass == null ? alert('Вход отменен')
// 		: alert('Пароль неверен')
// }else if(userName == null | userName == ''){
// 	alert('Вход отменен')
// }
// else{
// 	alert('Я вас не знаю')
// }

// HTMLSelectElement 
// type = 'select-one' по умолчанию
// type = 'select-multiple' если у списка задан атрибут multiple
// selectedIndex индекс выбранного элемента option,
// если не выбран возвращается -1, если выставлен multipe
// вернется индекс первого из выбранных option

// HTMLOptionElement
// form, text, defaultSelected, index, value, selected,
// disabled, label

// Конструктор Option
//Option(text, value, defaultSelected, selected)

//location.assign(url); перейти по ссылке

// HTMLTableElement

//D O M !!!!!!!!!!!!!1
// nodeValue - получить сам текст 
// textContent - получить весь текст включая текст внутри строчных элементов







































