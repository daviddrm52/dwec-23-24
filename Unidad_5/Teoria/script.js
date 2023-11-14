// Tema 5 -> DOM y Eventos

//querySelector
//parametro: un selector CSS

// const para = document.querySelector('body > div:nth-child(3) > p:nth-child(2)');
// console.log(para);

//querySelectorAll
//parametro: un selector css

// const todos = document.querySelectorAll('p');
// console.log(todos);
// console.log(todos[0]);
// todos.forEach(todo => {
//     console.log(todo);
// });

//Alternativas para acceder al DOM

//getElementById
//parametro: nombre del identificador

// const titulo = document.getElementById('titulo');
// console.log(titulo);

//getElementsByClassName
//parametro: nombre de la clase asociada a ese elemento

// const error = document.getElementsByClassName('error');
// console.log(error);
// console.log(error[0]);
//No intentar un forEach, no funciona

//getElementsByTagName
//parametro: nombre del tag del elemento

// const paras = document.getElementsByTagName('p');
// console.log(paras);

//Modificar el contenido de la pagina

//innerHTML y innerText

// let para = document.querySelector('p');
// let contenido = para.innerHTML;
// console.log(contenido);

// let paras = document.querySelectorAll('p');
// let contenidoP1 = paras[2].innerText;
// console.log(contenidoP1);

//Obtener y establecer atributos
// let enlace = document.querySelector('a');
// let url = enlace.getAttribute("href");
// console.log(url);

// enlace.setAttribute('href', 'https://www.boeing.com/');
// url = enlace.getAttribute("href");
// console.log(url);

//Añadir y eliminar estilos
//style

// let error = document.querySelector('body > div.error');
// error.style.backgroundColor = "#B4001D";
// error.style.backgroundColor = "#000000";

//Añadir y eliminar clases de css

// let error = document.querySelector('body > div.error');
// error.classList.add("paco");
// console.log(error.classList);
// error.classList.remove("error");
// console.log(error.classList);

// let paras = document.getElementsByTagName('p');
// let hijo = paras[2];
// console.log(hijo);
// let padre = hijo.parentNode;
// console.log(padre);
// let primerHermano = padre.firstElementChild;
// console.log(primerHermano);
// let segundoHermano = hijo.nextElementSibling;
// console.log(segundoHermano);

//Eventos
//1. Capturar el elemento que queremos usar
const par = document.querySelector('p');
//2. Se asigna un evento a la variable (addEventListener)
par.addEventListener('click', (e) => {
    // escribeLog();
    console.log(e.target);
    console.log(e.target.innerText);
    console.log(e.target.innerText = "skill issue");
});
// par.addEventListener('mouseover', () => {
//     par.style.backgroundColor = "#B4001D";
// });

function escribeLog(){
    par.style.backgroundColor = "lightblue";
    console.log("Has pulsado aqui");
}

//keylogger improvisado
document.addEventListener('keydown', (e) => {
    console.log("Tecla pulsada: " + e.key);
});