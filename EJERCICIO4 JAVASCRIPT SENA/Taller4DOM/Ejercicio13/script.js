// Seleccionamos la imagen de perro
const imagen = document.getElementById("miImagen");

// Guardamos las rutas de las imágenes
const imagenOriginal = "perro2.jpg";
const imagenHover = "perro4.jpg";

// Cambiamos a la segunda imagen cuando el cursor entra
imagen.addEventListener("mouseenter", () => {
    imagen.src = imagenHover;
});

// colocamos  la imagen original cuando el cursor sale
imagen.addEventListener("mouseleave", () => {
    imagen.src = imagenOriginal;
});