// Contador GENERASL INICIALIZAE EN 1
let contador = 1;

// Función  crear una celda
function crearCelda(fila, texto) {
    const celda = fila.insertCell();
    celda.textContent = texto;
}

// Función para crear una fila completa
function crearFila(tabla, nombre, edad) {
    const fila = tabla.insertRow();

    crearCelda(fila, nombre);
    crearCelda(fila, edad);
}

// Función principal (la del botón)
function agregarFila() {
    const tabla = document.getElementById("miTablaCRIS");

    const nombre = "Usuario " + contador;
    const edad = 20 + contador;

    crearFila(tabla, nombre, edad);

    contador++;
}