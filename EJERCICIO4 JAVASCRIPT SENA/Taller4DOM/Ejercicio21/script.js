const NUM_TRAIL = 15;
const trailElements = [];
let positions = [];

// Función para crear los divs del rastro
function crearRastro() {
  for (let i = 0; i < NUM_TRAIL; i++) {
    const div = document.createElement('div');
    div.classList.add('trail');
    document.body.appendChild(div);
    trailElements.push(div);
    positions.push({ x: 0, y: 0 });
  }
}

// Función que actualiza la posición de cada div
function actualizarRastro(x, y) {
  trailElements.forEach((el, index) => {
    const oldPos = positions[index];
    positions[index] = { x, y };
    el.style.transform = `translate(${oldPos.x}px, ${oldPos.y}px)`;
    x = oldPos.x;
    y = oldPos.y;
  });
}

// Función que maneja el movimiento del mouse
function manejarMouse(event) {
  actualizarRastro(event.clientX, event.clientY);
}

// Función inicial que configura todo
function iniciarRastro() {
  crearRastro();
  document.addEventListener('mousemove', manejarMouse);
}

// Iniciar el rastro
iniciarRastro();