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