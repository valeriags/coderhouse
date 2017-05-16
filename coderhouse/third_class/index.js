var primerNumero = prompt("Ingrese el primer valor numérico");
var operadorCliente = prompt("Ingrese tipo de operación")
var segundoNumero = prompt("Ingrese el segundo valor numérico");

function calcular_suma (primer_numero, operacion, segundo_numero){
		var resultado = Number(primer_numero) + Number(segundo_numero);
		console.log(resultado);
		return(resultado);
}
function calcular_resta(primer_numero, operacion, segundo_numero){
	var resultado = Number(primer_numero)-Number(segundo_numero);
	console.log(resultado);
	return(resultado);
}
function calcular_multiplicacion(primer_numero, operacion, segundo_numero){
	var resultado = Number(primer_numero)*Number(segundo_numero);
	console.log(resultado);
	return(resultado);
}
function calcular_division(primer_numero, operacion, segundo_){
	var resultado = Number(primer_numero)/Number(segundo_numero);
	console.log(resultado);
	return(resultado);
}
calcular_suma (primerNumero, operadorCliente, segundoNumero);
calcular_resta(primerNumero, operadorCliente, segundoNumero);
calcular_multiplicacion(primerNumero, operadorCliente, segundoNumero);
calcular_division(primerNumero, operadorCliente, segundoNumero);
