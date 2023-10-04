function conversion() {
    //Variable para las temperaturas en 2010 en celsius
    let junio2010 = 25.8;
    let julio2010 = 28.6;
    let agosto2010 = 30.1;
    //Variable para las temperaturas en 2015 en celsius
    let junio2015 = 26.5;
    let julio2015 = 29.3;
    let agosto2015 = 30.8;
    //Variable para las temperaturas en 2020 en celsius
    let junio2020 = 27.2;
    let julio2020 = 29.9;
    let agosto2020 = 31.5;
    //Variables para las medianas de temperatura en celsius
    let mediana2010 = (junio2010 + julio2010 + agosto2010) / 3;
    let mediana2015 = (junio2015 + julio2015 + agosto2015) / 3;
    let mediana2020 = (junio2020 + julio2020 + agosto2020) / 3;
    //Variables para comprobar si ha superado 30 grados celsius alguna media
    let superado2010;
    if (mediana2010 >= 30.0){
        superado2010 = true;
    } else {
        superado2010 = false
    }
    let superado2015;
    let superado2020;
    //conversion de celsius a fahrenheit
    let mediana2010Fahrenheit = (mediana2010 * 9/5) + 32;
    let mediana2015Fahrenheit = (mediana2015 * 9/5) + 32;
    let mediana2020Fahrenheit = (mediana2020 * 9/5) + 32;
    //conversion de celsius a kelvin
    let mediana2010Kelvin = mediana2010 + 273.15;
    let mediana2015Kelvin = mediana2015 + 273.15;
    let mediana2020Kelvin = mediana2020 + 273.15;
    //Impresión de resultados
    //Resultados de 2010
    console.log("Mediana de temperatura en 2010 en celsius: "+mediana2010);
    console.log("Mediana de temperatura en 2010 en fahrenheit: "+mediana2010Fahrenheit);
    console.log("Mediana de temperatura en 2010 en kelvin: "+mediana2010Kelvin);
    console.log("se han superado los 30 grados celsius de media en 2010: "+superado2010);
    //Resultados de 2015
    console.log("Mediana de temperatura en 2015 en celsius: "+mediana2015);
    console.log("Mediana de temperatura en 2015 en fahrenheit: "+mediana2015Fahrenheit);
    console.log("Mediana de temperatura en 2015 en kelvin: "+mediana2015Kelvin);
    console.log("se han superado los 30 grados celsius de media en 2015: ");
    //Resultados de 2020
    console.log("Mediana de temperatura en 2020 en celsius: "+mediana2020);
    console.log("Mediana de temperatura en 2020 en fahrenheit: "+mediana2020Fahrenheit);
    console.log("Mediana de temperatura en 2020 en kelvin: "+mediana2020Kelvin);
    console.log("se han superado los 30 grados celsius de media en 2020: ");
}

//Llamada a la funcion
conversion();