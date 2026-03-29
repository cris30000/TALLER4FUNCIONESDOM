// Elementos a utilizar 
const valorInput = document.getElementById("valor");
const escala = document.getElementById("escala");
const boton = document.getElementById("convertir");
const resultado = document.getElementById("resultado");

// Color inicial para el boton
boton.style.backgroundColor = "green";
boton.style.color = "white";

// Evento al hacer click en el boton  convertir
boton.addEventListener("click", () => {
    if (boton.style.backgroundColor === "green") {
        boton.style.backgroundColor = "orange";
    } else {
        boton.style.backgroundColor = "green";
    }
});
// Funciones para conversión
function celsiusAFahrenheit(c) {
    return (c * 9/5) + 32;
}

function celsiusAKelvin(c) {
    return c + 273.15;
}

function fahrenheitACelsius(f) {
    return (f - 32) * 5/9;
}

function kelvinACelsius(k) {
    return k - 273.15;
}

//creo el evento  para recibir el valor  y convertilo segun la escala
boton.addEventListener("click", () => {
    let valor = parseFloat(valorInput.value);
    let tipo = escala.value;

    if (isNaN(valor)) {
        resultado.textContent = "Ingresa un valor válido";
        return;
    }

    let mensaje = "";

    if (tipo === "C") {
        let f = celsiusAFahrenheit(valor);
        let k = celsiusAKelvin(valor);
        mensaje = `${valor} °C = ${f.toFixed(2)} °F  y convertidos a Kelvin es:  ${k.toFixed(2)} K`;
    }

    if (tipo === "F") {
        let c = fahrenheitACelsius(valor);
        let k = celsiusAKelvin(c);
        mensaje = `${valor} °F = ${c.toFixed(2)} °C y convertidos a Kelvin es: ${k.toFixed(2)} K`;
    }

    if (tipo === "K") {
        let c = kelvinACelsius(valor);
        let f = celsiusAFahrenheit(c);
        mensaje = `${valor} K = ${c.toFixed(2)} °C  y convertidos a Fahrenheit es: ${f.toFixed(2)} °F`;
    }

    resultado.textContent = mensaje;
});