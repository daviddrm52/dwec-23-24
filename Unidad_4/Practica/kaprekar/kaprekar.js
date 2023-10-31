//Kaprekar versión de Joan

//Constante que almacena el numero kaprekar
const numeroKaprekar = 6174;
//Numero extraido del usuario
let numero;
//Pasos realizados
let pasos = 0;
//Se le pide al usuario que introduzca el numero y lo capturamos como una cadena (string para los amigos).
const promptText = "Escribe cualquier numero de 4 digitos que este formado por almenos 2 digitos diferentes, incluido el cero: ";
//Lanzamos la ventana emergente
// numero = prompt(promptText);
numero = "1234";

if(!validacionNumero(numero)){
    console.log("El numero introducido no es valido");
} else {
    while(numero != numeroKaprekar){
        //LLamamos a la funcion principal
        numero = kaprekar(numero);
        //Aumentamos los pasos
        pasos++;
        //Evitamos bucles infinitos
        if (pasos > 7){
            console.log("Numero de pasos superado, i don't like this...");
            break;
        };
        //Si el numero obtenido es el de kaprekar, informamos de los pasos realizados.
        if (numero == numeroKaprekar){
            console.log("Pasos realizados: "+pasos);
        }

    }
}

// FUNCIONES ->

/*
    Función que realiza las operaciones necesarias para obtener el numero de kaprekar
    pasando como parametro el numero a tratar.
    Esta funcion devuelve el numero obtenido.
 */
function kaprekar(numero) {
    //Creamos un array para poder tratar el numero de digito a digito
    let arrayNumero = new Array();
    //Variables para guardar los numeros a restar
    let mayor, menor;
    //Añadimos el numero al array
    for(let i = 0; i < numero.length; i++){
        arrayNumero[i] = numero[i];
    }
    //Ordenamos el array con sort que quedara de menor a mayor
    arrayNumero.sort();
    //Guardar en la variable "menor" el contenido del array "unido"
    menor = uneDigitos(arrayNumero);
    //Invertimos el array, y por tanto al numero
    arrayNumero = inversionNumeros(arrayNumero);
    //Guardamos en la variable "mayor" el contenido del array
    mayor = uneDigitos(arrayNumero);
    //Realizamos la resta
    numero = mayor - menor;
    console.log(mayor+" - "+menor+" = "+numero);
    return formateaNumero(numero.toString(), true);
}
/*
    Devuelve una cadena formada con los elementos del array pasado por parametro,
    tomados como caracteres desde el de menor indice hasta el ultimo.
 */
function uneDigitos(arrayNumero){
    let cadena = "";
    for(let i = 0; i < arrayNumero.length; i++){
        cadena += arrayNumero[i];
    }
    return cadena;
}
/*
    Devuelve un array con los elementos cambiados simetricamente respecto al array por parametro.
*/
function inversionNumeros(arrayNumero){
    let arrayAux = new Array(arrayNumero);
    for(let j = 0; j < arrayNumero.length; j++){
        arrayAux[(arrayNumero.length - 1) - j] = arrayNumero[j];
    }
    return arrayAux;
}
/*

 */
function formateaNumero(numero, esIzquierda){
    if(esIzquierda){
        if(numero.length == 3){
            numero = "0" + numero;
        } else if(numero.length == 2){
            numero = "00" + numero;
        } else if(numero.length == 1){
            numero = "000" + numero;
        }
     } else {
        if(numero.length == 3) {
            numero = "0" + numero;
        } else if(numero.length == 2){
            numero = "00" + numero;
        } else if(numero.length == 1){
            numero = "000" + numero;
        }
        return numero;
    }
}
/*
    Función que valida un numero, comprobando que:
    - Sea un numero.
    - Que no tenga más de 4 digitos.
    - Tenga 2 digitos diferente.
    - Un digito no se repita más de 2 veces.
*/
function validacionNumero(numero){
    //Que sea un numero
    if(numero == null || isNaN(numero)){
        return false;
    }
    //Que no tenga más de 4 digitos
    if(numero.length < 4){
        return false;
    }
    //Segunda comprobación si tiene más de 4 digitos
    // if(+numero > 9999){
    //     return false;
    // }
    //Que tenga 2 digitos diferentes
    // const numeros = Array.from(String(numero), Number);
    // const numeros = numero.split("");
    // const numeros = [...numero];
    const setNumeros = new Set(numero);
    console.log(setNumeros);
    if(setNumeros.size < 2){
        return false;
    }
    return true;
}