//Array con los nombres de los planetas
let nombres = ["Mercurio", "Venus", "Tierra", "Marte", "Jupiter", "Saturno", "Urano", "Neptuno"];
//Array con la distancias de los planetas (en kilometros)
let distancias = [58000000, 108000000, 150000000, 228000000, 750000000, 1418000000, 3000000000, 4500000000];
//Array con la masa de los planetas (basado en la masa de la tierra)
let masas = [0.06, 0.82, 1.00, 0.11, 318.0, 95.0, 14.6, 17.2];
//Array con la fecha de descubrimiento (te odio galileo)
let descubrimiento = ["265 AC", "1610", "Not Available", "1610", "1610", "1610", "1781-03-13", "1846-09-23"];
//Array con la clase Date(), ya que los planetas fueron descubiertos antes de que funcione el metodo Date()
let fechaActual = [Date(), Date(), Date(), Date(), Date(), Date(), Date(), Date()];

//Clase Planeta que contiene un constructor y una funcion que nos mostrará la información
class Planeta {
    constructor(nombres, distancias, masas, descubrimiento, fechaActual){
        this.nombres = nombres;
        this.distancias = distancias;
        this.masas = masas;
        this.descubrimiento = descubrimiento;
        this.fechaActual = fechaActual;
    };
    //Funcion que servira de plantilla para los planetas
    informacionPlaneta() {
        console.log(`Nombre del planeta: ${this.nombres}`);
        console.log(`Distancia con el sol en Km: ${this.distancias}`);
        console.log(`Masa del planeta en comparación con la tierra: ${this.masas}`);
        console.log(`Fecha de descubrimiento: ${this.descubrimiento}`);
        console.log(`Fecha de generación de esta clase: ${this.fechaActual}`);
    };
};

//Funcion para mostrar la informacion de los planetas
function muestraPlanetas(){
    for (let i = 0; i < nombres.length; i++){
        const planeta = new Planeta(nombres[i], distancias[i], masas[i], descubrimiento[i], fechaActual[i]);
        planeta.informacionPlaneta();
        console.log("\n");
    };
};

//Llamada a la funcion muestraPlanetas()
muestraPlanetas();