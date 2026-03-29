// Variable general  que va acontrolar  qué imagen va al frente al hacer click
let zIndexActual = 3;

// Función que trae una imagen al frente
function traerAlFrente(elemento) {
    zIndexActual++;
    elemento.style.zIndex = zIndexActual;
}

// Esperar a que cargue la página
document.addEventListener("DOMContentLoaded", () => {

    const imagenes = document.querySelectorAll(".animal");

    imagenes.forEach(img => {
        img.addEventListener("click", () => {
            traerAlFrente(img);
        });
    });

});