const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d');

const canvasWidth = 600
const canvasHeight = 400
const paddleWidth = 15;
const paddleHeight = 50;
const radius = 10;

function renderBackground() {
  ctx.fillStyle = 'black';
  ctx.fillRect(0, 0, canvasWidth, canvasHeight);
}

function renderBall(x, y) {
  ctx.beginPath();
  ctx.arc(x, y, radius, 0, 2 * Math.PI, false);
  ctx.fillStyle = 'red';
  ctx.fill();
}

function renderPaddle(y) {
  const padding = 15;
  ctx.fillStyle = 'white';
  ctx.fillRect(padding, y, paddleWidth, paddleHeight);
}

let isGoingRight = true;
let x = 40;
let y = 40;
const speed = 1;
let directionX = +1
let paddleX = 10;

// x += direction * speed;
// x += +1 * 2; // = 2

// x += direction * speed;
// x += -1 * 2; // -2


setInterval(() => {
  renderBackground();
  renderBall(x, y);
  // renderPaddle(paddleX);

  // x += directionX * speed;
  // if ((x + radius) == canvasWidth || (x - radius) == 0) {
  //   directionX = -1 * directionX;
  // } 


  if (isGoingRight && (x + radius) < canvasWidth) {
    x += 2;
  } else if (!isGoingRight && (x - radius) > 0) {
    x -= 2;
  }

  if ((x + radius) == canvasWidth) {
    isGoingRight = false;
  } else if ((x - radius) == 0) {
    isGoingRight = true;
  }
  if ((x + radius) == canvasWidth || (x - radius) == 0) {
    isGoingRight = !isGoingRight;
  } 
}, 17);


document.addEventListener('keypress', (event) => {
  if (event.key === 's') {
    paddleX += 10;
  }
  else if (event.key === 'w') {
    paddleX -= 10;
  }
});


// 1. Move the ball move in both axis: x and y 
// 2. Make it bounce in both axis: x and y
// 3. Calculate collisions w/ left paddle.
// 4. Add right paddle and collisions
