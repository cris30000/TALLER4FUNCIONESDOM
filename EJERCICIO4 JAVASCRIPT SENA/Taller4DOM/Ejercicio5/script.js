// Obtener el botón
const boton = document.getElementById("crear");
boton.style.backgroundColor = "green";

// Función que crea el div
function crearDiv() {
    const nuevoDiv = document.createElement("div");

    nuevoDiv.textContent = "Hola mundo";

    nuevoDiv.style.backgroundColor = "orange";
    nuevoDiv.style.color = "white";
    nuevoDiv.style.textAlign = "center";
    nuevoDiv.style.padding = "20px";
    nuevoDiv.style.marginTop = "10px";

    document.body.appendChild(nuevoDiv);
}

// Evento que llama la función
boton.addEventListener("click", crearDiv);