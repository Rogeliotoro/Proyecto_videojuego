const botonPrincipal = document.getElementById('botonPrincipal');
const estadisticas = document.getElementsByClassName('estadisticas');
const aangHp = document.getElementById('aangHp');
const zukoHp = document.getElementById('ZukoHp');
const aangEstadisticas = document.getElementById ('aangEstadisticas');
const zukoEstadisticas = document.getElementById ('zukoEstadisticas');
const buttonStyle = document.getElementsByClassName('buttonStyle');

const life1 = 100
const life2 = 100

///------------------------------------

function startBattle() {
    botonPrincipal.innerHTML = "Quien sera el mas fuerte y listo!!";
    for ( let i = 0; i <= estadisticas.length; i++ ){
        estadisticas[i].style.visibility= "visible";
    }
}

life1=life1-10