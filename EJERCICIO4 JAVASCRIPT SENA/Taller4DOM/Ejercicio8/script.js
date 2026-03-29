// Obtener elementos
const boton = document.getElementById("mostrar");
const imagen = document.getElementById("imagen");

// Lista de imágenes de perros
const imagenes = [
    "img/perro4.jpg",
    "img/perro5.jpg",
    "img/perro2.jpg"
];

// Función para mostrar imagen aleatoria utilizando randon para aleatoria
function mostrarImagen() {
    const indice = Math.floor(Math.random() * imagenes.length);
    imagen.src = imagenes[indice];
}

// Evento
boton.addEventListener("click", mostrarImagen);