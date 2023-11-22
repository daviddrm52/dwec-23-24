//Recuperar los elementos del DOM que nos interesan
const boton = document.querySelector('button');
const envoltorio = document.querySelector('.envoltorio-popup');
const cerrar = document.querySelector('.cerrar-popup');

//Acertijo de preguntas (pasado de gente de clase, y convertido a versión daviddrm52)

//Array donde se almacenan las preguntas
const preguntas = [
    {
        pregunta: "¿Que pais tiene más población?",
        respuestaCorrecta: "India",
        respuestaIncorrecta: "China",
    },
    {
        pregunta: "¿Cual es el mayor fabricante de aviación comercial actualmente?",
        respuestaCorrecta: "Airbus",
        respuestaIncorrecta: "Boeing",
    },
    {
        pregunta: "¿Que otro nombre tiene el fenomeno 'Coffin corner'?",
        respuestaCorrecta: "Q Corner",
        respuestaIncorrecta: "Critical Mach Corner",
    },
    {
        pregunta: "¿Cual fue el causante principal de los accidentes de los vuelos Lion Air 610 y Ethiopian 302?",
        respuestaCorrecta: "MCAS",
        respuestaIncorrecta: "Error del piloto",
    },    
    {
        pregunta: "¿Cual es la mejor opcion de motor en los Airbus A320neo?",
        respuestaCorrecta: "Pratt & Withney PW1100G",
        respuestaIncorrecta: "CFM LEAP 1A",
    }    
];

//Variables que cuentan cuantas preguntas llevamos bien y mal, y en cual estamos
let indicePreguntaActual = 0;
let respuestasCorrectas = 0;
let respuestasIncorrectas = 0;

//Variables constantes para detectar los id en el html
const preguntaPropuesta = document.getElementById("preguntaPropuesta");
const botonIzquierdo = document.getElementById("botonIzquierdo");
const botonDerecho = document.getElementById("botonDerecho");
const mensaje = document.getElementById("mensaje");
const botonReiniciar = document.getElementById("botonReiniciar");

//Funcion que baraja las respuestas
function barajaRespuestas(correcta, incorrecta) {
    const respuestas = [correcta, incorrecta];
    respuestas.sort(() => Math.random() - 0.5);
    return respuestas;
}

//Funcion que muestra la pregunta
function muestraPregunta() {
    if(indicePreguntaActual < preguntas.length) {
        preguntaPropuesta.style.display = "block";
        const preguntaActual = preguntas[indicePreguntaActual];
        preguntaPropuesta.textContent = preguntaActual.pregunta;
        const [barajaCorrecto, barajaIncorrecto] = barajaRespuestas(
            preguntaActual.respuestaCorrecta,
            preguntaActual.respuestaIncorrecta
        );
        botonIzquierdo.textContent = barajaCorrecto;
        botonDerecho.textContent = barajaIncorrecto;
    } else {
        if(respuestasCorrectas === preguntas.length) {
            mensaje.textContent = "¡Has ganado, has respondido todas las preguntas bien!";
        } else {
            mensaje.textContent = `Fin del juego. Respuestas correctas: ${ respuestasCorrectas }, Respuestas incorrectas: ${ respuestasIncorrectas}`;
        }
        preguntaPropuesta.style.display = "none";
        botonIzquierdo.style.display = "none";
        botonDerecho.style.display = "none";
        botonReiniciar.style.display = "block";
    }
}

//Funcion que comprueba la respuesta
function compruebaRespuesta(respuestaSeleccionada){
    const preguntaActual = preguntas[indicePreguntaActual];
    if(respuestaSeleccionada === preguntaActual.respuestaCorrecta){
        respuestasCorrectas++;
    } else {
        respuestasIncorrectas++;
    }
    indicePreguntaActual++;
    muestraPregunta();
};

//Event Listeners
botonIzquierdo.addEventListener("click", () => compruebaRespuesta(botonIzquierdo.textContent));
botonDerecho.addEventListener("click", () => compruebaRespuesta(botonDerecho.textContent));
botonReiniciar.addEventListener("click", () =>{
    indicePreguntaActual = 0;
    respuestasCorrectas = 0;
    respuestasIncorrectas = 0;
    mensaje.textContent = "";
    botonIzquierdo.style.display = "inline-block";
    botonDerecho.style.display = "inline-block";
    botonReiniciar.style.display = "none";
    muestraPregunta();
});

//Comenzando el juego
muestraPregunta();

//Eventos
//Click sobre el boton para mostrar el pop-up
boton.addEventListener('click', () => {
    envoltorio.style.display = "block";
    botonReiniciar.style.display = "none";
});

//Click sobre el boton para cerrar el pop-up
cerrar.addEventListener('click', () => {
    reiniciaPopUp();
});

//Click sobre el boton de reiniciar se reinicia y cierra el popup
botonReiniciar.addEventListener('click', () => {
    reiniciaPopUp();
});

function reiniciaPopUp() {
    indicePreguntaActual = 0;
    respuestasCorrectas = 0;
    respuestasIncorrectas = 0;
    mensaje.textContent = "";
    botonIzquierdo.style.display = "inline-block";
    botonDerecho.style.display = "inline-block";
    botonReiniciar.style.display = "none";
    envoltorio.style.display = "none";
    muestraPregunta();
}
