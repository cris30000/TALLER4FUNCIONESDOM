// Obtener el elemento
const globo = document.getElementById("globo");

// Tamaño inicial  del globo 50 en pixels
let tamaño = 50;

// Tamaño máximo antes de explotar
const tamañoMax = 200;

// Función que  actualiza el tamaño del globo
function actualizarTamaño() {
    globo.style.fontSize = tamaño + "px";
}

// Función para inflar el globo
function inflar() {
    tamaño *= 1.1; // crecer 10%
    if (tamaño > tamañoMax) {
        explotar();
    } else {
        actualizarTamaño();
    }
}

// Función para desinflar
function desinflar() {
    tamaño *= 0.9; // reducir 10%
    actualizarTamaño();
}

// Función de explosión cuando alcanza el tamaño de 200  se explota y cambia a estrella
function explotar() {
   
    globo.textContent = "🎉";
    globo.style.fontSize = tamañoMax + "px";
    // Elimino o desactivo el  evento del teclado para que no se pueda seguir inflando o desinflando
    document.removeEventListener("keydown", controlarGlobo);
}

// Función que maneja las teclas
function controlarGlobo(event) {
    if (event.key === "ArrowUp") {
        inflar();
    } else if (event.key === "ArrowDown") {
        desinflar();
    }
}

// Asignar evento del teclado
document.addEventListener("keydown", controlarGlobo);