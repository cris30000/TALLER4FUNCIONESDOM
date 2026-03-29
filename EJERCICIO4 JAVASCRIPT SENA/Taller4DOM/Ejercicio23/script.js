// ===== VARIABLES =====
let attempts = 3;
let secretNumber = generateNumber();

// Elementos del DOM
const guessInput = document.getElementById("guess");
const resultInput = document.getElementById("result");
const playBtn = document.getElementById("playBtn");


// ===== FUNCIONES =====

// 1. Generar número secreto
function generateNumber() {
  return Math.floor(Math.random() * 6);
}

// 2. Obtener número del usuario
function getGuess() {
  return Number(guessInput.value);
}

// 3. Validar entrada VALIDA EL RANGO ENTRE 0 Y5 
function validateGuess(num) {
  return num >= 0 && num <= 5;
}

// 4. Mostrar resultado
function showResult(message) {
  resultInput.value = message;
}

// 5. Reducir intentos
function decreaseAttempts() {
  attempts--;
}

// 6. Reiniciar juego
function resetGame() {
  attempts = 3;
  secretNumber = generateNumber();
}

// 7. Lógica principal del juego
function playGame() {
  const userNumber = getGuess();

  // Validación
  if (!validateGuess(userNumber)) {
    showResult("⚠️ Número inválido (0-5)");
    return;
  }

  // Comparación
  if (userNumber === secretNumber) {
    showResult("🎉 ¡Ganaste!");
    resetGame();
    return;
  }

  // Si falla
  decreaseAttempts();

  if (attempts === 0) {
    showResult("!!!!:( Perdiste. Era: " + secretNumber);
    resetGame();
  } else {
    showResult("❌ Fallaste. Intentos: " + attempts);
  }
}


// ===== EVENTO =====
playBtn.addEventListener("click", playGame);