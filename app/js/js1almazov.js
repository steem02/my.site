// var a = 0;
// for(var i = 1; i <= 10; ++i){
// 	a += i;
// 	console.log(a);
// }

 //инкремент и декремент

 // var a = 5;
 // a++; 
 // console.log(a); // 6
 // a--
 // console.log(a); // 5
 // var a = 5;
 // ++a;
 // console.log(a); // 6

//взаимодействие с браузером через prompt

// var a = prompt('Сколько тебе лет?');
// var b = a--;
// console.log(a, 'Лжешь!!!!'); // cначала идет присвоение a=b, затем только a увеличивается 

//функции
//function declaration

// myFunction();
// function myFunction(){
// 	console.log('declaration');
// }

// //function expression

// var abc2 = function() {
// 	console.log('expression')
// }
// abc2();

// //вызов функции с аргументами

// function abc(x,y,z){
// 	return x*y*z;
// }
// console.log(abc(10,15,20));

// var result = function(x, y){
// 	if(typeof(x)=='number' && typeof(y) == 'number') {
// 		for(i=x; i<=y; ++i){
// 		console.log(i);
// 	}}
// 	else{
// 		console.log('Ты дурак? Введи числа!!!')
// 	}
// }
// result(3, 80);

//Нечетные числа

// var odd = function(a,y) {
// 		if(a<y) {
// 			for(i=0; a<y; ++i) {
// 				if(a%2 == 0) {
// 					a += 1;
// 					console.log(a);
// 					a++;
// 				}
// 				else {
// 					console.log(a);
// 					a++;
// 				}
// 			}
// 		}console.log('finish');
// 	}
// odd(5,100);

//Числа / на 3 без остатка

// var foo = function(x, y) {
// 	if(x<y && typeof(x)=='number' && typeof(y)=='number') {
// 			if(x%3 == 0){
// 				for(i=0; x<=y; ++i) {	
// 					console.log(x);
// 					x += 3;
// 				}
// 			}else if(x%3 == 1) {
// 				x += 2;
// 				for(i=0; x<=y; ++i){
// 					console.log(x);
// 					x += 3;
// 				} 
// 			}else {
// 				x +=1;
// 				for(i=0; x<=y; ++i){
// 					console.log(x);
// 					x += 3;
// 				}
// 			}
// 	}
// 	console.log('finish')
// }
// foo(31, 74);

// var foo = function(x, y) {
// 	if(x<y && typeof(x)=='number' && typeof(y)=='number') {
// 		for(i=x; i<=y; ++i) {	
// 			if(i%3 == 0) {
// 				console.log(i);
// 			}
// 		}
			
// 	}
// }
// foo(31, 131);
// console.log('finish')

//числа Фибоначчи

// var arr = [];
// var fib = function(x,y) {
// 	(function(x,y) {
// 		arr[0] = 0;
// 		arr[1] = 1;
// 		for(var i = 2; i <= y; ++i) {
// 			arr[i] = arr[i-1] + arr[i-2];
// 		}	
// 	})(x,y);
// 	(function(x,y) {
// 		for(i=x; i <= y; ++i) {
// 			console.log(arr[i])
// 		}
// 	})(x,y);
// 	console.log('Length:', y-x);
// }
// fib(15,24);

//Функции в функциях

// var a = 6;
// function my() {
// 	var a = 5;
// }
// my();
// console.log(a) // 6

// // Асинхронное выполнение кода

// function kesha() {
// 	console.log('Пирвет, Кеша!')
// }
// setTimeout(kesha, 3000); // задается время , через которое фц-я выполнится
// console.log('Привет, Гена');

//Вывести числа с задержкой в 1 секунду

// var i = 1;
// function myFunc() {
// 	console.log(i)
// 	if(i<10) {
// 		i++;
// 		// setTimeout(myFunc, 200); //функция вызывает сама себя (рекурсия)
// }
// };
// // myFunc()

// document.write('<h1> \'Заголовок\' </h1>')
//красный квадрат с заданным размером
// function rect(a,b) {
// 	document.write('<h1 style = "width:'+a+'px; height: '+b+'px; background: red; text-align: center;"> \'Заголовок\' </h1>')
// }
// rect(400,100)

// 200 кругов разного цвета и размера!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// var u,
// 	i = 1;
// function generateColor() {
// 	return '#'+ Math.floor(Math.random()*16777215).toString(16);
// }
// function circle(u,a,b) {
// 	var r = Math.ceil(Math.random()*100+Math.random()*100);
// 	if(r>=a && r<=b) {	
// 		document.write('<div style="display: inline-block;\
// 								border-radius: 70%;\
// 								width: '+r+'px; \
// 								height: '+r+'px; \
// 								background:'+generateColor()+'; \
// 								margin-right: 10px; \
// 								box-shadow: 8px 8px 3px silver;"></div>')
// 		i++
// 	}
	
