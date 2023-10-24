// Funciones de Tiempo
/* 
setTimeout(funcionALlamar, milisegundos) ->

Ejecuta la funcion funcionALlamar cuando haya transcurrido el tiempo
indicado en el segundo parametro (en milisegundos).

setInterval(funcionALlamar, milisegundos) ->

Ejecuta la funcion funcionALlamar de manera periodica segun el tiempo
del segundo parametro (en milisegundos).

clearInterval() ->

Detiene la ejecución iniciada con setInterval().

clearTimeout() ->

Detiene la ejecución iniciada con setTimeout().
*/

function crono(){
    let elCrono;
    let fecha = new Date();
    let horas = fecha.getHours();
    let minutos = fecha.getMinutes();
    let segundos = fecha.getSeconds();
    let ampm = "PM";
    if(horas > 12){
        ampm = "PM";
        horas -= 12;
    } else {
        ampm = "AM";
    };
    if (horas < 10) {horas = "0"+horas;}
    if (minutos < 10) {minutos = "0"+minutos;}
    if (segundos < 10) {segundos = "0"+segundos;}
    let hora = document.getElementById("hora");
    hora.innerHTML = horas + ":" + minutos + ":" + segundos + " " + ampm;
}

window.onload = function(){
    elCrono = setInterval(crono, 1000);
}

