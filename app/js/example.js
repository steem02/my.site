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

















































