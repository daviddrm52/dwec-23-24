//Cronometro sin el uso del Date()

window.onload = inicio;

//Funcion que se ejectuará al iniciar la pagina
function inicio(){
    document.querySelector(".iniciar").addEventListener("click",cronometro);
    document.querySelector(".detener").addEventListener("click",pausar);
    dias = 0; horas = 0; minutos = 0; segundos = 0;
    document.getElementById("tiempo").innerHTML="00:00:00";
    document.getElementById("activo").innerHTML="El cronometro lleva "+dias+" dias activo.";
};

//Funcion que actuará como cronometro, con el setInterval()
function cronometro(){
    dias = 0; horas = 0; minutos = 0; segundos = 0;
    registros();
    id = setInterval(registros,1000);
    document.querySelector(".iniciar").removeEventListener("click",cronometro);
}
//Funcion que almacena las horas, minutos y segundos, y se ocupa de ir añadiendo tiempo
function registros(){
    let horasAuxiliares, minutosAuxiliares, segundosAuxiliares;
    segundos++;
    if (segundos > 59){
        minutos++; //Cuando llegue a 60 segundos, sumara un minuto y se reestablecen los segundos a 0
        segundos = 0;
    }
    if (minutos > 59){
        horas++; //Cuando llegue a 60 minutos, sumara una hora y se reestablecen los minutos a 0
        minutos = 0;
    }
    if (horas >= 24){
        dias++; //Cuando llegue a 24 horas, sumará un dia al texto que tiene debajo el cronometro
        horas = 0;
    }
    //Para cuando haya por ejemplo 01:01:01
    if (segundos < 10){
        segundosAuxiliares= '0' + segundos;
    } else {
        segundosAuxiliares = segundos;
    }
    if (minutos < 10){
        minutosAuxiliares = '0' + minutos;
    } else {
        minutosAuxiliares = minutos;
    }
    if (horas < 10){
        horasAuxiliares = '0' + horas;
    } else {
        horasAuxiliares = horas;
    }
    //Impresión en la pagina
    document.getElementById("tiempo").innerHTML = horasAuxiliares + ':' + minutosAuxiliares + ':' + segundosAuxiliares; 
    document.getElementById("activo").innerHTML="El cronometro lleva "+dias+" dias activo.";
}

//Funcion que detendrá el cronometro con clearInterval() y lo conservará en su tiempo
function pausar(){
    clearInterval(id);
    document.querySelector(".iniciar").addEventListener("click",cronometro);
}