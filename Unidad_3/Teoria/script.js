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

// let parrafo = document.getElementById("fecha");

// ejemplos de Date()
// new Date();
// new Date(milisegundos);
// new Date(fechaString);
// new Date(año, mes, dia, hora, minutos, segundos, milisegundos);

// let fecha = new Date();
// parrafo.innerHTML = fecha;

// Arrays (o arreglos)

// Definir arrays
// let vacio = []; //Sin elementos
// let primos = [2, 3, 5, 7, 11] //Array con 5 valores numericos
// let miscelanea = [1.1, true, "cadena", ]; //Varios tipos y coma

// Los valores de los elementos no tienen que ser constantes
// let n = 1024;
// let tabla = [n, n + 1, n + 2, n + 3];

// let contador = [,,,,,];

// Operador SPREAD
// let a = [1, 2, 3, 4, 5];
// let b = [0, ...a, 6];

// let original = [1, 2, 3];
// let copia = [...original];

// let digitos = [..."0123456789ABCDEF"];

// Constructor de Array
// let alpha = new Array(1,2,4,2893,9284,103892901,"amogus", true);
// let bravo = Array.of(10);

// PUSH
// alpha.push(56, 922, 119);
//console.log(alpha);
//console.log(alpha[alpha.length-1]);

// DELETE
// let delta = [1,2,3];
// document.getElementById("array").innerHTML = delta;
//console.log(delta);
// delete delta[2];
//console.log(delta);

// let i = 2;
// if (delta[i]){
//     //console.log(delta[i]);
// } else {
//     //console.log("Slot vacio");
// }

// Iterando arrays
// let echo = [..."The fungus is among us"];
// let aux = "";

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

// let mayusculas = "";

// echo.forEach(letra => {
//     if(index % 2 === 0){
//         mayusculas += letra.toUpperCase();
//     } else{
//         mayusculas += letra;
//     }
//     index++;
// });

// for(let [index, letra] of echo.entries()){
//     if (index % 2 === 0) mayusculas += letra.toUpperCase();
// }

// let letra = "";
// let vocales = "";
// for (let i = 0; i < echo.length; i++){
//     letra = echo[i];
//     if(/[smgaeiou]/.test(letra)){
//         vocales += letra;
//     }
// }

//console.log(vocales);

//console.log(mayusculas);

// Arrays multidimensionales

// let tablas = new Array(10);

// for (let i = 0; i < tablas.length; i++){
//     tablas[i] = new Array(11); //Cada fila va a tener 5 columnas
// }

// for (let fila = 0; fila < tablas.length; fila++){
//     let miArrayElemento = tablas[fila];
//     for (let col = 0; col < tablas[fila].length; col++){
//         if (col % 2 === 0){
//             miArrayElemento[col] = fila * col;
//         }
//     }
// }

// Metodos de arrays
// push() -> Añade un elemento o varios al final del array

/* */

// pop() -> Elimina el ultimo elemento del array y lo devuelve

// let kda = ['Ahri', 'Akali', 'Evelynn', 'Kai\'Sa', 'Seraphine'];
// console.log(kda);
// let eliminada = kda.pop();
// console.log(kda);
// console.log(eliminada); //Nos devuelve Seraphine

// shift() -> Elimina el primer elemento del array y lo devuelve

// let kda = ['Ahri', 'Akali', 'Evelynn', 'Kai\'Sa', 'Seraphine'];
// console.log(kda);
// let eliminada = kda.shift();
// console.log(kda);
// console.log(eliminada); //Nos devuelve Ahri

// unshift() -> Agrega uno o más elementos al principio

// let kda = ['Ahri', 'Akali', 'Evelynn', 'Kai\'Sa', 'Seraphine'];
// console.log(kda);
// kda.unshift('Syndra', 'Soraka');
// console.log(kda);

// concat() -> Combina 2 o más arrays y devuelve un nuevo array

