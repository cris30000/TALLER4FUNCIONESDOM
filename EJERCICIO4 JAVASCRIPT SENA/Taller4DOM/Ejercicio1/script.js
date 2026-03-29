// IMPLEMENTANDO FUNCIONES

function cambiarColor(color) {
    document.body.style.backgroundColor = color;
}

botonRojo.addEventListener("click", () => cambiarColor("red"));
botonAzul.addEventListener("click", () => cambiarColor("blue"));
botonVerde.addEventListener("click", () => cambiarColor("green"));