// Funciones

//Funcion 1
function testFuncion() {
    document.getElementById("funcion").innerHTML = "The fungus is amongus!";
}

//Las funciones se deben de llamar
testFuncion();

//Funcion 2
function multiplica(c) {
    let a = 10;
    let b = 20;
    return (a * b * c);
}
document.getElementById("funcion2").innerHTML = multiplica(3);

// Objetos 

/* Las claves de las propiedades de un objeto pueden ser
 * identificadores validos. Para las claves podemos omitir
 * las comillas salvo cuando se tengan que usar caracteres
 * que no son ASCII, espacios en blanco, etc.
 */

// let unCliente = {
//     nombre: "Peter",
//     apellido: "Griffin",
//     'direccion fiscal': "Sponner St Nº48",
//     pago: {
//         tipo: "Visa",
//         tarjeta: "1234 5678 9012 3456",
//         'fecha de caducidad': "mañana"
//     },
//     vencimiento: 30
// }
// console.log(unCliente);

//Acceder al objeto o modificarlo
// unCliente["vencimiento"] = 60;
//console.log(unCliente["pago"]["tipo"]);
// console.log(unCliente.apellido);

// console.log(unCliente['direccion fiscal']);

/* Un objeto puede tener de todo */

// Metodos como elementos

let estudiante = {
    id: 2,
    nombre: "Evelynn",
    diHola: function(){
        return "Hola";
    },
    notas: [7, 6, 4],
    mediaNotas: function(){
        return (estudiante.notas[0]+estudiante.notas[1]+estudiante.notas[2]) / 3;
    }
}

// console.log(estudiante);
// console.log("Nota media: "+estudiante.mediaNotas());

// Añadir atributos y metodos

// estudiante.nombre = "Kai\'Sa";
// estudiante.apellido = "La hija del Vacío";

// estudiante.diAdios = function() {
//     return "Adios";
// }

// console.log(estudiante);
// console.log(estudiante.apellido);
// console.log(estudiante.diAdios());

// Palabra clave "this"

let factura = {
    descripcion: "Factura de la vida",
    precio: 100.0,
    iva: 21.0,
    subTotal: function() {
        return this.precio;
    },
    total: function( ){
        return this.precio + (this.precio * this.iva) / 100;
    }
}

// console.log(factura);
// console.log(factura.total());

// Constructores

function Web() {
    this.url = "https://www.flightradar24.com/";
    this.nombre = "FlightRadar24";

    this.muestraInformacion = function() {
        return "URL: "+this.url+"\n"+"Web: "+this.nombre;
    }
}

// Uso de prototype
Web.prototype.visitas = 2;
Web.prototype.miFuncion = function() {
    return "Hola";
};

let unaWeb = new Web();
unaWeb.url = "https://www.jetphotos.com/";
unaWeb.nombre = "JetPhotos";


console.log(unaWeb.miFuncion());
// console.log(unaWeb.muestraInformacion());


function otraWeb() {
    this.url = "https://www.flightradar24.com/";
    this.nombre = "FlightRadar24";

    this.informacionDingus = function() {
        return "URL: "+this.url+"\n"+"Web: "+this.nombre;
    }
}

let dingusWeb = new otraWeb();
console.log(dingusWeb.informacionDingus());

// Ordenacion de Arrays de objetos

const ciudades = [
    {
        municipio: "Zaragoza",
        provincia: "Zaragoza"
    },
    {
        municipio: "Granada",
        provincia: "Granada",
    },
    {
        municipio: "Madrid",
        provincia: "Comunidad de Madrid",
    },
    {
        municipio: "Barcelona",
        provincia: "Barcelona",
    },
    {
        municipio: "Jaen",
        provincia: "Jaen",
    },
]

// console.log(ciudades);

//El return es bastante importante, no olvidarse de el!
// console.log(ciudades.sort((a, b) => {
//     return a.municipio.localeCompare(b.municipio);
// }));

// ES6

// const arrayES6 = ["A", "b", "C"];
// arrayES6.push("d");

