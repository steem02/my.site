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
// function Triangle(id,base,height,color) {
//     this.idElement = document.getElementById(`${id}`);
//     this.width = `${base}`;
//     this.h = `${height}`;
//     this.background = `${color}`;
//     this.show = function () {
//     	var blockCreate = document.createElement('div');
//     	this.idElement.appendChild(blockCreate);
//     	var styleCss = blockCreate.style;
//     	styleCss.width = 0;
//     	styleCss.margin = '200px auto';
//         styleCss.border = `${this.width/2}px solid transparent`;
//         styleCss.borderTop = '0 solid transparent';
//         styleCss.float = 'left';
//         styleCss.marginLeft = '250px';
//         if(color != undefined){
//         	styleCss.borderBottom = `${this.h}px solid ${this.background}`;
//         }else{
//         	styleCss.borderBottom = `${this.h}px solid red`;
//         }  
//     }
//     this.setDirection = function(){
//     	function clic(){
//     		this.style.transformOrigin = '150px 150px';
// 	    	var v = this;
// 	    	for(i=0;i<10;++i){
//     	    switch (i) {
// 		    	case 1:
// 					setInterval(function(){v.style.transform = 'rotate(180deg)'},1100);
// 					break;
				
// 				case 2:
// 					setInterval(function(){v.style.transform = 'rotate(270deg)'},1200);
// 					break;
				
// 				case 3:
// 					setInterval(function(){v.style.transform = 'rotate(0deg)';},1300);
// 					break;
				
// 				case 0:
// 					setInterval(function(){v.style.transform = 'rotate(90deg)'},1000);
// 					break;
// 				}
//     	    }

			
// 		}
// 		this.idElement.children[0].addEventListener('click', clic);}
// }
// var mini = new Triangle('block1', 300, 300, 'gold');
// var mini2 = new Triangle('block2', 300, 300, '#FF55FF');
// mini.show();mini2.show();
// mini.setDirection();mini2.setDirection();
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

// Слайдер и галереи Lightbox
// window.addEventListener('DOMContentLoaded', init);

// var blackpanel,
// 	images,
// 	container;

// function closeLightbox() {
// 	blackpanel.innerHTML = '';
// 	blackpanel.style.display = 'none';
// 	blackpanel.removeEventListener('click', closeLightbox);
// }

// function init() {
// 	console.log('durak');
// 	blackpanel = document.getElementById('blackpanel');
// 	images = document.getElementsByClassName('my-image');

// 	container = document.getElementsByClassName('container')[0];

// 	for(var i = 0; i <images.length; i++){
// 		images[i].addEventListener('click', function(){
// 			blackpanel.style.display = 'flex';
// 			console.log(this.src);

// 			var bigImage = document.createElement('img');
// 			bigImage.src = this.src;
// 			bigImage.style.width = '75vw';
// 			bigImage.style.height = '30vw';
// 			bigImage.style.margin = 'auto';
// 			bigImage.style.borderRadius = '4px';
// 			bigImage.id = 'selection';
// 			blackpanel.appendChild(bigImage);
// 			bigImage.draggable = 'false';

// 			bigImage.addEventListener('click',function(e){
// 				console.log('next');
// 				e.stopPropagation();
// 			},false);
// 			blackpanel.addEventListener('click', closeLightbox, false);
// 		});
// 	}
// 	var count = 0;
// 	container.addEventListener('click', function(){
// 		count++;
// 		if (count == 3){
// 			this.style.background = '#' + Math.floor(Math.random()*16000000).toString(16);
// 			count = 0;
// 		}
// 	});
// }

// Работа с Формами Блоги Форумы Добавление текста в HTML из браузера
// window.addEventListener('DOMContentLoaded', init);

// function init() {
// 	var kesha = document.getElementById('kesha');
// 	var messagesBox = document.getElementById('messagesbox');
// 	// keyup - отпустили клавишу
// 	// keydown - нажали клавишу
// 	// keypress - нажали и держим
// 	kesha.addEventListener('keyup', function(e) {
// 		// console.log('Бам!');
// 		// console.log(this);
// 		// console.log(e);
// 		if (e.keyCode == 13) {
// 			var newTextLine = document.createElement('p');
// 			newTextLine.appendChild(document.createTextNode((this.value)));
// 			messagesBox.appendChild(newTextLine);
// 			this.value = '';
// 		}
// 	});
// }

// СЛАЙДЕР !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!


// window.addEventListener('DOMContentLoaded', init);
// var images,container,slide,curPos,randomColor,stop2,knope;

// function init() {
// 	var buttonLeft = document.getElementById('buttonLeft');
// 	var buttonRight = document.getElementById('buttonRight');
// 	knope = document.getElementsByClassName('buttons');
// 	container = document.getElementById('container');
// 	imag = document.getElementsByClassName('my-image');
// 	slide = document.getElementById('slider');
// 	imageSize = parseInt(getComputedStyle(imag[0]).width);
	

// 	var left = function(){
// 		container.style.transition = 'left 0.5s';
// 		container.style.webkitTransition = 'left 0.5s'
// 		if(parseInt(container.style.left) < 0){
// 		container.style.left = (parseInt(container.style.left)+imageSize) + 'px';
// 		}
// 	};
// 	var right = function(){
// 		container.style.transition = 'left 0.5s';
// 		container.style.webkitTransition = 'left 0.5s'
// 		if(parseInt(container.style.left) > (-(imag.length-1)*imageSize)){
// 		container.style.left = (parseInt(container.style.left)-imageSize) + 'px';
// 		}
// 	};
// 	var out = function(){
// 		for(var i = 0; i < knope.length; ++i){
// 		knope[i].style.display = 'none';
// 		}
// 		slide.blur();
// 	}
// 	var key = function(e){
// 		if(e.keyCode == 37){
// 			left();
// 		}else if(e.keyCode == 39){
// 			right();
// 		}
// 		e.stopPropagation();
// 	}

// 	slide.addEventListener('keyup', key);
// 	buttonLeft.addEventListener('click', left);
// 	buttonRight.addEventListener('click', right);
// 	slide.addEventListener('mouseout', out);
// 	container.style.left = 0;
// 	function step1(){
// 		randomColor = '#'+Math.floor(Math.random()*16000000).toString(16);
// 		curPos = container.style.left;
// 		slide.style.boxShadow = '0 0 53px 7px'+randomColor;
// 		container.style.left = (parseInt(curPos) - imageSize) + 'px';
// 		setTimeout(function (){
// 				slide.style.boxShadow = '0 0 0px 0px'+randomColor;
// 			},2500);
			
// 		if(curPos === -(imag.length-1)*imageSize + 'px'){
// 			container.style.transition = 'left 10s';
// 			slide.style.transition = 'box-shadow 10s';
// 			slide.style.boxShadow = '0 0 73px 45px'+randomColor;
// 			container.style.left = '0';
// 			setTimeout(function() {
// 				container.style.transition = 'left 5s ease';
// 				slide.style.transition = 'box-shadow 5s ease';
// 			},10000);
// 			setTimeout(step1,10100);
// 		}else{	
// 			var stop2 = setTimeout(step1,5000);
// 			};
// 		var even = function(event){
// 				for(var i = 0; i < knope.length; i++){
// 					knope[i].style.display = 'block';
// 					knope[i].style.opacity = '0.4';
// 				}
// 				clearTimeout(stop2);
// 				slide.focus();
// 				event.stopPropagation();
// 			}
// 		slide.addEventListener('mouseover', even);
// 	}
// 	setTimeout(step1,1500);
// };
















