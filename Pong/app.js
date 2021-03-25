const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

// context.scale(10, 10);       // This Method scales our Canvas. Be careful that it's called after the "const context" above.

const canvasWidth = 600;
const canvasHeight = 400;

// context.fillStyle = '#ebae34';          // Yellow in HEX: #ebae34
// context.fillRect(10, 10, canvasWidth, canvasHeight);

let isGoingRight = true;
let x = 40;
let y = 40;
// const speed = 1;
let directionX = +1


class Ball {
    constructor() {
        this.xPos = 30;
        this.yPos = 30;
        this.radius = 10;
        this.canvas = document.getElementById('canvas');
        this.ctx = canvas.getContext('2d');
    }
    renderBall() {
        this.ctx.beginPath();
        this.ctx.arc(this.xPos, this.yPos, this.radius, 0, 2 * Math.PI, false);
        this.ctx.fillStyle = '#ed4d34'   // Mostly red in HEX: #ed4d34
        this.ctx.fill();
    }
    move() {
        // if (isGoingRight && (x + this.radius) < canvasWidth) {
        //     x += 2;
        // } else if (!isGoingRight && (x - this.radius) > 0) {
        //     x -= 2;
        // }

        // if ((x + this.radius) == canvasWidth) {
        //     isGoingRight = false;
        // } else if ((x - this.radius) == 0) {
        //     isGoingRight = true;
        // }

        this.xPos = this.xPos + directionX;
        if ((this.xPos + this.radius) == canvasWidth || (this.xPos - this.radius) == 0) {
            directionX = -directionX;
        } 
    }

    renderBackground() {
        this.ctx.fillStyle = '#ebae34';
        this.ctx.fillRect(0, 0, canvasWidth, canvasHeight);
    }   

}

const ball = new Ball();

setInterval(() => {
    ball.renderBackground();
    ball.renderBall();
    ball.move();

}, 17);

// ball.renderBall(context);