//Kaprekar versión daviddrm52

//Numero inicial, con el que jugamos
let numeroInicial = 101;
// Nota mental -> El uso de de menos de 1000, hace que el programa muera, requiere solución
//Metodo para poner el numero inicial, dentro del array ascendente y descendente
let funcion = num => Number(num);
let numeroAscendente = Array.from(String(numeroInicial), funcion);
let numeroDescendente = Array.from(String(numeroInicial), funcion);
//Variable que almcenara el resultado
let resultado;
//Comprobación de si el numero es de menos de 1000 (si es menos de 100, no funciona)
do {
    numeroAscendente.unshift(0);
} while (numeroAscendente.length > 4);
do {
    numeroDescendente.unshift(0);
} while (numeroDescendente.length > 4);

//Bucle que actuara hasta encontrar el numero kaprekar
while (resultado !== 6174) {
    //Ordenacion del numero ascendente
    numeroAscendente.sort().reverse();
    //Ordenacion del numero descendente
    numeroDescendente.sort();
    //Conversión a string para que puedan calcularse los numeros
    const numeroDescendenteString = numeroAscendente.join("");
    const numeroAscendenteString = numeroDescendente.join("");
    console.log(numeroDescendenteString + " " + numeroAscendenteString);
    let resultado = numeroDescendenteString - numeroAscendenteString;
    //Conversión a array de nuevo para repetir el proceso hasta encontrar el 6174
    numeroAscendente = Array.from(String(resultado), funcion);
    numeroDescendente = Array.from(String(resultado), funcion);
    console.log(resultado);
    //Condicion de si encuentra el numero, o tiene un numero invalido
    if(resultado === 6174){
        console.log("Numero kaprekar encontrado: "+resultado);
        break;
    } else if(resultado === 0){
        console.log("Numero invalido: "+resultado);
        break;
    } else {
        continue;
    }
};