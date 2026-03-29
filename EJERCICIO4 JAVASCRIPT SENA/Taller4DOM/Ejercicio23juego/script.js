// ===== VARIABLES =====
let attempts = 3;
let secretNumber = generateNumber();
let gameOver = false;

// DOM
const guessInput = document.getElementById("guess");
const message = document.getElementById("message");
const attemptsText = document.getElementById("attempts");
const playBtn = document.getElementById("playBtn");
const resetBtn = document.getElementById("resetBtn");


// ===== FUNCIONES =====

// Número aleatorio
function generateNumber() {
  return Math.floor(Math.random() * 6);
}

// Obtener número
function getGuess() {
  return Number(guessInput.value);
}

// Validar
function isValid(num) {
  return num >= 0 && num <= 5;
}

// Mostrar mensaje
function showMessage(text) {
  message.textContent = text;
}

// Actualizar intentos
function updateAttempts() {
  attemptsText.textContent = "Intentos restantes: " + attempts;
}

// Terminar juego
function endGame(text) {
  showMessage(text);
  gameOver = true;
  playBtn.disabled = true;
}

// Reiniciar juego
function resetGame() {
  attempts = 3;
  secretNumber = generateNumber();
  gameOver = false;

  guessInput.value = "";
  showMessage("");
  updateAttempts();
  playBtn.disabled = false;
}

// Lógica principal
function playGame() {
  if (gameOver) return;

  const guess = getGuess();

  if (!isValid(guess)) {
    showMessage("⚠️ Número inválido (0-5)");
    return;
  }

  if (guess === secretNumber) {
    endGame("🎉 ¡Ganaste! 🎉");
    return;
  }

  attempts--;
  updateAttempts();

  // PISTAS 🔥
  if (guess < secretNumber) {
    showMessage("📉 El número es MAYOR");
  } else {
    showMessage("📈 El número es MENOR");
  }

  if (attempts === 0) {
    endGame("💀 Perdiste. Era: " + secretNumber);
  }
}


// ===== EVENTOS =====
playBtn.addEventListener("click", playGame);
resetBtn.addEventListener("click", resetGame);

// Inicializar
updateAttempts();