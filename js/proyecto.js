let arrCharacter = [];
let principal = document.getElementById('principal');
let pantallaBatalla = document.getElementById('pantallaBatalla');
let textoGanador = document.getElementById('textoGanador');
let vidaP1 = document.getElementById('vidaP1');
let vidaP2 = document.getElementById('vidaP2');
let elGanadorEs = document.getElementById('elGanadorEs');

class Character {
    constructor(nombre, ataque, defensa, vida, frase, imagen) {
        this.nombre = nombre;
        this.ataque = ataque;
        this.defensa = defensa;
        this.vida = vida;
        this.frase = frase;
        this.imagen = imagen;

    }
}
pantallaBatallaDiv.style.visibility = 'hidden';
textoGanadorDiv.style.visibility = 'hidden';

let f1 = new Character("Aang", 10, 2, 100, 8,);
let f2 = new Character("Zuko", 8, 2, 100, 8,);
let f3 = new Character("Toph", 9, 2, 150, 8,);
let f4 = new Character("Azula", 15, 2, 100, 8,);

