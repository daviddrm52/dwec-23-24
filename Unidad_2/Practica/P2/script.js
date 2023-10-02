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
let edad = -22;
let masEdad = 66;
let precio = 21.99;
let aprobados = Infinity;
let suspendidos = -Infinity;

//console.log(aprobados - aprobados);
//console.log(typeof(precio));
//console.log(edad + masEdad);
//let años = "26"; console.log(typeof(edad)); console.log(typeof(años));

//null
let valor = null;

console.log(typeof valor);

//undefined
let dingus;

console.log(typeof dingus);

//NaN
let algo = "algo" / 2;

console.log(algo);

//typeof, delete
let nose = 460;
let algoMas = "duro";

console.log(typeof nose);
console.log(typeof algoMas);

let persona = {
    nombre: "Paco",
    edad: 59
}

console.log(persona.edad);
delete persona.edad;
console.log(persona.edad);

//booleanos
let vueling = true;
let easyjet = false;//falsy

//valores declarados como false: null, string vacio, undefined, 0, NaN

console.log(vueling, easyjet);

let cositas = "";

if(cositas){
    console.log("Hola");
} else {
    console.log("Adios");
}

//operadores aritmeticos
/* -> operaciones matematicas
 * + = a + b
 * - = a - b
 * * = a * b
 * / = a / b
 * % = a % b (modulo)
 * 
 * ++ incremento a++, ++a <- para el cgl
 * -- decremento a--, --a <- para el cgl
 * += suma y asigna a+=b => a = a + b
 * -= resta y asigna a-=b => a = a - b
 * *= multiplica y asigna a*=b => a = a * b
 * /= divide y asigna a/=b => a = a / b
 * %= modula y asigna a%=b => a = a % b
 * - cambio de signo a = 5, b = -a, b = -5
 * 
 */

//funcion futura

function funcion(){
    let a = 4;
    let b = 2;
    let c = a/=b;
    console.log(c);
}

funcion();