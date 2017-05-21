
function Personaje(nombre, vida, turno) {
    this.nombre = nombre;
    this.vida = vida;
    this.golpe = function(maxGolpe) {
        return Math.round(Math.random() * maxGolpe);
    }
    this.turno = turno;

}

var estadoJuego = true;
var jugador1 = new Personaje("Hulk", 5000, true);
var jugador2 = new Personaje("Thor", 2000, false);


function quienGano(vidaJugador) {
    if (vidaJugador <= 0) {
        console.log("Gano la Pelea", jugador2.nombre);
        return false;
    } else if (vidaJugador <= 0) {
        console.log("Gano la Pelea", jugador1.nombre);
        return false;
    } else {
        return true;
    }
};

while (estadoJuego) {
    if (jugador1.turno) {
        golpeTurno = jugador1.golpe(2000);
        console.log("el golpe de ", jugador1.nombre, " es de ", golpeTurno)
        jugador2.vida -= golpeTurno
        jugador1.turno = false;
        estadoJuego = quienGano(jugador2.vida);
    } else {
        golpeTurno2 = jugador2.golpe(1000);
        console.log("el golpe de ", jugador2.nombre, " es de ", golpeTurno2)
        jugador1.vida -= golpeTurno2;
        jugador1.turno = true;
        estadoJuego = quienGano(jugador1.vida);
    }
    console.log(jugador1.nombre, ": vida ", jugador1.vida, " - ", jugador2.nombre, ": vida ", jugador2.vida);

    //debugger;
}
