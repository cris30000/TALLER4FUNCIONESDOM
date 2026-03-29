// Elemntos
const texto = document.getElementById("texto");
const boton = document.getElementById("cambiar");

// Función que cambia el estilo y el color y locentra
function cambiarEstilo() {
    texto.style.color = "blue";
    texto.style.textAlign = "center";
}

// cre el Evento y llama la funcion
boton.addEventListener("click", cambiarEstilo);