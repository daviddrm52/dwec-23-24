let tablas = new Array(10);

for (let i = 0; i < tablas.length; i++){
    tablas[i] = new Array(11); //Cada fila va a tener 5 columnas
}

for (let fila = 0; fila < tablas.length; fila++){
    let miArrayElemento = tablas[fila];
    for (let col = 0; col < tablas[fila].length; col++){
        //if (col % 2 === 0){
            miArrayElemento[col] = fila * col;
        //}
    }
    //document.getElementById("tablas").innerHTML = "Tabla del "+fila+ ": "+tablas[fila]+" <br> ";
}
document.getElementById("multi1").innerHTML = tablas[1];
document.getElementById("multi2").innerHTML = tablas[2];
document.getElementById("multi3").innerHTML = tablas[3];
document.getElementById("multi4").innerHTML = tablas[4];
document.getElementById("multi5").innerHTML = tablas[5];
document.getElementById("multi6").innerHTML = tablas[6];
document.getElementById("multi7").innerHTML = tablas[7];
document.getElementById("multi8").innerHTML = tablas[8];
document.getElementById("multi9").innerHTML = tablas[9];