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