let imagen = document.querySelector("img")
console.log(imagen);

document.addEventListener("click", (e) => {
    let objetoCoordenadas = obtenCoordenadas(e);
    console.log(objetoCoordenadas.x);
    console.log(objetoCoordenadas.y);
});

function obtenCoordenadas (evento) {
    return {
        x: evento.clientX,
        y: evento.clientY,
    }
}