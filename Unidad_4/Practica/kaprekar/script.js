//Numero inicial, con el que jugamos
let numeroInicial = 2435;
// Nota mental -> El uso de de menos de 1000, hace que el programa muera.
// se requiere solución
//Metodo para poner el numero inicial, dentro del array ascendente y descendente
let funcion = num => Number(num);
let numeroAscendente = Array.from(String(numeroInicial), funcion);
let numeroDescendente = Array.from(String(numeroInicial), funcion);
let resultado;
const numeroKaprekar = 6174;

while (resultado !== numeroKaprekar) {
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
    if(resultado == 6174){
        break;
    } else if(resultado == 0){
        console.log("Numero invalido: "+resultado);
        break;
    } else {
        continue;
    }
};

//Habia que empezarlo desde el miercoles, duro
//Y funciona al menos en menos de 2 horas, durum
