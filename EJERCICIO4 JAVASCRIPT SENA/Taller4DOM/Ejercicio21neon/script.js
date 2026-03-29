const NUM_TRAIL = 20;        // genera número de círculos en este caso 20
const trailElements = []; // guardara todos los div que generar el ratso
let positions = [];// su valor cambia cada vez que se mueve el mouse

// Función generar un color neón aleatorio
function colorNeon() {
  const colors = ['#ff00ff', '#00ffff', '#ff4081', '#7cfc00', '#ffff00', '#00ffea'];
  return colors[Math.floor(Math.random() * colors.length)];
}

// Función para crear los divs del rastro
function crearRastro() {
  for (let i = 0; i < NUM_TRAIL; i++) {// repite un bucle de 20 como se habia definido y casda vuelta crea un div
    const div = document.createElement('div');// crea un nuecvo lemnto htmlñ en memoria no esta visible aun
    div.classList.add('trail');// le adiciona a la clase  trail  para que el div tenga tamaño,bordes, etc
    div.style.backgroundColor = colorNeon();
    div.style.boxShadow = `0 0 10px ${div.style.backgroundColor}, 0 0 20px ${div.style.backgroundColor}`;// agrega efecto de brillo
    document.body.appendChild(div);// con este append ya se visualiza en la pagina
    trailElements.push(div);
    positions.push({ x: 0, y: 0 });
  }
}

// Función que actualiza la posición y color de cada div
function actualizarRastro(x, y) {
  trailElements.forEach((el, index) => {
    const oldPos = positions[index];
    positions[index] = { x, y };

    el.style.transform = `translate(${oldPos.x}px, ${oldPos.y}px)`;
    // efecto de difuminado: opacidad disminuye con el índice
    el.style.opacity = 1 - index / (NUM_TRAIL + 5);

    // Cambiar color para efecto arcoíris
    if (Math.random() < 0.05) {
      const c = colorNeon();
      el.style.backgroundColor = c;
      el.style.boxShadow = `0 0 10px ${c}, 0 0 20px ${c}`;
    }

    x = oldPos.x;
    y = oldPos.y;
  });
}

// Función que maneja el movimiento del mouse
function manejarMouse(event) {
  actualizarRastro(event.clientX, event.clientY);
}

// Función inicial para crear el rastro y activar el evento
function iniciarRastro() {
  crearRastro();
  document.addEventListener('mousemove', manejarMouse);
}

// Iniciar
iniciarRastro();