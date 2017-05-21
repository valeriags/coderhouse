//A través de un constructor defino mi objeto

function constructorHeroe (nombre, vida, golpe,turno){
  this.nombre = nombre;
  this.vida = vida;

  this.turno = turno;

}

//Creo las instancias de mis objetos
var heroeUno = new constructorHeroe("Ragnar", 2500, Math.random(), true);
var heroeDos = new constructorHeroe("Floki", 2500, Math.random(), false);
)