// 	if(i<=u) {
// 	setTimeout(function() {
// 		circle(u,a,b)}, 8
// 	);
// }}
// u = prompt('Сколько шариков?')
// circle(u,45,80);

//Работа с браузером
// http://userjsdoc.org/
/**
*Комментарий в виде USERDOC, испльзуется в организациях
*/
//Правила оформления кода от Google:
//https://google.github.io/styleguide/javascriptguide.xml


//setTimeout(foo, 2000) - асинхронный вызов функции

//Объекты

//this - это указатель на текущий объект 

// kesha = {
// 	name: 'Кеша',
// 	whatIsYourName: function() {
// 		console.log('Меня зовут ' + this.name)
// 	},
// 	setAge: function(age) {
// 		this.vozrast = age;
// 	},
// 	skolkoTebeLet: function() {
// 		console.log('Мне ' + this.vozrast + ' лет');
// 	}
// };

// kesha.whatIsYourName();
// kesha.setAge(5);
// kesha.skolkoTebeLet();
// console.log(kesha);

//ArraY   - массивы
// Добавить в массив нечетные числа от 50 до 150

// var array = [],
// 	a = 50,
// 	b = 150;
// !function(a,b) {
// 	for(var i = a; i < b; i++){
// 		if(i % 2 != 0) {
// 			array.push(i);
// 		}
// 	}
// }(a,b);

// console.log(array);

//Создать массив чисел-палиндромов с диапазона от 1 до 1000!!!!!!!!!!!!!!!!!

// var array = [],
// 	a = 1,
// 	b = 1000;
// function isPalindrom(num) {
// 	var oldNum = num,
// 		newNum = 0;
// 	while(num > 0) {
// 		newNum = newNum*10 + num%10;
// 		num = parseInt(num/10);
// 	}
// 	if(newNum == oldNum) {
// 		return true;
// 	}else {
// 		return false;
// 	}
// }
// for(var i = a; i <= b; i++){
// 	if(isPalindrom(i) == true ) {
// 	array.push(i);
// 	}
// }
// console.log(array);

// Способы перебора элементов массива

// var numbers = [1,2,3,4,5,6];
// //luboeslovo - какждый элемент массива
// numbers.map(function(luboeslovo) {
// 	console.log(luboeslovo);
// });
// //ECMAScript 2015
// // Cтрелочные функции в map
// var candies = ['эклер', 'мороженое', 'печенье', 'шоколад'];
// // f - это каждый элемент массива
// candies.map(f => console.log(f));

// function iOdd(num) {
// 	if (num % 2 != 0){
// 		return true;
// 	}
// 	return false;
// }

// var numbers = [1,2,3,4,5,6,7,8];
// var numbers2 = numbers.map(x => x * x);
// var numbers3 = numbers2.filter(isOdd);// может принимать на вход функцию, при условии, что та вернет либо true, либо false
// console.log(numbers); //проверяет каждый элемент массива на условия функции, и оставляет только числа true
// console.log(numbers2);
// console.log(numbers3);

// Таким образом можно выводить любое количество чисел из массива
// function isOdd(num) {
// 	if (num % 2 != 0){
// 		return true;
// 	}
// 	return false;
// }
// function range(count) {
// 	var array = [];
// 	for(var i = 0; i < count; i++) {
// 		array.push(i);
// 	}
// 	return array;
// }
// console.log(range(10).filter(isOdd));

// Объектно-ориентированное программирование = ООП
// Функции-конструкторы

// function Bird(n) {
// 	this.name = n;
// 	this.whatIsYourName = function(){
// 		console.log('Меня зовут ' + this.name);
// 	};
// }
// var kesha = new Bird('Кеша'); // underfined
// console.log(kesha);
// var vasya = new Bird('Вася');
// console.log(vasya);
// vasya.whatIsYourName();
// kesha.whatIsYourName();

// Создать функцию-конструктор прямоугольника
// Отображать прямоугольник через функцию show()

// function range(count) {
// 	var array = [];
// 	for(var i = 0; i < count; i++) {
// 		array.push(i);
// 	}
// 	return array;
// }

// function generateColor() {
// 	return '#'+ Math.floor(Math.random()*16777215).toString(16);
// }

// function Rectangle(a,b) {
// 	this.background = generateColor();
// 	this.width = a;
// 	this.height = b;
// 	this.show = function() {
// 		document.write('<div style="width: '+this.width+'px; height: '+this.height+'px; background: '+this.background+'"></div>')
// 	}
// }
// // range(1000).map(function() { 
// // 	new Rectangle("100%",300).show()
// // });
// range(1000).map(x => (new Rectangle('100%', 200)).show());

