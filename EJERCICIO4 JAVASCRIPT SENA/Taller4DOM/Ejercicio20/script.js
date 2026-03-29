// CREO LA Función para validar formato de email con regex ( MANEJA TRES PARTE USUARIO-DOMINIO-EXTENSION EJEMPLO HOLA123@GMAIL.COM)
function validarEmail(email) {
  const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regexEmail.test(email);
}

// Función para actualizar mensaje y estilos
function mostrarMensaje(esValido, input, mensajeDiv) {
  if (esValido) {
    mensajeDiv.textContent = "Correo correcto";
    mensajeDiv.style.color = "green";
    input.style.borderColor = "blue";
  } else {
    mensajeDiv.textContent = "Correo incorrecto";
    mensajeDiv.style.color = "red";
    input.style.borderColor = "red";
  }
}

// Función que maneja el submit del formulario
function manejarSubmit(event) {
  event.preventDefault();

  const emailInput = document.getElementById('email');
  const mensajeDiv = document.getElementById('mensaje');
  const email = emailInput.value.trim();

  const esValido = validarEmail(email);
  mostrarMensaje(esValido, emailInput, mensajeDiv);
}

// Asociar el evento submit al formulario
document.getElementById('formEmail').addEventListener('submit', manejarSubmit);