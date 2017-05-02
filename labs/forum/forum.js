// Работа с Формами Блоги Форумы Добавление текста в HTML из браузера
window.addEventListener('DOMContentLoaded', init);

function init() {
	var kesha = document.getElementById('kesha');
	var messagesBox = document.getElementById('messagesbox');
	// keyup - отпустили клавишу
	// keydown - нажали клавишу
	// keypress - нажали и держим
	kesha.addEventListener('keyup', function(e) {
		// console.log('Бам!');
		// console.log(this);
		// console.log(e);
		if (e.keyCode == 13) {
			var newTextLine = document.createElement('p');
			newTextLine.appendChild(document.createTextNode((this.value)));
			messagesBox.appendChild(newTextLine);
			this.value = '';
		}
	});
}