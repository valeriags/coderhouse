/*  CoderHouse 03052017
  	First exercise
*/

function firstExercise(){
	var nombre = prompt("Tell me your name");
	var texto = alert("Hi " + nombre + ", how are you today?");
}


function secondExercise(){
var number1 = prompt("Write a number without decimals");
var number2 = 20
var sum = alert(number2 + (+ number1));
}

function thirdExercise(){
var number1 = prompt("Write a number without decimals");
var number2 = 50
var sum = alert(number1 - ( number2)); 
}

function fourthExercise(){
	var number1 = prompt("Write a number without decimals");
	var number2 = prompt("Write other number without decimals");
	//console.log(typeof(number1), typeof(number2));
	var number1 = Number(number1);
	var number2 = Number(number2);
	var total = alert("The result is: " + (number1 + number2) );
}

//firstExercise();
//secondExercise();
thirdExercise();
//fourthExercise();
