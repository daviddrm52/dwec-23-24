function esUnaMetropolis(){
    //valor que dictamina si es metropolis o no
    let esMetropolis;    
    //valores que se tendran en cuenta para ver si es una metropolis o no
    let esCapital = true;
    let numeroCiudadanos = 100001;
    let impuestoPorCiudadano = 200.00;
    let rentaMinimaCiudad = 720000000;
    //renta media de la ciudad
    let rentaMediaCiudad = numeroCiudadanos * (impuestoPorCiudadano * 12);

    //Visualización de los datos antes del calculo
    console.log("Es capital: "+esCapital);
    console.log("Numero de ciudadanos: "+numeroCiudadanos+" censados.");
    console.log("Impuesto que paga cada ciudadano: "+impuestoPorCiudadano+"€.");
    console.log("Renta media de la ciudad: "+rentaMediaCiudad+"€.");

    //calculo de si se cumplen los requisitos para metropolis
    if ((esCapital == true && numeroCiudadanos > 100000) || (numeroCiudadanos > 200000 && rentaMediaCiudad >= rentaMinimaCiudad)){ //en caso de ser capital
        esMetropolis = true;
    } else { //si no cumple ninguno de los requisitos
        esMetropolis = false;
    }
    console.log("Es una Metropolis? "+ esMetropolis);
}

esUnaMetropolis();