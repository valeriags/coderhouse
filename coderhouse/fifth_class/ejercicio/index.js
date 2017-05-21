// 'use strict';
//Creo mi constructor de objeto Auto y listo las distintas instancias de la propiedad que va a tener mi auto
class Auto {

    constructor(color, modelo, patente, marca, prendido, velocidad, velocidad_maxima){
          this.color = color;
          this.modelo = modelo;
          this.patente = patente;
          this.marca = marca;
          this.prendido = prendido;
          this.velocidad = velocidad;
          this.velocidad_maxima = velocidad_maxima;
        }

    // Defino los metodos de la clase
    encender(){
      if (this.prendido == true) {
        // console.log("El auto esta prendido !");
        return true;
      } else if (this.prendido == false){
        // console.log("El auto esta apagado !");
        return false;
      }
    }
    acelerar(){
      if (this.encender() == true){
        console.log("El auto esta prendido !");
        while (this.velocidad <= this.velocidad_maxima) {
                        console.log("El auto ahora corre a la velocidad: " + this.velocidad);
                        this.velocidad = this.velocidad + 25;
                       }
      }else {
        console.log("Auto agapado")
      }
    }
  }

var Smart = new Auto("Negro", "Smart Fortwo", "2013", "Smart", false, 0, 150 );
// Smart.encender();
Smart.acelerar();



// Hacer un objeto que represente un Auto​
// - Debera tener las propiedades color, modelo, patente, marca, prendido, velocidad y velocidad maxima
// - Debera tener los metodos encender, acelerar, mostrar velocidad actual, frenar y apagar
// - Por lo tanto mediante el metodo acelerar tendra que ir aumentando la propiedad velocidad hasta llegar a la velocidad maxima.
// Hacer un objeto que represente un Auto
//
// Debera tener las propiedades color, modelo, patente, marca, prendido, velocidad y velocidad maxima
// Debera tener los metodos encender, acelerar, mostrar velocidad actual, frenar y apagar
// Por lo tanto mediante el metodo acelerar tendra que ir aumentando la propiedad velocidad hasta llegar a la velocidad maxima.
