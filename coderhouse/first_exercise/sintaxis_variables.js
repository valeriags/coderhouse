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
//thirdExercise();
//fourthExercise();

/* CoderHouse
   Second exercise:

Sintaxis y Variables

Realizar una calculadora que realize las siguientes operaciones sumar, restar, multiplicar y dividir:

Debera ingresar un valor mediante un prompt
Debera ingresar otro valor mediante otro prompt
Mostrar el resultado de cada operacion mediante distintos alert

*/

function addition(){
	var firstValue = prompt("Input first value");
	var secondValue = prompt("Input second value");
	var firstValue = Number(firstValue);
	var secondValue = Number(secondValue);

	var addition = alert("Result: " + (firstValue + secondValue));
}


function subtraction(){
	var firstValue = prompt("Input first value");
	var secondValue =prompt("Input second value");
	var firstValue = Number(firstValue);
	var secondValue = Number (secondValue);

	var subtraction = alert("Result: " + (firstValue - secondValue));
}


function multiplication(){
	var firstValue = prompt("Input first value");
	var secondValue = prompt("Input second value");
	var firstValue = Number (firstValue);
	var secondValue = Number (secondValue);

	var multiplication = alert("Result: " + (firstValue * secondValue));
}

function division(){
	var firstValue = prompt("Input first value");
	var secondValue = prompt("Input second value")
	var firstValue = Number(firstValue);
	var secondValue = Number(secondValue);

	var division = alert("Result: " + (firstValue / secondValue));
}

//addition();
//subtraction();
multiplication();
//division();




