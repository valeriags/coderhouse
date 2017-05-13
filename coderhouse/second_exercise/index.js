
//EJERCICIO CONTROL DE FLUJOS//
/*
var diasSemana = ["lunes", "martes", "miercoles", "jueves", "viernes", "sabado", "domingo"];


for(i in diasSemana){
	if(diasSemana[i]=="miercoles"){
		alert("Hoy es miercoles");
	continue;
	}
	else if(diasSemana[i]=="sabado"){
		alert("Hoy es sabado");
		break
	}
}
*/

//TRABAJO PRACTICO CONTROL DE FLUJOS//

var diasSemana = ["lunes", "martes", "miercoles", "jueves", "viernes", "sabado", "domingo"];
var diaCliente = prompt("Ingrese un dia de la semana");

for(i in diasSemana){

 	if((i<=4)&&(diaCliente==diasSemana[i])){
		console.log("Tenes una coincidencia con: " + diasSemana[i] + ". El día es laboral");
		break;
		}
	else if(i>=5){
		console.log("El dia ingresado es: " + diaCliente + ". El día es fin de semana");
		break
	}
}






