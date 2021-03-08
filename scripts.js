document.getElementById("grupoBoton").addEventListener("click", cambiarImage)

const opciones = ['fas fa-hand-paper', 'fas fa-hand-rock', 'fas fa-hand-scissors'];

let eleccionMaquina = 0
let eleccionJugador = 0
let contadorMaquina = 0
let contadorJugador = 0

function cambiarImage(event) {
    const botonEleccion = event.target.id
    if (botonEleccion === "paper") {
        document.querySelector("#imgTu i").className = "fas fa-hand-paper"
        eleccionJugador = opciones.indexOf("fas fa-hand-paper")
    }
    else if (botonEleccion === "rock") {
        document.querySelector("#imgTu i").className = "fas fa-hand-rock"
        eleccionJugador = opciones.indexOf("fas fa-hand-rock")
    }
    else if (botonEleccion === "scissors") {
        document.querySelector("#imgTu i").className = "fas fa-hand-scissors"
        eleccionJugador = opciones.indexOf("fas fa-hand-scissors")
    }
    else {
        alert("No válido")
    }
    eligeMaquina()
    comparar()
}

function eligeMaquina() {
    eleccionMaquina = Math.floor(Math.random() * 3);
    document.querySelector("#imgMaquina i").className = opciones[eleccionMaquina]
}

function comparar() {
    if (eleccionJugador == eleccionMaquina) {
        document.getElementById("suerte").innerHTML = "¡Empate!"
        document.getElementById("selecciona").innerHTML = "Pues nada, ¡a probar suerte otra vez!"
    }
    else if (eleccionJugador == 0 && eleccionMaquina == 1 || eleccionJugador == 1 && eleccionMaquina == 2 || eleccionJugador == 2 && eleccionMaquina == 0) {
        //gana Jugador
        document.getElementById("suerte").innerHTML = "¡Ganaste!"
        contadorJugador++
        document.getElementById("selecciona").innerHTML = "¡Fantástico, eres un@ ganador@!"
        document.getElementById("puntuacionTu").innerHTML = "Tú: " +contadorJugador
    }
    else if (eleccionJugador == 0 && eleccionMaquina == 2 || eleccionJugador == 1 && eleccionMaquina == 0 || eleccionJugador == 2 && eleccionMaquina == 1) {
        //gana Maquina
        document.getElementById("suerte").innerHTML = "¡Perdiste!"
        contadorMaquina++
        document.getElementById("selecciona").innerHTML = "¡Lo sentimos, no es tu día!"
        document.getElementById("puntuacionMaquina").innerHTML = "Maquina: " +contadorMaquina
    }
}


