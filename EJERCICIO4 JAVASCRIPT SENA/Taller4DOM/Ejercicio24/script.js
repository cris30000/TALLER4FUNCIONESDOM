// ===== CONFIGURACIÓN creo filas y columnas
const rows = 10;
const cols = 4;

// ===== DOM  llamo los elemntos =====
const plane = document.getElementById("plane");
const message = document.getElementById("message");


// funciones para crear asiento , generar etiquteas crear todos

// 1. Crear un asiento
function createSeat(row, col) {
  const seat = document.createElement("div");

  seat.classList.add("seat", "available");
  seat.textContent = generateSeatLabel(row, col);

  seat.addEventListener("click", function () {
    handleSeatClick(seat);
  });

  return seat;
}

// 2. Generar etiqueta (Ej: 1A)
function generateSeatLabel(row, col) {
  const letter = String.fromCharCode(65 + col);
  return `${row + 1}${letter}`;
}

// 3. Crear todos los asientos
function createPlane() {
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      const seat = createSeat(i, j);
      plane.appendChild(seat);
    }
  }
}

// 4. Manejar clic en asiento
function handleSeatClick(seat) {
  if (isSeatOccupied(seat)) {
    showMessage("❌ Asiento ya reservado");
  } else {
    reserveSeat(seat);
  }
}

// 5. Verificar si está ocupado
function isSeatOccupied(seat) {
  return seat.classList.contains("occupied");
}

// 6. Reservar asiento
function reserveSeat(seat) {
  changeSeatState(seat);
  showMessage("✅ Reservado: " + seat.textContent);
}

// 7. Cambiar estado visual
function changeSeatState(seat) {
  seat.classList.remove("available");
  seat.classList.add("occupied");
}

// 8. Mostrar mensaje
function showMessage(text) {
  message.textContent = text;
}

// 9. Inicializar app
function init() {
  createPlane();
}


// para inicializar 
init();