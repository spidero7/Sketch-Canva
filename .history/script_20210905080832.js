// Select elements on the page - canvas, shake button
const refreshButton = document.querySelector('.refresh-btn')
const canvas = document.querySelector('#etch-a-sketch');
const ctx = canvas.getContext('2d');

// Setup our canvas for drawing
// Make a variable called height and width from the saome properties on our canvas
const { width, height } = canvas;

// Create random x and y starting points of 
let x = Math.floor(Math.random() * width);

ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = 10;

ctx.beginPath(); // start the drawing
ctx.moveTo(x, 200);
ctx.lineTo(x, 200);
ctx.stroke();

// Write a draw function

// Write a handler for the keys

// Clean/refresh function

// Listen for arrow keys