// console.log(arrayES6);

//Desestructuración de ES6

//Arrays
// const numeros = [1, 2, 3, 4];

// const [a, b, c, d] = numeros;

// console.log(a);

//Objetos
// const persona = {
//     nombre: "Kai\'Sa",
//     edad: 21
// };

// const {nombre, edad} = persona;

// console.log(nombre);

//Asignacion de valores
// const nombre = "Kai'\Sa";
// const edad = 21;

// const persona =  {
//     nombre,
//     edad
// }

// console.log(persona);

//Plantillas de cadenas (template strings)
// //operador de interpolación ${}
// const nombre = "Kai\'Sa";
// const edad = 21;

// //El operador de interpolación necesita las comillas como acentos ``
// const mensaje = `Hola, mi nombre es ${nombre} y tengo ${edad} años.`;

// console.log(mensaje);

//Operador spread ...
// const numeros = [1, 2, 3];
// const nuevosNumeros = [...numeros, 4, 5];

// console.log(nuevosNumeros);

//Parametros por defectos de ES6
// function elVacio(nombre) {
//     console.log(`Hola, ${nombre}`);
// }

// elVacio("Kai\'Sa");

//Parametros rest (rest parameter)
// function sumar(...numeros){
//     let resultado = 0;
//     for (let numero of numeros) {
//         resultado += numero;
//     }
//     return resultado;
// }

// console.log(sumar(5,9,10,344,434,232,12321,2322,32,23,223,23));

//Funciones flecha () => {}
// function sumar(a, b){
//     return a + b;
// }

// const sumar = (...numeros) => {
//     let resultado = 0;
//     for (let numero of numeros) {
//         resultado += numero;
//     }
//     return resultado;
// };

// console.log(sumar(29,39,343));

// Metodos de arrays
//forEach() -> Ejecuta una funcion (nuestra) una vez por cada elemeneto del array

// const multiplica2 = (n) => {
//     return n * 2;
// };
// const numeros = [1,2,3,4,5];
// numeros.forEach((numero) => {
//     console.log(multiplica2(numero));
// });
// console.log(numeros);

//map() -> Crea un nuevo array con los resultados de aplicar una funcion a cada elemento del array.

// const numeros = [1,2,3,4,5];
// const doble = numeros.map((numero) => {
//     return numero * 2;
// });
// console.log(doble);

//filter() -> Crea un nuevo array con todos los elementos que cumplan una condicion determinada.

// const numeros = [1,2,3,4,5];
// const numerosPares = numeros.filter((numero) => {
//     return numero % 2 === 0;
// });
// console.log(numerosPares);

//reduce() -> Aplica una funcion a un acumulador y a cada elemento del array (de izquierda a derecha)
//para reducirlo a un unico valor

// const numeros = [1,2,3,4,5];
// const suma = numeros.reduce((acumulador, numero) => {
//     return acumulador + numero;
// }, 0);
// console.log(suma);

//find() -> Devuelve el primer elemento del array que cumpla una determinada condicion

// const numeros = [1,2,3,4,5];
// const numeroEncontrado = numeros.find((numero) => {
//     return numero < 3;
// });
// console.log(numeroEncontrado);

//findIndex() -> Devuelve el indice del primer elemento del array que cumple con una
//funcion de prueba o devolvera -1 si no encuentra nada

// const numeros = [1,2,3,4,5];
// const indiceEncontrado = numeros.findIndex((numero) => {
//     return numero < 3;
// });
// console.log(indiceEncontrado);

//some() -> Comprueba si al menos un elemento del array cumple una condicion determinada

// const numeros = [1,2,3,4,5];
// const tieneNumeroPar = numeros.some((numero) => {
//     return numero % 2 === 0;
// });
// console.log(tieneNumeroPar);

//every() -> Comprueba si TODOS los elementos cumplen una condicion determinada

// const numeros = [1,2,3,4,5];
// const todosNumeroPar = numeros.every((numero) => {
//     return numero % 2 === 0;
// });
// console.log(todosNumeroPar);