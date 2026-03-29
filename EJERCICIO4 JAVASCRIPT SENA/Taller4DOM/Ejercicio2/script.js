const tasa = 4000;

// Elementos a relacionar
const inputDolares = document.getElementById("dolares");
const inputPesos = document.getElementById("pesos");
const btnDolares = document.getElementById("btnDolares");
const btnPesos = document.getElementById("btnPesos");
const resultado = document.getElementById("resultado");

// Funciones de dolares a pesos y pesos a dolares
function dolaresAPesos(dolares) {
    return dolares * tasa;
}

function pesosADolares(pesos) {
    return pesos / tasa;
}

// Evento: para convertir dolares a pesos
btnDolares.addEventListener("click", () => {
    let dolares = parseFloat(inputDolares.value);

    if (isNaN(dolares) || dolares <= 0) {
        resultado.textContent = "Ingresa dólares válidos";
        return;
    }

    let pesos = dolaresAPesos(dolares);
    resultado.textContent = `${dolares} USD (dolares)= ${pesos.toLocaleString()} COP(pesos colombianos)`;
});

// Evento:pesos a  dolares
btnPesos.addEventListener("click", () => {
    let pesos = parseFloat(inputPesos.value);

    if (isNaN(pesos) || pesos <= 0) {
        resultado.textContent = "Ingresa pesos válidos";
        return;
    }

    let dolares = pesosADolares(pesos);
    resultado.textContent = `${pesos.toLocaleString()} COP(pesos colombianos) = ${dolares.toFixed(2)} USD(dolares)`;
});