// // Наследование и прототипы функций конструкторы
// function Bird() {
// 	this.whatIsYourName = function() {
// 		console.log('Меня зовут '+ this.name);
// 	}
// }
// // Расширение конструктора
// Bird.prototype.setName = function(n) {
// 	this.name = n;
// }

// // var kesha = new Bird();
// // kesha.setName('Кеша');
// // kesha.whatIsYourName();
// // console.log(kesha);
// Parrot.prototype = new Bird();

// function Parrot() {
// 	this.canSpeak = true;
// }

// var kesha = new Parrot();
// kesha.setName('Кеша');
// kesha.whatIsYourName();
// console.log(kesha);

// Иерархия вложенносте функций конструкций и прототипов

// function Mlek() {
// 	this.razmeri = function(n) {
// 		console.log("Размер животного "+ n +' '+this.size);
// 	}
// };
// Mlek.prototype.setsize = function(n) {
// 	this.size = n;
// }
// function Cats() {
// 	this.small = 'S';
// 	this.sherst = 'dsfdf';
// }
// function Dogs() {
// 	this.medium = 'M';
// }
// function Elephants() {
// 	this.x = 'XXL';
// }

// Cats.prototype = new Mlek();
// Dogs.prototype = new Cats();
// Elephants.prototype = new Dogs();
// Cats.prototype.setnew = function() {
// 	this.new = 'dfjd'; 
// }
// var bars = new Cats;
// var dober = new Dogs;
// var momo = new Elephants();
// bars.setsize(30);
// bars.razmeri('bars');
// dober.setnew();
// console.log(bars);
// console.log(dober);
// console.log(momo);
// momo.setsize(50);
// momo.razmeri('Slon');
// dober.setsize(100);
// dober.razmeri('Doberman');


//ECMAScript 2015 !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!



// Классы в новой редакции JavaScript, уже начинает поддерживаться браузерами.



// class Bird{
// 	constructor(n) {
// 		this.name = n; // свойства прописываются отдельно в конструкторе
// 	}
// 	whatIsYourName() {
// 		console.log('Меня зовут '+this.name)//а методы отдельно от конструктора
// 	}
// }
// var kesha = new Bird('Кеша');
// kesha.whatIsYourName();
// console.log(kesha);

// class Tovar {
// 	constructor(name, price, manufacturer) {
// 		this.name = name;
// 		this.price = price;
// 		this.manufacturer = manufacturer;
// 	}
// }
// //класс мягкая игрушка наследуется от товара
// class SoftToys extends Tovar { // класс софттойс наследуется от товара
// 	constructor(name,price,manufacturer) {
// 		super(name,price,manufacturer); //super вызовет конструктор у родителя
// 		this.isMyahkiy = true;
// 	}
// 	setWeight(ves){
// 		this.weight = ves;
// 	}
// }
// var kesha = new SoftToys('Плюшевый Кеша', 1000,'China Industries L.L.C');
// kesha.setWeight('100');
// console.log(kesha);

// PROTOTYPE

// function Visitor() {
// 	this.hasTicket = true;
// }

// var age = parseInt(prompt('Сколько тебе лет?'));
// if(age < 18) {
// 		console.log('Нельзя смотреть фильм');
// }else {
// 	Visitor.prototype.viewMovie = function() {
// 		console.log('Начинаю просмотр фильма');
// 	}
// }
// var kesha = new Visitor();
// kesha.viewMovie();


// 	МАССИВЫ c первого элемента действие начинается, второй элемент не включается
// Методы объекта  массивы

// var array = [1 , 2 , 3 , 4 ,5];
// var str = array.join(';');// создает строку в формате через ';'
// console.log(str);
// //slice формирует новыйй массив на основе старого с 1 по 3 (не включая) элемента
// var array2 = array.slice(1,3);
// console.log(array2);
// //splice удаляет 1 элемент с 0-го индекса
// //удаленные элементы записываются в array3
// // array теперь  - [2,3,4,5]
// var array3 = array.splice(1,2)
// console.log(array);
// //удаляет из массива с 0 ноль элементов, вставляет 2 новых элемента
// array.splice(0,0,123,345);
// console.log(array);

//числа Фибоначчи в массиве только нечетные и до 500

// var arr = [0,1];
// var fib = function(y) {
// 		for(var i = 2; i <= 25; i++) {
// 				arr[i] = arr[i-1] + arr[i-2];
// 	}
// };
// fib();
// function isOdd(num) {
// 	if (num % 2 != 0 && num > 500){
// 		return true;
// 	}
// 	return false;
// }
// var arr2 = arr.filter(isOdd);
// console.log(arr2);