// let kda = ['Ahri', 'Akali', 'Evelynn', 'Kai\'Sa', 'Seraphine'];
// let nuevas = ['Syndra', 'Soraka', 'Irelia'];
// let masAun = ['Riven', 'Leona', 'Diana'];
// let combi = kda.concat(nuevas);
// console.log(combi);
// console.log(combi.concat(masAun));

// slice() -> Devuelve una copia (superficial) de una porcion del array

// let kda = ['Ahri', 'Akali', 'Evelynn', 'Kai\'Sa', 'Seraphine'];
// let copiaKda = kda.slice(2, -1);
// console.log(copiaKda);

// splice() -> Cambia el contenido de un array eliminando, reemplazando o agregando elementos

// let kda = ['Ahri', 'Akali', 'Evelynn', 'Kai\'Sa', 'Seraphine'];
// let nuevas = ['Syndra', 'Soraka', 'Irelia'];
// let masAun = ['Riven', 'Leona', 'Diana'];

// kda.splice(1, 1, ...nuevas);
// console.log(kda);

// indexOf() -> Devuelve el primer indice en el que se encuentra un elemento dado
// devuelve -1 si no lo encuentra

// let kda = ['Ahri', 'Akali', 'Evelynn', 'Kai\'Sa', 'Seraphine'];
// let nuevas = ['Syndra', 'Soraka', 'Irelia'];
// let indice = kda.indexOf('Evelynn');
// let cadena = "Airbus A320-271N of Vueling Airlines";

// console.log(cadena.length);
// console.log(cadena.indexOf("A320"));
// console.log(indice);
// console.log(kda[indice]);

// join() -> Une todos los elementos de un array en una cadena
// (utilizando un separador especificado)

// let kda = ['Ahri', 'Akali', 'Evelynn', 'Kai\'Sa', 'Seraphine'];
// let cadena = kda.join(" | ");
// console.log(cadena);

// sort() -> Ordena los elementos de un array alfabeticamente si son
// cadenas y numericamente si son numeros

// let kda = ['Ahri', 'Akali', 'Evelynn', 'Kai\'Sa', 'Seraphine', 'Morgana', 'Kayle'];
// let nuevas = ['Syndra', 'Soraka', 'Irelia'];
// let combi = kda.concat(nuevas);
// let numeros = [23, 34, 193, 92, 10, 1, 34, 52, -192, -23];

// console.log(combi.sort()); //funciona bien con cadenas
// console.log(numeros.sort()); //no funciona bien con numeros

// Ordenar correctamente con sort => uso de parametros
// Se trata de una funcion:
// - Debe recibir 2 valores a comparar
// - Como resultado debe:
//      - Devolver un valor positivo(1) si el primer valor
//      es superior al segundo
//      - Devolver un valor negativo(-1) si el primer valor
//      es inferior al segundo
//      - Devolver un valor cero(0) si los dos valores son
//      iguales o equivalentes para la ordenacion.

// sort() en numeros

// let numeros = [23, 34, 193, 92, 10, 1, 34, 52, -192, -23];
// let numeritos = [10, 5, 8, 3, 1];

// console.log(numeros);
// console.log(numeritos);
// console.log(numeros.sort(function(a, b){
//     return a - b;
// }));
// console.log(numeritos.sort(function(a, b){
//     return a - b;
// }));
// console.log(numeritos.sort((a, b) => {
//     return a - b;
// }));

// sort() en cadenas

// let kda = ['Ahri', 'Akali', 'Syndra', 'Soraka', 'Irelia', 'Evelynn', 'Kai\'Sa', 'Seraphine', 'Ángel'];
// console.log(kda.sort((a, b) => {
//     return a.toLowerCase() > b.toLowerCase() ? 1 : 
//     a.toLowerCase() < b.toLowerCase() ? -1 : 0;
// }));

// console.log(kda.sort((a, b) => {
//     return a.localeCompare(b);
// }));