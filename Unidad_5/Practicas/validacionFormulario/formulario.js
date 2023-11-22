/* Variables */
const formulario = document.getElementById('form');
const nombreUsuario = document.getElementById('nombreUsuario');
const email = document.getElementById('email');
const password = document.getElementById('password');
const confirmarPassword = document.getElementById('confirmarPassword');

/* Funciones */
// function esObligatorio(input){
//     if(input.value.trim() === ''){
//         muestraError(input, 'es obligatorio');
//     }
// };

function esObligatorio(inputArray) {
    inputArray.forEach((input) => {
        if(input.value.trim() === ''){
            muestraError(input, `${cogeNombreInput(input)} es obligatorio.`)
        } else {
            muestraCorrecto(input);
        };
    });
};

function cogeNombreInput(input){
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

function compruebaLongitud(input, min, max){
    if(input.value.length < min){
        muestraError(input, `${cogeNombreInput(input)} tiene que tener un minimo de ${min} caracteres.`);
    } else if (input.value.length > max) {
        muestraError(input, `${cogeNombreInput(input)} tiene un maximo de ${min} caracteres.`);
    } else {
        muestraCorrecto(input);
    }
}

function esEmailValido(input){
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(re.test(input.value.trim())){
        muestraCorrecto(input);
    } else {
        let mensaje = `${cogeNombreInput(input)} no tiene el formato correcto.`;
        muestraError(input, mensaje);
    }
}

function compruebaContraseñaSiSonIguales(input1, input2){
    if(input1.value !== input2.value){
        let mensaje = `${cogeNombreInput(input1)} no coincide con ${cogeNombreInput(input2)}.`;
        muestraError(input1, mensaje);
        muestraError(input2, mensaje);
    };
};

function muestraError(input, mensaje){
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const label = formControl.querySelector('label')
    const small = formControl.querySelector('small');
    small.innerText = mensaje;
};

function muestraCorrecto(input){
    const formControl = input.parentElement;
    formControl.className = 'form-control correcto';
}

/* Eventos */
formulario.addEventListener('submit', (e) => {
    e.preventDefault();
    esObligatorio([nombreUsuario, email, password, confirmarPassword]);
    //Comprueba la longitud
    compruebaLongitud(nombreUsuario, 3, 15);
    compruebaLongitud(password, 6, 25);
    //Comprueba si el correo es valido
    esEmailValido(email);
    //Comprueba si las contraseñas son iguales
    compruebaContraseñaSiSonIguales(password,confirmarPassword);
});