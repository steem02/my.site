// var name = "John";
// console.log("Hello, " + name);
// var i = 2;
// 	p = 2;
// while(i < 10) {
// 	i*p
// 	console.log(++i); 
// }


// возведение в степень
// var num = 3;
// var exp = 15;
// var result = 1;
// var cnt = 0;
// while( cnt <= exp ){
// 	result *= num;
// 	console.log(result);
// 	cnt++;
// }
// function power(num, exp){
// 	var result = 1;
// 	for (cnt=1; cnt<=exp; cnt++){
// 		result*=num;}
// 	return result;
// }
// console.log(power (2, 10));
// console.log(power (5, 12));
// console.log(power (6, 18));




//треугольник
/*
*
**
***
****
*****
*/
// var lines = 5;
// var line = ''
// var symbol = '*'
// var cnt = 1;
// while( cnt <= lines ) {
// 	line += symbol;
// 	console.log(line);
// 	cnt++;
// }

//Цикл For
// var num = 2; 
// var exp = 10;
// var cnt = 1;

// for (var result = 1; cnt <= exp; cnt++){
// 	result *= num
// 	console.log(result)
// }

//Выводить четные числа
// for(var i=0; i<10; i++){
// 	if(i = = 0)
// 		console.log(i + " - zero");
// 	else if(i % 2 == 0 )
// 		console.log(i + " - even")
// 	else
// 		console.log(i + " - odd")
// }

// Возраст
// var age = 77;
// if(age >= 18 && age <= 59)
// 	console.log("Вам еще работать и работать");
// else if(age>59)
// 	console.log("Вам пора на пенсию");
// else
// 	console.log("Учитесь, Вам рано работать");

//Числа делимые на 3 без остатка
// for(var i=322; i<356; i++){
// 	if( i % 3 != 0)
// 		continue;
// 	console.log(i);
// 	break;
// }

//Считаем ворон
// var num = 2;
// var str = "На ветке сидит "+num+" ворон";
// var x = "";
// if( num % 100 < 11 || num % 100 > 14 ){

// 	switch(num%10){
// 		case 1: x = "a"; break;
// 		case 2: ;
// 		case 3:;
// 		case 4: x = "ы";
// 	}
// console.log(str + x);
// }
// 1 - a 
// 2,3,4 - ы
// 11-12 - без окончания

//Функции
// function abs(num){
// 	// if(num<0)
// 	// 	return -num;
// 	// return num;
// 	return (num<0) ? -num : num; // аналогично
// }
// console.log(abs(5));
// console.log(abs(-5));
// function sum(n1, n2){
// 	return n1 + n2;
// }
// var res = sum(5,3);
// console.log(res);
// console.log(sum(2, 4));

// function sayHello(name, sign){
// 	name = name || "Guest";       // передача значений в функции
// 	sign = sign || "...";
// 	console.log("Hello, " + name + sign);
// }
// sayHello("John", "!");
// var n = "Mike";
// sayHello(n);
// sayHello();

//переменные вложенные в функции
// var x = "X";
// var y = "Y";
// function outer(){
// 	var x = "x";
// 	console.log("x: " + x);
// 	console.log("y: " + y);
// 	y = "y";
// 	function inner(z){
// 		var y = "_y";
// 		console.log("x: " + x);
// 		console.log("y: " + y);
// 		console.log("z: " + z);
// 	}
// 	inner("z");
// }
// outer();
// console.log("x: " + x);
// console.log("y: " + y);


// //ссылки на функции в функциях
// var greet = 'gh';
// function say(greet){
// greet = "ok";
// name = "ok";
// 	return function(name){
// 		return greet + " " + name;
// 	};
// }
// var ru = say("Privet");
// var en = say("Hello")
// console.log(ru("Serh"));
// console.log(en("John"))


// //lab 3.2
// var x = 1;
// var y = 4;
// // function compare(x){
// // 	return function(y){
// // 		if(y>x)
// // 		return true;
// // 		else if(y<x)
// // 			return false;
// // 		return null; 
// // 	}
// // }
// //можно оптимизировать в это
// function compare(x){
// 	return function(y){
// 		if(y==x)
// 			return null;
// 		return y<x;
// 	}
// }
// var result = compare(x);
// console.log(result(y));

//рекурсия
// function power(base, exp){
// 	if(exp == 0) return 1;
// 	return base * power(base, exp-1);
// };
// var a = power;
// console.log(a(2,15));

// //объекты
// var user = {};
// user.name = "John";
// user.age = 25;

