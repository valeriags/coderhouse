// 'use strict';
//Creo mi constructor de objeto Auto y listo las distintas instancias de la propiedad que va a tener mi auto
class Auto {

  constructor(color, modelo, patente, marca, encendido, velocidad, velocidad_maxima) {
    this.color = color;
    this.modelo = modelo;
    this.patente = patente;
    this.marca = marca;
    this.encendido = encendido;
    this.velocidad = velocidad;
    this.velocidad_maxima = velocidad_maxima;
  }

  // Defino los metodos de la clase
  encender() {
    if (this.encendido == true) {
      // console.log("El auto esta prendido !");
      return true;
    } else if (this.encendido == false) {
      // console.log("El auto esta apagado !");
      return false;
    }
  }
  acelerar() {
    if (this.encender() == true) {
      console.log("El auto esta encendido!");

      while (this.velocidad <= this.velocidad_maxima) {
        if (this.velocidad == 0) {
          console.log("Ahora el auto esta acelerando");
        } else
          console.log("El auto ahora corre a una velocidad de: " + this.velocidad + " Km/h");
        this.velocidad = this.velocidad + 25;
      }
    }
  }
  apagar() {
    if (this.velocidad != 0) {
      console.log("El auto ha frenando y ahora puede apagarse");
    }
  }
}


//Defino la clase que dará valor a las propiedades del constructor
var Smart = new Auto("Negro", "Smart Fortwo", "2013", "Smart", true, 0, 150);
//Invoco a los métodos
Smart.encender();
Smart.acelerar();
Smart.apagar();



// Hacer un objeto que represente un Auto​
// - Debera tener las propiedades color, modelo, patente, marca, prendido, velocidad y velocidad maxima
// - Debera tener los metodos encender, acelerar, mostrar velocidad actual, frenar y apagar
// - Por lo tanto mediante el metodo acelerar tendra que ir aumentando la propiedad velocidad hasta llegar a la velocidad maxima.
// Hacer un objeto que represente un Auto
//
// Debera tener las propiedades color, modelo, patente, marca, prendido, velocidad y velocidad maxima
// Debera tener los metodos encender, acelerar, mostrar velocidad actual, frenar y apagar
// Por lo tanto mediante el metodo acelerar tendra que ir aumentando la propiedad velocidad hasta llegar a la velocidad maxima.
