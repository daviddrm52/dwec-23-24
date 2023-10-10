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
parrafo.innerHTML = fecha;

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
//console.log(alpha);
//console.log(alpha[alpha.length-1]);

// DELETE
let delta = [1,2,3];
document.getElementById("array").innerHTML = delta;
//console.log(delta);
delete delta[2];
//console.log(delta);

let i = 2;
if (delta[i]){
    //console.log(delta[i]);
} else {
    //console.log("Slot vacio");
}

// Iterando arrays
let echo = [..."The fungus is among us"];
let aux = "";

// for(let letra of echo){
//     aux += letra;
// }

// //console.log(aux);

// aux = "";
// let suma = 0;
// for(let [index, letra] of echo.entries()){
//     //suma += index;
//     //aux += letra;
//     if (index % 2 === 0) aux += letra;
// }
//console.log(aux);
//console.log("Suma: "+suma);

let mayusculas = "";

// echo.forEach(letra => {
//     if(index % 2 === 0){
//         mayusculas += letra.toUpperCase();
//     } else{
//         mayusculas += letra;
//     }
//     index++;
// });

for(let [index, letra] of echo.entries()){
    if (index % 2 === 0) mayusculas += letra.toUpperCase();
}

let letra = "";
let vocales = "";
for (let i = 0; i < echo.length; i++){
    letra = echo[i];
    if(/[smgaeiou]/.test(letra)){
        vocales += letra;
    }
}

//console.log(vocales);

//console.log(mayusculas);

// Arrays multidimensionales

let tablas = new Array(10);

for (let i = 0; i < tablas.length; i++){
    tablas[i] = new Array(11); //Cada fila va a tener 5 columnas
}

for (let fila = 0; fila < tablas.length; fila++){
    let miArrayElemento = tablas[fila];
    for (let col = 0; col < tablas[fila].length; col++){
        if (col % 2 === 0){
            miArrayElemento[col] = fila * col;
        }
    }
    //document.getElementById("tablas").innerHTML = "Tabla del "+fila+ ": "+tablas[fila]+" <br> ";
}
document.getElementById("multi1").innerHTML = tablas[1];
document.getElementById("multi2").innerHTML = tablas[2];
document.getElementById("multi3").innerHTML = tablas[3];
document.getElementById("multi4").innerHTML = tablas[4];
document.getElementById("multi5").innerHTML = tablas[5];
document.getElementById("multi6").innerHTML = tablas[6];
document.getElementById("multi7").innerHTML = tablas[7];
document.getElementById("multi8").innerHTML = tablas[8];
document.getElementById("multi9").innerHTML = tablas[9];