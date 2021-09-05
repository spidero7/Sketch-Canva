// Select elements on the page - canvas, shake button
const refreshButton = document.querySelector('.refresh-btn')
const canvas = document.querySelector('#etch-a-sketch');
const ctx = canvas.getContext('2d');

// Setup our canvas for drawing
// Make a variable called height and width from the saome properties on our canvas
const { width, height } = canvas;

// Create random x and y starting points on the canvas
let x = Math.floor(Math.random() * width);
let y = Math.floor(Math.random() * height);

ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = 10;

ctx.beginPath(); // start the drawing
ctx.moveTo(x, y);
ctx.lineTo(x, y);
ctx.stroke();

// Write a draw function

// Write a handler for the keys
function handleKey(e) {
    //e.preventDefault();
    if (e.key.includes('Arrow')) {

    }

}

// Clean/refresh function

// Listen for arrow keys
window.addEventListener('keydown', handleKey)