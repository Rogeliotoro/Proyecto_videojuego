let botonPrincipal = document.getElementById('botonPrincipal');
let estadisticas = document.getElementsByClassName('estadisticas');
var aangHp = document.getElementById('aangHp');
let zukoHp = document.getElementById('ZukoHp');
let aangEstadisticas = document.getElementById ('aangEstadisticas');
let zukoEstadisticas = document.getElementById ('zukoEstadisticas');

var aangHp =1000;
var zukohp =1000;


function startBattle() {
    botonPrincipal.innerHTML = "Quien sera el mas fuerte y listo!!";
    for ( let i = 0; i<estadisticas.length; i++ ){
        estadisticas[i].style.visibility= "visible";
    }
}

function aireControl (){
    let hitChance = Math.round(Math.random()*10);
    if(hitChance <= 7){
        let dmg= math.round(math.random()*10)+10;
        zukoHp -= dmg;
        botonPrincipal.innerHTML = "Ataque de Daño" + dmg + "el daño ahora es" + zukoHp+ "hp."
        zukoHp.style.width =zukoHp + "px";
    }
    else{
        botonPrincipal.innerHTML = "has perdido"

    }

}
function fuegoControl (){
    let hitChance = Math.round(Math.random()*10);
    if(hitChance <= 7){
        let dmg= math.round(math.random()*10)+10;
        aangHp == dmg;
        botonPrincipal.innerHTML = "Ataque de Daño" + dmg + "el daño ahora es" + aangHp+ "hp."
    }
    else{
        botonPrincipal.innerHTML = "has perdido"

    }

}