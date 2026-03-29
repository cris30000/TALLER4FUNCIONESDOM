// Función para validar los valores de entrada
function validarEntradas(a, b, c) {
    if (isNaN(a) || isNaN(b) || isNaN(c)) {
        return "Por favor, ingresa valores válidos para a, b y c.";
    }
    if (a === 0) {
        return "El valor de 'a' no puede ser cero.";
    }
    if (a < -99 || a > 99 || b < -99 || b > 99 || c < -99 || c > 99) {
        return "Los valores deben estar entre -99 y 99.";
    }
    return null; // Sin errores
}

// Función para calcular las raíces cuadraticas
function calcularRaices(a, b, c) {
    let discriminante = b * b - 4 * a * c;

    if (discriminante < 0) {
        return "No hay raíces reales (el discriminante es negativo).";
    } else if (discriminante === 0) {
        let raiz = -b / (2 * a);
        return `Una raíz real: x = ${raiz.toFixed(3)}`;
    } else {
        let raiz1 = (-b + Math.sqrt(discriminante)) / (2 * a);
        let raiz2 = (-b - Math.sqrt(discriminante)) / (2 * a);
        return `Solución: x = ${raiz1.toFixed(3)}, x = ${raiz2.toFixed(3)}`;
    }
}

// Función que maneja el evento click del botón
function manejarCalculo() {
    let a = parseInt(document.getElementById("a").value);
    let b = parseInt(document.getElementById("b").value);
    let c = parseInt(document.getElementById("c").value);
    let resultadoDiv = document.getElementById("resultado");

    let error = validarEntradas(a, b, c);
    if (error) {
        resultadoDiv.textContent = error;
        return;
    }

    let resultado = calcularRaices(a, b, c);
    resultadoDiv.textContent = resultado;
}

// Asociar el evento al botón después que cargue el DOM le decimos al navegador con DOMContenteLoaded
// que espere hasta que todo el html este cargado y listo para ejecutar la funcion
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("calcular").addEventListener("click", manejarCalculo);
});