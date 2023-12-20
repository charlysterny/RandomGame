let nAleatorio;
let btnComprobar = document.querySelector('#comprobar')
let btnLimpiar = document.querySelector('.borrarDatos')
let resultado = document.querySelector('#resultado')
let estadistica = document.querySelector('#estadisticas')

let exitosos = localStorage.getItem('exitosos') || 0
let fallidos = localStorage.getItem('fallidos') || 0

function generarNumero(){
    nAleatorio = Math.floor(Math.random()*20)
}
function comprobarNumero(){
    let cogerValor = document.querySelector("#numeroUsuario").value
    cogerValor = parseInt(cogerValor)
}
if (cogerValor == nAleatorio){
    exitosos++;
    localStorage.getItem('exitosos');
    document.querySelector("#resultado").innerHtml = "¡Muy bien!";
}