// Select elements on the page - canvas, shake button
const refreshButton = document.querySelector('.refresh-btn')
const canvas = document.querySelector('#etch-a-sketch');
const ctx = canvas.getContext('2d');
const MOVE_AMOUNT = 10;

// Setup our canvas for drawing
// Make a variable called height and width from the saome properties on our canvas
const { width, height } = canvas;

// Create random x and y starting points on the canvas
let x = Math.floor(Math.random() * width);
let y = Math.floor(Math.random() * height);

ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = MOVE_AMOUNT;

ctx.beginPath(); // start the drawing
ctx.moveTo(x, y);
ctx.lineTo(x, y);
ctx.stroke();

// Write a draw function
function draw({ key }) {
    console.log(key);
    // start the pat
    ctx.beginPath()
    ctx.moveTo(x, y)
    // move our x and y values depending on what the user did
    switch (key) {
        case 'ArrowUp':
            y
    }
    ctx.lineTo(x, y);
    ctx.stroke();
}

// Write a handler for the keys
function handleKey(e) {
    if (e.key.includes('Arrow')) {
        e.preventDefault();
        draw({ key: e.key});
    }
}

// Clean/refresh function

// Listen for arrow keys
window.addEventListener('keydown', handleKey)