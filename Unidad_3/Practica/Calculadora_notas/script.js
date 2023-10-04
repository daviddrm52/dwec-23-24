function calculadora() {
    //Variables del nombre y notas
    let nombreEstudiante = "David";
    let notaExamen1 = 8.50;
    let notaExamen2 = 9.20;
    let notaProyecto = 7.80;
    //Variable para la nota final
    let notaFinal = ((notaExamen1 * 0.20) + (notaExamen2 * 0.20) + (notaProyecto * 0.60));
    //Impresion de datos por consola
    console.log("Calculador de notas para el modulo de DWEC");
    console.log("Nombre del estudiante: "+nombreEstudiante);
    console.log("Nota del primer examen: "+notaExamen1);
    console.log("Nota del segundo examen: "+notaExamen2);
    console.log("Nota del proyecto: "+notaProyecto);
    console.log("Nota final: "+notaFinal);

    //Estructura if para comprobar si ha aprobado o no
    if (notaFinal >= 7){
        console.log("¡Felicidades, "+nombreEstudiante+"! ¡Ha aprobado el modulo!");
    } else if (notaFinal < 7){
        console.log("Necesita mejor su nota para poder aprobar el modulo.");
    } else {
        console.log("No se ha podido calcular si aprueba o no");
    }
}

//Llamada a la funcion
calculadora();