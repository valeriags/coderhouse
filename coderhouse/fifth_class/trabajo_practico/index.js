//Creo el consutructor
class Pelicula {

  constructor(nombre, id, descripcion, año, duracion, actores, director) {
    this.nombre = nombre;
    this.id = id;
    this.descripcion = descripcion;
    this.año = año;
    this.duracion = duracion;
    this.actores = actores;
    this.director = director;
  }

  //Creo los métodos

  nombrePelicula() {
    console.log("El nombre de la pelicula es: " + this.nombre);
  }
  generoPelicula() {
    console.log("Genero: " + this.id);
  }
  descripcionPelicula() {
    console.log("Sinopsis: " + this.descripcion);
  }
  añoPelicula() {
    console.log("Año: " + this.año);
  }
  duracionPelicula() {
    console.log("Duración: " + this.año);
  }
  actoresPelicula() {
    console.log("Protagonistas: " + this.actores);
  }
  directorPelicula() {
    console.log("Director: " + this.director);
  }
}

//Creo la clase
var Movie = new Pelicula("Volver al futuro");
Movie.nombre = "Volver al futuro";
Movie.id = "Ciencia ficcion";
Movie.descripcion = "Marty McFly, un estudiante secundario de 17 es accidentalmente enviado 30 años al pasado en una maquina del tiempo DeLorean inventada por su mejor amigo el Doctor Brown.";
Movie.año = "1985";
Movie.duracion = "1h 56min";
Movie.actores = "Michael J. Fox, Christopher Lloyd, Lea Thompson";
Movie.director = "Robert Zemeckis";
//Creo los métodos
Movie.nombrePelicula();
Movie.generoPelicula();
Movie.descripcionPelicula();
Movie.añoPelicula();
Movie.duracionPelicula();
Movie.actoresPelicula();
Movie.directorPelicula();
