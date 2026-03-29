// PARA OBTENER LOS ELEMENTOS 
const dormSelect = document.getElementById("dorm");
const commentInput = document.getElementById("comment");
const board = document.getElementById("board");
const addBtn = document.getElementById("addBtn");


// FUNCIONES  PARA EL FORMULARIO, OBTENER DATOS  CREAR COMENTARIO

// Obtener datos del formulario
function getFormData() {
  return {
    dorm: dormSelect.value,
    comment: commentInput.value.trim()
  };
}

// Validar datos
function validateData(dorm, comment) {
  if (dorm === "" || comment === "") {
    alert("Por favor completa todos los campos");
    return false;
  }
  return true;
}

// Crear elemento HTML del comentario
function createPost(dorm, comment) {
  const post = document.createElement("p");
  post.innerHTML = `<strong>${dorm}:</strong> ${comment}`;
  return post;
}

// Agregar comentario al board
function addPostToBoard(post) {
 board.appendChild(post);// PARA QUE APAREZACA AERRIBA EN EL BOARD
 
}

// FUNCION PARA  Limpiar formulario
function clearForm() {
  commentInput.value = "";
  dormSelect.value = "";
}

// Función principal
function handleAddPost() {
  const data = getFormData();

  if (!validateData(data.dorm, data.comment)) return;

  const post = createPost(data.dorm, data.comment);
  addPostToBoard(post);
  clearForm();
}


// ====== EVENTO ======
addBtn.addEventListener("click", handleAddPost);