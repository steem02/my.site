// var name = "John";
// console.log("Hello, " + name);
// var i = 2;
// 	p = 2;
// while(i < 10) {
// 	i*p
// 	console.log(++i); 
// }


//возведение в 10 степень
// var num = 2;
// var exp = 10;
// var result = 1;
// var cnt = 1;
// while( cnt <= exp ){
// 	result *= num;
// 	console.log(result);
// 	cnt++;
// }

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
var num = 2102;
var str = "На ветке сидит "+num+" ворон";
var x = "";
if( num % 100 < 11 || num % 100 > 14 ){

	switch(num%10){
		case 1: x = "a"; break;
		case 2: ;
		case 3:;
		case 4: x = "ы";

	}
}

// 1 - a 
// 2,3,4 - ы
// 11-12 - без окончания