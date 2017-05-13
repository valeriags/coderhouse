//PRIMER EJERCICIO//

/*var diasSemana = ["Lunes", "Martes","Miercoles","Jueves", "Viernes", "Sábado", "Domingo"];
for(i=0; i<=6; i++){

	if(diasSemana[i] === "Sábado") {
		console.log("Hoy es: " + diasSemana[i] +":)");
	}
	else if(diasSemana[i]==="Domingo") {	
		console.log("Hoy es: " + diasSemana[i] + ":(");
	}
	else{
		console.log("Hoy es: " + diasSemana[i]+ ", el fin de semana aún no llega");
	}
}*/

//SEGUNDO EJERCICIO//

var diasSemana = ["lunes","martes","miércoles", "jueves", "viernes", "sábado","domingo"];
var diaCliente = prompt("Ingresa un día cualquiera").toUpperCase();


for(i=0; i<diasSemana.length; i++) {

	if(diaCliente == diasSemana[i])
		console.log(diasSemana);
	
}

	/*
	if((diaCliente == diasSemana[i].toUpperCase()) && (diaCliente == [5] || diaCliente == [6])) {
		console.log("el día es: ", diasSemana[i], "y No es laboral");
		break;
	}
	
	else if (diasSemana != diasSemana){
		console.log("No hay coincidencia o el valor ingresado no es válido");
	}
	*/
//console.log("Tenés una coincidencia con " + diasSemana[i] + ". El día es laboral");//
	
//&& (diaCliente !== [5] || diaCliente !== [6]))// {