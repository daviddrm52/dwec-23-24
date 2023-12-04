// Asincronia y JSON - Unidad 6

const obtenerTODOS = (miCallback, source) => {
    const request = new XMLHttpRequest();

    request.addEventListener('readystatechange', (event) => {
        if(request.readyState === 4 && request.status === 200){
            const respuesta = JSON.parse(request.responseText)
            miCallback(undefined, respuesta);
        } else if (request.readyState === 4){
            miCallback("No se han podido obtener los datos", undefined);
        };
    });

    //open
    //p1: tipo de solicitud
    //p2: a quien se realiza la solicitud
    request.open('GET', source);

    //send
    request.send();
};

console.log("1");
console.log("2");

//Llamada a la funcion
obtenerTODOS((error, datos) => {
    console.log("callback 1 iniciado");
    if(error){
        console.log(error);
    } else {
        console.log(datos);
    };
    //Llamada a esta funcion cuando acabe el primer hilo
    obtenerTODOS((error, datos) => {
        console.log("callback 2 iniciado");
        if(error){
            console.log(error);
        } else {
            console.log(datos);
        };
    }, "./todos/tareas2.json");
}, "./todos/tareas.json");

console.log("3");
console.log("4");