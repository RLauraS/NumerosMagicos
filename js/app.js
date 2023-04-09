/*Crea una web con bootstrap y js, que contenga un botón comenzar el juego, en ese momento se crea un número aleatorio que el usuario deberá adivinar, la interfaz del usuario debe tener además un input para ingresar un número y un botón enviar, al presionar el botón enviar mostrar en un alert si el usuario adivino o no el número mágico, si no lo adivino indicarle con un alert si el numero que ingreso es mayor o menor al número mágico.
Cuando el usuario adivine el numero mostrar un mensaje indicando al usuario que adivino el numero.
 */
// Obtener elementos del DOM
const startBtn = document.querySelector('#start-btn');
const guessForm = document.querySelector('#guess-form');
const guessInput = document.querySelector('#guess-input');
const guessBtn = document.querySelector('#guess-btn');

// Variables del juego
let numberToGuess;

// Función para generar un número aleatorio
function generateRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// Función para comenzar el juego
function startGame() {
  // Generar un número aleatorio del 1 al 100
  numberToGuess = generateRandomNumber(1, 100);
  console.log('Número mágico:', numberToGuess);
  // Ocultar el botón de "Comenzar el juego" y mostrar el formulario de adivinanza
  startBtn.style.display = 'none';
  guessForm.style.display = 'block';
}

// Función para manejar el envío del número adivinado
function handleGuess() {
  // Obtener el número ingresado por el usuario
  const userGuess = Number(guessInput.value);
  console.log('Número ingresado:', userGuess);
  // Verificar si el número ingresado es igual al número mágico
  if (userGuess === numberToGuess) {
    // El usuario adivinó el número, mostrar un mensaje de felicitación
    alert('¡Felicitaciones! Adivinaste el número mágico.');
    // Reiniciar el juego
    startBtn.style.display = 'block';
    guessForm.style.display = 'none';
  } else {
    // El usuario no adivinó el número, mostrar si el número ingresado es mayor o menor al número mágico
    let message;
    if (userGuess < numberToGuess) {
      message = 'El número ingresado es menor al número mágico.';
    } else {
      message = 'El número ingresado es mayor al número mágico.';
    }
    alert(message);
  }
}

// Agregar el evento click al botón de "Comenzar el juego"
startBtn.addEventListener('click', startGame);

// Agregar el evento submit al formulario de adivinanza
guessForm.addEventListener('submit', function(event) {
  event.preventDefault();
  handleGuess();
});
