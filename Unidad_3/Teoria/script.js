console.log("Teoria del tema 3");

/*
Estructuras de control

Se utilizan para controlar el flujo de un programa
*/

/*
    if ->
    Se utiliza para ejecutar un bloque de codigo si se cumple una condicion
*/

//Ejemplo if, else if y else
// let edad = 15;
// let esMayorDeEdad = (edad >= 18);

// // ? ->
// let a = 23;
// let b = 20;

// // let resultado = esMayorDeEdad ? "El usuario es mayor de edad": "El usuario es menor de edad";
// let resultado = (a > b) ? (a - b) : (b - a);
// console.log(resultado);

// if(esMayorDeEdad){
//     console.log("El usuario es mayor de edad");
// } else if(edad > 12){
//     console.log("El usuario es joven");
// } else if(edad > 5){
//     console.log("El usuario esta en primaria");
// } else {
//     console.log("El usuario es demasiado pequeño para estar en internet");
// }

/* 
    Switch - case ->
    Cuando se quiera hacer una estructura condicional segun el valor que tenga
    una variable o expresión.
*/

// let nombre = "A320ceo";
// let edad;

// switch (nombre) {
//     case "A320ceo":
//         edad = 1987;
//         break;
//     case "A319ceo":
//         edad = 1996;
//         break;
//     case "A321ceo":
//         edad = 1991;
//         break;
//     case "A320neo":
//         edad = 2016;
//         break;
//     case "A321neo":
//         edad = 2018;
//         break;
//     default:
//         edad = -1;
//         break;
// }

// console.log(nombre, edad);

/*
    Iteraciones

    Se utilizan para repetir una porcion de codigo varias veces.

    while ->
    Repetir un bloque mientras se cumpla una condicion.
*/

// let contador = 0;

// while (contador < 5){
//     contador++;
//     console.log(contador);
// }

/*
    do-while ->
    Repetir un bloque de codigo al menos una vez
*/

// let contador = 20;

// do {
//     console.log(contador);
//     contador++;
// } while (contador > 10);

/*
    for ->
    Repetir un bloque de codigo un numero especifico de veces

    continue ->
    Saltar a la siguiente iteración
*/

// for(let i = 0; i <= 5; i++){
//     if(i == 2){
//         continue; //Salta a la siguiente iteración cuando sea 2
//     }
//     console.log(i);
// }

// Fechas (manejo del tiempo)

let parrafo = document.getElementById("fecha");

// ejemplos de Date()
// new Date();
// new Date(milisegundos);
// new Date(fechaString);
// new Date(año, mes, dia, hora, minutos, segundos, milisegundos);

let fecha = new Date();
parrafo.innerHTML = fecha.getUTCDate();

// Arrays (o arreglos)

// Definir arrays
let vacio = []; //Sin elementos
let primos = [2, 3, 5, 7, 11] //Array con 5 valores numericos
let miscelanea = [1.1, true, "cadena", ]; //Varios tipos y coma

// Los valores de los elementos no tienen que ser constantes
let n = 1024;
let tabla = [n, n + 1, n + 2, n + 3];

let contador = [,,,,,];

// Operador SPREAD
let a = [1, 2, 3, 4, 5];
let b = [0, ...a, 6];

let original = [1, 2, 3];
let copia = [...original];

let digitos = [..."0123456789ABCDEF"];

// Constructor de Array
let alpha = new Array(1,2,4,2893,9284,103892901,"amogus", true);
let bravo = Array.of(10);

// PUSH
alpha.push(56, 922, 119);
console.log(alpha[alpha.length-1]);