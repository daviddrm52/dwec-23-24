//Array con la información de Mercurio
let mercurio = [58000000, 0.06, "265 AC", Date()];
//Array con la información de Venus
let venus = [108000000, 0.82, "1610", Date()];
//Array con la infromación de La Tierra
let tierra = [150000000, 1.00, "N/A", Date()];
//Array con la información de Marte
let marte = [228000000, 0.11, "1610", Date()];
//Array con la información de Jupiter
let jupiter = [750000000, 318.0, "1610", Date()];
//Array con la información de Saturno
let saturno = [1418000000, 95.0, "1610", Date()];
//Array con la información de Urano
let urano = [3000000000, 14.6, "1781-03-13", Date()];
//Array con la información de Neptuno
let neptuno = [4500000000, 17.2, "1846-09-23", Date()];

//Array con los planetas
let planetas = [mercurio, venus, tierra, marte, jupiter, saturno, urano, neptuno];
console.log(planetas[0][0]);

let planeta;

for(let i = 0; i < planetas.length; i++){
    planeta = {
        'distancia-sol': planetas[i][0],
        masa: planetas[i][1],
        'fecha-descubrimiento': planetas[i][2],
        fecha: planetas[i][3]
    };
    console.log(planeta);
}

console.log(planeta);