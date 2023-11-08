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
        pregunta: "¿Cual es la principal aerolinea de Pais Chiquitin?",
        respuestaCorrecta: "Chiquitin Airlines",
        respuestaIncorrecta: "Air Chiquin",
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