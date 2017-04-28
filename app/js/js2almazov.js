//window.innerWidth
//window.innerHeight - размеры страницы
//window.outerWidth
//window.outerHeight - размеры окна браузера

//document.createElement('span') - создаем тег
//document.createTextNode('Hello') - создаем текстовый узел
//span.appendChild(text) - создает в элементе спан текст
//document.body.appendChild(span) - добавляет этот элемент в HTML
//
// var kesha = document.getElementById('block');
// var newTag = document.createElement('span');
// var newText = document.createTextNode('Мой текст');
// newTag.appendChild(newText);
// kesha.appendChild(newTag);

// //Можно через ПРОТОТИП забрать любую функцию Array для HTMLCollection
// var abcs = document.getElementByClassName('abc');
// HTMLCollection.prototype.map = Array.prototype.map;
// abcs.map(x => console.log(x.innerText));

//Конструктор треугольников. Вращается при клике
function Triangle(id,base,height,color) {
    this.idElement = document.getElementById(`${id}`);
    this.width = `${base}`;
    this.h = `${height}`;
    this.background = `${color}`;
    this.show = function () {
    	var blockCreate = document.createElement('div');
    	this.idElement.appendChild(blockCreate);
    	var styleCss = blockCreate.style;
    	styleCss.width = 0;
    	styleCss.margin = '200px auto';
        styleCss.border = `${this.width/2}px solid transparent`;
        styleCss.borderTop = '0 solid transparent';
        styleCss.display = 'inline-block';
        if(color != undefined){
        	styleCss.borderBottom = `${this.h}px solid ${this.background}`;
        }else{
        	styleCss.borderBottom = `${this.h}px solid red`;
        }  
    }
    this.setDirection = function(){
    	function clic(){
    		this.style.transformOrigin = '150px 150px';
    		var styl = this.style.transform;
    		this.style.transform = 'rotate(0deg)';
	    	for(var i=0;i<=5;++i){
	    	    switch (this.style.transform) {
    		    	case ('rotate(90deg)'):
    					setTimeout(function(){styl = 'rotate(180deg)'}, 500); break;
    				case ('rotate(180deg)'):
    					setTimeout(function(){styl = 'rotate(270deg)'}, 500); break;
    				case ('rotate(270deg)'):
    					setTimeout(function(){styl = 'rotate(0deg)'}, 500); break;
    				case ('rotate(0deg)' || 'rotate(360deg)'):
    					setTimeout(function(){styl = 'rotate(90deg)'}, 500); break;
    				
	    	    }
			}
		}
		this.idElement.children[0].addEventListener('click', clic, false);}
}
var mini = new Triangle('block1', 300, 300, 'gold');
var mini2 = new Triangle('block2', 300, 300, '#FF55FF');
mini.show();mini2.show();
mini.setDirection();mini2.setDirection();

//Полезное документация, литература
//w3scools
//csstricks
//smashingmagazine
//frontendermagazine - русский, переводы зарубежных статей
//javascript weekly - подписка на изменения обновления в индустрии
//you Don't Know JS - книги по JS на гитхабе(очень полезные)
//https://github.com/getify/You-Dont-Know-JS
//Флэнаган - JavaScript: Definitive Guide

//Популярные библиотеки в порядке сложности, которые сейчас используются
//jQuery
//Angular
//Aurelia.io
//React/Redux/Flux
//Google Closure Library
//Ext.JS 

// Библиотеки для мобильных устройств
// hammer.js - для обработки тачей мобильных устройствах
// Modernizr - позволяет протестировать браузер на возможности
// isMobile - библиотека

// С О Б Ы Т И Я 
// Квадрат меняет разные свойства CSS по кликам

// var box = document.getElementById('block1');
// var counter = 0;

// function tikTak(){
// 	counter += 1;
// 	switch(counter){
// 		case 1: this.style.background = `#${Math.floor(Math.random()*16000000).toString(16)}`; break;
// 		case 2: this.style.borderRadius = '30px'; break;
// 		case 3: this.style.background = 'linear-gradient(to top right, #e1c32d, #fd3, #cf3)';break;
// 		case 4: this.style.boxShadow = '0px 0px 70px #E68600'; break;
// 		case 5: this.style.borderRadius = '50%'; break;
// 	}
// }

// box.addEventListener('click', tikTak);

//СОБЫТИЕ ДЛЯ ЗАГРУЗКИ DOM ДО JS!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// window.addEventListener('DOMContentLoaded', foo)!!!!!!!!!!!!!!!!!!!!!!!!!!

// window.addEventListener("DOMContentLoaded", init);
 
// function SuperButton(tuzik) {
//     var that = this; // that сохраняет контекст. В нашем случае указатель на объект кнопки.
//     this.name = tuzik;
//     this.show = function() {
//         document.body.appendChild(this.buttonEl);
//     }
 
//     this.attachEvents_ = function() {
//         this.buttonEl.addEventListener("click", this.buttonClick_);
//     }
 
//     this.buttonClick_ = function() {
//         console.log(that.name);
//         console.log(this, that);
//     }
 
//     // _ говорит нам, что эта функция используется только внутри конструктора (внутренняя)
//     this.init_ = function() {
//         this.buttonEl = document.createElement("div");
//         this.buttonEl.className = "abc-button"; // CSS-класс
 
//         var textNode = document.createTextNode(this.name);
//         this.buttonEl.appendChild(textNode);
 
//         // Подпишемся на события
//         this.attachEvents_();
//     }
 
//     this.init_();
// }
 
// function init() {
//     var button = new SuperButton("Кнопка");
//     button.show();
// }




















