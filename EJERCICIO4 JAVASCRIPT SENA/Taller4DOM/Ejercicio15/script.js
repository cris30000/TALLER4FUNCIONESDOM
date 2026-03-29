// Función para manejar el envío del formulario
function manejarSubmit(event) {
    event.preventDefault(); // Evitar que se recargue la página

    // Obtener todos los checkboxes con nombre "skill"
    const checkboxes = document.querySelectorAll('input[name="skill"]');
    let habilidadesSeleccionadas = [];

    // Recorrer y guardar los valores de los checkboxes marcados
    checkboxes.forEach(chk => {
        if (chk.checked) {
            habilidadesSeleccionadas.push(chk.value);
        }
    });

    // Mostrar mensaje según las habilidades seleccionadas
    const mensajeDiv = document.getElementById("mensaje");

    if (habilidadesSeleccionadas.length === 0) {
        mensajeDiv.textContent = "Please select at least one skill.";
    } else {
       mensajeDiv.textContent = "Tienes unas habilidades exepcionales.Estas Contratado!!!";
        //mensajeDiv.textContent = "You're hired! We need a website overhaul. Have it done by Saturday midnight. We go live on Sunday.";
    }
}

// Asociar el evento submit al formulario después que cargue el DOM
document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("formSkills").addEventListener("submit", manejarSubmit);
});