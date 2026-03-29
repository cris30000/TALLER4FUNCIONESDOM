document.getElementById("Formulario").addEventListener('submit', function(event){
    event.preventDefault();

    const deposit = obtenerValorFloat('deposit');
    const rate = obtenerValorFloat('rate') / 100;
    const years = obtenerValorInt('years');

    if (!validarEntradas(deposit, rate, years)) {
        alert("Por favor ingresa valores válidos");
        return;
    }

    const tablaHTML = generarTablaInteresCompuesto(deposit, rate, years);
    mostrarResultado(tablaHTML);
});

// Funciones para obtener valores float por id

function obtenerValorFloat(id) {
    return parseFloat(document.getElementById(id).value);
}

// Funciones para obtener valores int por id
function obtenerValorInt(id) {
    return parseInt(document.getElementById(id).value);
}
// Funciones para validar entradas
function validarEntradas(deposit, rate, years) {
    return deposit >= 0 && rate >= 0 && years >= 1;
}
// generamos una tabla 
function generarTablaInteresCompuesto(deposit, rate, years) {
    let startingValue = deposit;
    let tablaHTML = `<table>
        <caption>Tabla de interés compuesto</caption>
        <thead>
            <tr>
                <th>Año</th>
                <th>Valor Inicial</th>
                <th>Interés Ganado</th>
                <th>Valor Final</th>
            </tr>
        </thead>
        <tbody>`;
//  interestEarned calcula el interes ganado
// endingValue =  Calcula el valor final del inters 
// quitamos esta para mejorar y separe por miles <td>$${startingValue.toFixed(2)}</td>
    for (let year = 1; year <= years; year++) {
        const interestEarned = startingValue * rate;
        const endingValue = startingValue + interestEarned;

       tablaHTML += `
  <tr>
    <td style="text-align:center;">${year}</td>
    <td>$${startingValue.toLocaleString('es-ES', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</td>
    <td>$${interestEarned.toLocaleString('es-ES', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</td>
    <td>$${endingValue.toLocaleString('es-ES', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</td>
  </tr>`;

        startingValue = endingValue;
    }

    tablaHTML += `</tbody></table>`;
    return tablaHTML;
}

function mostrarResultado(html) {
    document.getElementById('result').innerHTML = html;
}