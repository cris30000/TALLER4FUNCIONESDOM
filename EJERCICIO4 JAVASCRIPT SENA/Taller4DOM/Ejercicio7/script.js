const texto = document.getElementById("texto");

// Variable para controlar el color
let esRojo = true;

// Función para  cambiar el color
function cambiarColor() {
    if (esRojo) {
        texto.style.color = "blue";
    } else {
        texto.style.color = "red";
    }

    // Cambiar  el estado e invierte el valor
    esRojo = !esRojo;
}

//  se ejecutar cada  segundo (1000 ms)
setInterval(cambiarColor, 1000);