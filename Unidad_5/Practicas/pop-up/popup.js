//Recuperar los elementos del DOM que nos interesan
const boton = document.querySelector('button');
const envoltorio = document.querySelector('.envoltorio-popup');
const cerrar = document.querySelector('.cerrar-popup');

//Eventos
//Click sobre el boton para mostrar el pop-up
boton.addEventListener('click', () => {
    envoltorio.style.display = "block";
});

//Click sobre el boton para cerrar el pop-up
cerrar.addEventListener('click', () => {
    envoltorio.style.display = "none";
});

//Click sobre el envoltorio -> cerrar el pop-up
envoltorio.addEventListener('click', () => {
    envoltorio.style.display = "none";
});