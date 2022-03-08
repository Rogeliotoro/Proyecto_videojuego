let arrayPersonajes = [];
let pantallaPrincipalDiv = document.getElementById('pantallaPrincipal');
let pantallaBatallaDiv = document.getElementById('pantallaBatalla');
let ganadorDiv = document.getElementById('textoGanador');
let vida1 = document.getElementById('vidaJ1');
let vida2 = document.getElementById('vidaJ2');
let textoGanador = document.getElementById('elGanadorEs');

class Personajes {
    constructor(nombre, ataque, defensa,vida, velocidad, frases, imagen) {
        this.nombre = nombre;
        this.ataque = ataque;
        this.defensa = defensa;
        this.vida = vida;
        this.velocidad = velocidad;
        this.frases = frases;
        this.imagen = imagen;
    }
}

pantallaBatallaDiv.style.visibility = 'hidden';
ganadorDiv.style.visibility = 'hidden';


let p1 = new Personajes("Aang", 10, 2, 100, 8, "El Ganador es Aang", "avatar-the-last-airbender-aang.gif");
let p2 = new Personajes("Zuko", 4, 2, 100, 8, "El Ganador es Zuko", "giphy.gif");
let p3 = new Personajes("Toph", 4, 2, 100, 8, "El Ganador es Toph", "7d4.gif");
let p4 = new Personajes("Azula", 4, 2, 100, 8, "El Ganador es Azula", "tumblr_m15y2w4jOU1qjf835o1_r1_500.gif");

function seleccionJugador(character) {
    if (character == 'Personaje1') {
        mostrarPersonajes("avatar-the-last-airbender-aang.gif")
        arrayPersonajes.push(p1);
    } else 
    if (character == 'Personaje2') {
        mostrarPersonajes("giphy.gif")
        arrayPersonajes.push(p2);
    } else 
    if (character == 'Personaje3') {
        mostrarPersonajes("7d4.gif")
        arrayPersonajes.push(p3);
    } 
    else {
        mostrarPersonajes("tumblr_m15y2w4jOU1qjf835o1_r1_500.gif")
        arrayPersonajes.push(p4);
    }
}


