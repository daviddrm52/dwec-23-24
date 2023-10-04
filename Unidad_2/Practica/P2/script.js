//Funcion saluda (comentario de una linea)

/*
Funcion saluda (comentario de multiples lineas)

function saluda(){
    alert("kys");
    console.log("kys");
}
*/

//var, let, const

/*
const pi =3.1415692; //necesita valor para inicializarse y no se puede cambiar

function cosas(){
    var nombre = "Kai'Sa";
    let edad = 21;

    console.log(nombre);
    console.log(edad);
}

cosas();

let uno = 1; let dos = 2;

console.log(uno + dos);
*/

//string
/*
let nombre = "David";
let apellido = "Rueda";
let nombreCompleto = "David Rueda. alumno de DWEC";
let comillas = "Texto \"entrecomillado\""

console.log(comillas);
*/

//numeros
// let edad = -22;
// let masEdad = 66;
// let precio = 21.99;
// let aprobados = Infinity;
// let suspendidos = -Infinity;

//console.log(aprobados - aprobados);
//console.log(typeof(precio));
//console.log(edad + masEdad);
//let años = "26"; console.log(typeof(edad)); console.log(typeof(años));

//null
// let valor = null;

// console.log(typeof valor);

//undefined
// let dingus;

// console.log(typeof dingus);

//NaN
// let algo = "algo" / 2;

// console.log(algo);

//typeof, delete
// let nose = 460;
// let algoMas = "duro";

// console.log(typeof nose);
// console.log(typeof algoMas);

// let persona = {
//     nombre: "Paco",
//     edad: 59
// }

// console.log(persona.edad);
// delete persona.edad;
// console.log(persona.edad);

//booleanos
// let vueling = true;
// let easyjet = false;//falsy

//valores declarados como false: null, string vacio, undefined, 0, NaN

// console.log(vueling, easyjet);

// let cositas = "";

// if(cositas){
//     console.log("Hola");
// } else {
//     console.log("Adios");
// }

//operadores aritmeticos
/* -> operaciones matematicas
 * + = a + b
 * - = a - b
 * * = a * b
 * / = a / b
 * % = a % b (modulo)
 * 
 * ++ incremento a++, ++a <- para el clg
 * -- decremento a--, --a <- para el clg
 * += suma y asigna a+=b => a = a + b
 * -= resta y asigna a-=b => a = a - b
 * *= multiplica y asigna a*=b => a = a * b
 * /= divide y asigna a/=b => a = a / b
 * %= modula y asigna a%=b => a = a % b
 * 
 * - cambio de signo a = 5, b = -a, b = -5
 */

//Conversión de tipos

//let a = "5";
//let b = "6";
//let c = "4.22";

//let A = +a;
//let B = +b;
//let C = +c;

//console.log(typeof a, typeof b);
//console.log(+a + +b);

//Operadores de comparación
// -> Comparar dos valores y devolver un resultado booleano

// > mayor que
// console.log(5 > 4);
// < menor que
// console.log(5 < 4);
// >= mayor o igual que
// console.log(3 >= 3);
// <= menor o igual que
// console.log(5 <= 4);
// == igual que (compara valores)(un solo = es asignar un valor!)
// console.log(5 == 5);
// != distinto que
// console.log(5 != 5);
// === igual en valor y tipo que
// console.log(5 === "5");
// !== distinto en valor y tipo
// console.log(5 !== "5");

//Operadores booleanos
// -> Permiten comparar expresiones booleanas con las que se contruyen
//    condiciones que se pueden aplicar en funciones, bucles, etc.

// && AND Solo devuelve true cuando ambos operadores lo son.

/*
 * true && true -> true
 * true && false -> false
 * false && true -> false
 * false && false -> false
 */ 

// || OR Devuelve true si cualquiera de los operadores sean true

/*
 * true || true -> true
 * true || false -> true
 * false || true -> true
 * false || false -> false
 */

// Ejemplo
// let a = true;
// let b = true;
// console.log(a & b);

// let cadena = "";
// if (cadena != null && cadena.length > 0){
//     console.log(cadena);
// } else {
//     console.log("la cadena esta vacia");
// }

// ! NOT Devuelve lo contrario al operando.
//console.log(!true);

/* Ejercicio
 *
 * Se nos facilitan 3 variables que contienen información sobre
 * sobre una ciudad.
 * 
 * let esCapital; //es booleana
 * let numeroCiudadanos; //es entero
 * let impuestoPorCiudadano; //es float
 * 
 * - esCapital: sera cierta si y solo si la ciudad es capital
 * - numeroCiudadanos: es el numero de ciudadanos de esta ciudad
 * - impuestoPorCiudadano: es el impuesto medio mensual que paga un ciudadano de esa ciudad
 * 
 * Para nosotros, una Metropolis será una ciudad si bien es una capital
 * con más de 100.000 habitantes o bien es una ciudad con más de 200.000
 * habitantes y una renta media de 720 millones de € al año.
 * 
 * Dad una expresión booleana con las 3 variables de tal manera que sea
 * cierta si y solo si la ciudad es una Metropolis.
 */

// function esUnaMetropolis(){
//     //valor que dictamina si es metropolis o no
//     let esMetropolis;    
//     //valores que se tendran en cuenta para ver si es una metropolis o no
//     let esCapital = true;
//     let numeroCiudadanos = 100001;
//     let impuestoPorCiudadano = 200.00;
//     let rentaMinimaCiudad = 720000000;
//     //renta media de la ciudad
//     let rentaMediaCiudad = numeroCiudadanos * (impuestoPorCiudadano * 12);

//     //Visualización de los datos antes del calculo
//     console.log("Es capital: "+esCapital);
//     console.log("Numero de ciudadanos: "+numeroCiudadanos+" censados.");
//     console.log("Impuesto que paga cada ciudadano: "+impuestoPorCiudadano+"€.");
//     console.log("Renta media de la ciudad: "+rentaMediaCiudad+"€.");

//     //calculo de si se cumplen los requisitos para metropolis
//     if ((esCapital == true && numeroCiudadanos > 100000) || (numeroCiudadanos > 200000 && rentaMediaCiudad >= rentaMinimaCiudad)){ //en caso de ser capital
//         esMetropolis = true;
//     } else { //si no cumple ninguno de los requisitos
//         esMetropolis = false;
//     }
//     console.log("Es una Metropolis? "+ esMetropolis);
// }

// esUnaMetropolis();