// var user = {
// 	0: "a",
// 	1: "b",
// 	2: "c"
// }
// for(i=0; i in user; i++)
// console.log(i + ": " + user[i]);
// var user = {
// 	x: "a",
// 	y: "b",
// 	z: "c"
// }
// for(var i in user)
// 	console.log(i + ": " + user[i]);

// var user = {
// 	"name": "John",
// 	"age": 25,
// 	"admin": true,
// 	say: function(word){
// 		console.log(word + " from " + this.name);
// 		this.foo();
// 	}
// 	foo: function(){}
// }
// user.say("hello");

// Работа с объектами
// function showbook() {
// 	return console.log(this.hello)
// 	}
// var book1 = {
// 	name: "Garry Potter",
// 	show: function(price){
// 		return console.log("price: " + price + " " + "name: " + this.name )
// 	}
// };
// var book2 = {
// 	hello: "Hello!",
// 	show: showbook
// }
// console.log(book1.show("35$"));
// console.log(book2.show())

//вызов подфункции объекта с его параметрами
// var o = {
// 	param: 10,
// 	method: function(){
// 		var self = this;
// 		function test(){
// 			console.log(self.param);
// 		}
// 		test();
// 	}
// }
// var param = 100;
// o.method();

//массив
// var user = ["a", "b", "c"];
// user[5] = "x";
// // for(i=0; i < user.length; i++) //пробегается по всем эл-там, в том числе и по undefined
// for(var i in user)
// console.log(i + ": " + user[i]); //пробегает только по заданным св-ам;

//lav 4.3
// var a = [5, 12];
// var b = [];
// a[99] = 7;
// for( i=0; i < a.length; i++)
// 	if(a[i] != undefined)
// 		b.push(Math.pow(a[i],2));
// 	// for (var i in a){
// // 	b[i] = Math.pow(a[i],2);
// // };
// console.log(b)

//самооткрывающаяся футкция
// function foo(){
// 	var a = []
// 	for(var i=0; i<3; i++)
// 		(function(g){
// 		a.push(function(){console.log(g)});  
// 	})(i);
// 	return a;
// }
// var x = foo();
// x[0]();
// x[1]();
// x[2]();

//lav 5.1 search
// var s = 'Мы знаем, что монохромный цвет - это градации серого';
// var txt = 'сер';
// var word;

// function search(){
// 	var pos = s.indexOf(txt);
// 	if(pos != -1) // тоесть отсутствует
// 		var start = s.lastIndexOf(' ', pos) + 1;
// 		var end = s.indexOf(' ', pos);
// 	if(end == -1) // пробел тоже отсутствует
// 		word = s.slice(start);
// 	else
// 		word = s.slice(start, end);
// }
// search();
// console.log(word)

//console.log(s.slice((s.lastIndexOf(' ',s.indexOf(txt))+1),
//	(s.indexOf(' ',s.indexOf(txt))-1)))

//Алфавит и числа + упрощение функций через callback
// var aIdx = 97;
// var alphabet = '';
// for(var i=0; i<26; i++)
// 	alphabet += String.fromCharCode(aIdx+i);
// console.log(alphabet);

// var digits = '';
// for(var i=0; i<10; i++)
// 	digits += i;
// console.log(digits);
// function buildString(n, callback){
// 	var result = "";
// 	for(var i=0; i<n; i++)
// 		 result += callback(i);
// 	return result;
// }
// alphabet = buildString(26, function(i){
// 	var aIdx = 97;
// 	return String.fromCharCode(aIdx+i);
// });
// digits = buildString(10, function(i){
// 	return i;
// });
// console.log(digits);
// console.log(alphabet);

//replace регулярные выражения
//lab 5.2
// 25-02-2012
// 25-2-2012
// 01-12-2011
// 2-12-1978
// ^/\d\d?-\d\d?-\d{4}$/ //ограничили начало и конец 
// /\d{1,2}-\d{1,2}-\d{4}/ 
// /[0-3]?\d-[0-1]?\d-[1-2]\d{4}/

//поиск в рег выражениях со ссылкой ()
// "......."
// ""
// "kkdsjf'
// var re = /(['"])[^'"]*\1/; // найти строки начинающиеся на " bkb '
							// и на том же закончить поиск.

// split и replace с регулярными выражениями
// console.log('12BnM'.replace(/^(\d+)([a-z]+)$/i, '$2-$1'))
// 'BnM-12'

var s ="Smith, John\nDow, Mike\nLee, Steve";
// 'John Smith\nMike Dow\nSteve Lee'; результат
//глобалом g находим все значения(т.к. рег выражения находят и останавливаются на первом)
console.log(s.replace(/([a-z]+), ([a-z]+)/ig, "$2 $1")); 




























