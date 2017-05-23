//Practica código
//LENGTH

var mensaje = "Hola como estás?";
var cantidadLetras = mensaje.length;
alert("La cantidad de letras es: " + mensaje.length);

//IndexOF

var mensaje = "Valeria Paola";
var buscaLetra = mensaje.indexOf("a");
console.log("Le letra buscada se encuentra en la posición: " + mensaje.indexOf("a"));

//lastIndexOf

var mensaje = "Valeria Paola";
var buscaletra = mensaje.lastIndexOf("a");
console.log("La última posición de la letra buscada es: " + mensaje.lastIndexOf("a"));


//charAt

var mensaje =  "Esto es un mensaje";
var buscaletra = mensaje.charAt(6);
console.log("La letra que se encuentra en la posición nro. 6 es: " + mensaje.charAt(6));

//substring

var mensaje = "Niente senza gioia";
var buscaPalabra = mensaje.substring(7, 12);
console.log("La palabra en la posición siete es: " + mensaje.substring(7, 12));

//toLowerCase

var mensaje = "Hola a tOdoS";
var aMinusculas = mensaje.toLowerCase();
console.log (mensaje.toLowerCase());


//toUpperCase

var mensaje = "hola a todos";
var aMayuscular = mensaje.toUpperCase();
console.log(mensaje.toUpperCase());

//concat

var mensaje = "Hola a ";
var completarMensaje = mensaje.concat("todos ustedes");
console.log(mensaje.concat("todos ustedes"));
