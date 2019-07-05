const myCanvas = document.querySelector("#my-canvas");

// define the context

const ctx = myCanvas.getContext("2d");

let score = 0;
let isOver = false;

// 1. draw background

function drawBackground(){
    ctx.fillStyle = "pink";
    ctx.fillRect(0, 0, 1000, 500);

    ctx.fillStyle = "green";
    ctx.font = "30px Arial";

    ctx.fillText(`Score: ${score}`, 800, 50);
}

// drawBackground();

// 2. add images to the board

const supermanImg = new Image();
// console.log(supermanImg);
// <img src="">

// navigate to this file as you were in html file
supermanImg.src = "./images/superman.png";

let supermanX = 0;
let supermanY = 200;

// supermanImg.onload = () => {
//     ctx.drawImage(supermanImg, supermanX, supermanY, 150, 150);
// }

const fireballImg = new Image();
fireballImg.src = "./images/fireball.png";

let fireballX = 800;
let fireballY = 200;

// fireballImg.onload = () => {
//     ctx.drawImage(fireballImg, fireballX, fireballY, 70, 70);
// };

function drawEverything(){
    ctx.drawImage(supermanImg, supermanX, supermanY, 150, 150);
    ctx.drawImage(fireballImg, fireballX, fireballY, 70, 70);

    if(checkCollision(supermanX, supermanY, fireballX, fireballY)){
        console.log('CRASH!!!!!!');
        gameOver();
    }

    if (fireballX === 0){
        score ++;
    }
}

// 3. create some animation

function drawingLoop(){
    ctx.clearRect(0, 0, 1000, 500);
    drawBackground();

    fireballX -= 5;

    if(fireballX < -70){
        fireballX = 1000;
        fireballY = Math.floor(Math.random() * 430);
    }
    drawEverything();

    // requestAnimationFrame(() => drawingLoop());

    if(isOver === false){
        requestAnimationFrame(() => drawingLoop());
    }
}


document.onkeydown = function (event) {
    // console.log(event);

    switch(event.keyCode){
        case 37: // left
        supermanX -= 10;
        break;
        case 39: // right
        supermanX += 10;
        break;

        case 38:
        supermanY -= 10;
        break;

        case 40:
        supermanY += 10;
        break;

        default:
        console.log("I'm not sure what you're doing!");
    }
};


// all 4 conditions need to be true in order to return true 
function checkCollision(obj1x, obj1y, obj2x, obj2y){
    // supermanY + superman-height >= fireballY
return obj1y + 150  >= obj2y
    // supermanY <= fireballY + fireball-height
    && obj1y <= obj2y + 70
    // supermanX + superman-width >= fireballX
    && obj1x + 150 - 70 >= obj2x
    // supermanX <= fireballX + fireball-width
    && obj1x <= obj2x + 70;
};

function gameOver(){
    ctx.clearRect(0, 0, 1000, 500);

    drawBackground();

    const tiredSuperman = new Image();
    tiredSuperman.src = "./images/tired-superman.png";
    tiredSuperman.onload = () => {
        ctx.drawImage(tiredSuperman, 400, 300, 150, 150);
    };

    isOver = true;

    ctx.font = "70px bold Arial";
    ctx.fillStyle = "red";
    ctx.fillText("GAME OVER!", 300, 200);
}

// start the process
// after this, drawingLoop() will call itself recursively
drawingLoop();

