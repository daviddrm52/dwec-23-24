//Cronometro usando la clase Date()

let elCrono;
let miFecha = new Date();
let laHoraReal = document.getElementById("laHoraReal");

//Inicializa el tiempo
miFecha.setHours(0,0,0,0);

//Inicializa el texto de "laHoraReal";
laHoraReal.innerHTML = "00:00:00";

function cronometro(){
    let horas = miFecha.getHours();
    let minutos = miFecha.getMinutes();
    let segundos = miFecha.getSeconds();
    segundos += 1;
    if (segundos == 60){
        segundos = 0;
        minutos += 1;
        miFecha.setMinutes(minutos);
    };
    if (minutos == 60){
        minutos = 0;
        horas += 1;
        miFecha.setHours(horas);
    };
    miFecha.setSeconds(segundos);
    if (horas < 10) { horas = "0" + horas;}
    if (minutos < 10) { minutos = "0" + minutos;}
    if (segundos < 10) { segundos = "0" + segundos;}
    laHoraReal.innerHTML = horas + ":" + minutos + ":" + segundos;   
};

function iniciar(){
    elCrono = setInterval(cronometro, 1000);
}

function detener(){
    clearInterval(elCrono);
}

function reiniciarCronometro(){
    //Inicializa el tiempo
    miFecha.setHours(0,0,0,0);

    //Inicializa el texto de "laHoraReal";
    laHoraReal.innerHTML = "00:00:00";
}

function reiniciar() {
    setTimeout(reiniciarCronometro, 5000);
    
}