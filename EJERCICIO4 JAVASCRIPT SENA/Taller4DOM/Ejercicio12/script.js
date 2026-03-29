// Funciones para operaciones
function sumar(a, b) {
    return a + b;
}

function restar(a, b) {
    return a - b;
}

function multiplicar(a, b) {
    return a * b;
}

function dividir(a, b) {
    if (b === 0) return "Error: división por cero";
    return a / b;
}

// Función para calcular según la operación
function calcular(operacion) {
    const num1 = parseFloat(document.getElementById("numero1").value);
    const num2 = parseFloat(document.getElementById("numero2").value);
    let resultado;

    switch (operacion) {
        case 'sumar':
            resultado = sumar(num1, num2);
             mensaje = `La suma es: ${resultado}`;
            break;
        case 'restar':
            resultado = restar(num1, num2);
             mensaje = `La resta es: ${resultado}`;
            break;
        case 'multiplicar':
            resultado = multiplicar(num1, num2);
             mensaje = `La multiplicación  es: ${resultado}`;
            break;
        case 'dividir':
            resultado = dividir(num1, num2);
             mensaje = `La division  es: ${resultado}`;
            break;
    }

    document.getElementById("resultado").innerText = "Resultado: " + resultado;
}

// Asociar botones a funciones usando event listeners
document.getElementById("sumar").addEventListener("click", () => calcular('sumar'));
document.getElementById("restar").addEventListener("click", () => calcular('restar'));
document.getElementById("multiplicar").addEventListener("click", () => calcular('multiplicar'));
document.getElementById("dividir").addEventListener("click", () => calcular('dividir'));