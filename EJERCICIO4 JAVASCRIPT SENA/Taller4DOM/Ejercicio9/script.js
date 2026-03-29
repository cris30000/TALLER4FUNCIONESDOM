const div = document.getElementById("cuadrado");

// Guardar color inicial en este casoi es orange
const colorInicial = "orange";

// Función para generar color aleatorio
function colorAleatorio() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    return `rgb(${r}, ${g}, ${b})`;
}

// Evento:  cuando muevo el mouse sobre el div cambia color aleatoriamentes
div.addEventListener("mouseover", () => {
    div.style.backgroundColor = colorAleatorio();
});

// Evento: si doy doble click me trae el color inicial que es orange  
div.addEventListener("dblclick", () => {
    div.style.backgroundColor = colorInicial;
});