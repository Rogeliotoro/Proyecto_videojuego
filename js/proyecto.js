
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
let p2 = new Personajes("Zuko", 8, 2, 100, 8, "El Ganador es Zuko", "giphy.gif");
let p3 = new Personajes("Toph", 12, 2, 100, 8, "El Ganador es Toph", "7d4.gif");
let p4 = new Personajes("Azula", 15, 2, 100, 8, "El Ganador es Azula", "tumblr_m15y2w4jOU1qjf835o1_r1_500.gif");

const seleccionJugador = (character) => {
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
const mostrarPersonajes = (character) => {
    if (arrayPersonajes.length < 2) {
        if (arrayPersonajes.length == 1) {
            let img = document.createElement('img');
            img.src = './img/Jugador2/' + character;
            document.getElementById('j2vs').appendChild(img)
        } else {
            let img = document.createElement('img');
            img.src = './img/Jugador1/' + character;
            document.getElementById('j1vs').appendChild(img)

        }
    }
}
const startFight = () =>{
    let img = document.createElement('img');
    img.src = './img/Jugador1/' + arrayPersonajes[0].imagen;
    document.getElementById('imagenJ1').appendChild(img)

    let img2 = document.createElement('img');
    img2.src = './img/Jugador2/' + arrayPersonajes[1].imagen;
    document.getElementById('imagenJ2').appendChild(img2)
}

const empezarJuego = () => {
    if (arrayPersonajes.length == 2) {
        pantallaPrincipalDiv.style.visibility = 'hidden';
        pantallaBatallaDiv.style.visibility = 'visible';
        startFight();
    }
}

const ataque =  (jugador) => {
    if (jugador == 0){
        if ((vida2.value + arrayPersonajes[0].defensa) - arrayPersonajes[1].ataque>= 0){
        vida2.value -=  arrayPersonajes[1].ataque - arrayPersonajes[0].defensa;
        } else{
            vida2.value = 0;
            finish (0);
        }
    }else{
        if ((vida1.value + arrayPersonajes[1].defensa) - arrayPersonajes[0].ataque >= 0){
            vida1.value -= arrayPersonajes[0].ataque - arrayPersonajes[1].defensa;
        } else{
            vida2.value = 0;
             finish (1);
        }
    }
}

const finish = (winner) => {
    pantallaBatallaDiv.style.visibility = 'hidden';
    ganadorDiv.style.visibility = 'visible';
    textoGanador.textContent += arrayPersonajes[winner].frases;
}

