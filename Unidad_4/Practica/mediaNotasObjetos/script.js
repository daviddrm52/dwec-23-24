let estudiante = {
    id: 2,
    nombre: "Evelynn",
    diHola: function(){
        return "Hola";
    },
    notas: [7, 6, 4],
    mediaNotas: function(){
        return (this.notas[0]+this.notas[1]+this.notas[2]) / 3;
    }
}

console.log(estudiante);
console.log("Nota media: "+estudiante.mediaNotas());