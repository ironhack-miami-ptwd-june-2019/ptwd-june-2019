// in style.css we added background image in the #game-board
// in index.html we added canvas tag
// in index.html we added div with the score
// the steps: 
        // 1. get the canvas, 
        // 2. create Game class (blueprint for any new game we want to create ever),
        // 3. in startGame function create new game using "new" key word (that's currentGame) 
        // 4. create Car class,
        // 5. create drawCar() method on Car class
        // 6. in startGame function create new car using "new" key word (that's currentCar)
        // 7. tie the currentCar to the currentGame 
        // 8. in startGame function let's create car using drawCar method
        // 9. let's give some movement to the car (move() method and use keyCode thingy)
        // 10. create Obstacle class,
        // 11. create drawObstacle() method
        // 12. create update function and use something to animate your canvas
        //     ( in the 1st example we used setInterval() and in this example we used requestAnimationFrame )
        //     SURPRISE ME WITH THE 3RD WAY :) IN YOUR GAME
        // 13. create left(), right(), top() and bottom() methods on Obstacle class to pick up the position and dimension of the obstacles
        // 14. create checkCollision() to see where is the obstacle comparing to the currentCar (or currentGame.car)
        // 15. set the score
        // 16. what happens when the car hits the obstacle
        // 17. for your games: do the restart button and nice ending of the game with the score and question: Wanna play again? :)

        //  GOOD LUCK DEVELOPERS!



window.onload = function() {

  // declare global variables:
  let currentGame;
  let currentCar;


  document.getElementById("game-board").style.display = "none";
  const myCanvas = document.getElementById("the-canvas");
  const ctx = myCanvas.getContext("2d");
  // const myCanvas = document.getElementById("the-canvas").getContext("2d");

  // class Game

  class Game {
    constructor(){
      this.car = {}; // car => object
      this.obstacles = []; // obstacles => array
      this.score = 0;
    }
  }

  class Car {
    constructor(){
      this.x = 220;
      this.y = 520;
      this.width = 50;
      this.height = 80;
      this.img = './images/car.png';
    }
    drawCar(){
      const carImg = new Image();
      carImg.src = this.img;
      // let that = this;
      // carImg.onload = () => {
        //  console.log("----", this);
        ctx.drawImage(carImg, this.x, this.y, this.width, this.height);
      // };
    }

    moveCar(num){
      ctx.clearRect(this.x, this.y, this.width, this.height);
      switch(num){
        case 37:
        if(this.x > 20){
          this.x -= 10;
        }
          break;
        case 39:
        if (this.x < 430 ){
          this.x += 10;
        }
          break;
        default:
          console.logA("What are you doping?");
      }
      // this.drawCar();
    }
  }

  document.onkeydown = function (e) {
    // console.log('what is e: ', e); 
    let whereToGo = e.keyCode;
    currentGame.car.moveCar(whereToGo); 
    // currentCar.moveCar(whereToGo);
  };

  class Obstacle {
    constructor(x, y, width, height){
      this.x = x;
      this.y = y;
      this.width = width;
      this.height = height;
    }

    drawObstacle(){
      ctx.fillStyle = "orange";
      ctx.fillRect(this.x, this.y, this.width, this.height);
    }
    getLeft(){
      return this.x;
    }
    getRight(){
      return this.x + this.width;
    }

    // getTop(){
    //   return this.y;
    // }

    getBottom(){
      return this.y + this.height;
    }
  }

  function detectCollision(obstacle){
    return !((currentCar.y > obstacle.getBottom()) || 
    (currentCar.x + currentCar.width < obstacle.getLeft()) || 
    (currentCar.x - 5 > obstacle.getRight()));
  }



  document.getElementById("start-button").onclick = function() {
    startGame();
  };

  function startGame() {
    document.getElementById("game-board").style.display = "block";
    currentGame = new Game();
    
    currentCar = new Car();
    currentGame.car = currentCar;
    // console.log(currentGame);
    currentCar.drawCar();

    // example with one obstacle;
    // let obstacle1 = new Obstacle(30, 40, 50, 50);
    // let obstacle2 = new Obstacle(60, 90, 50, 100);
    // let obstacle3 = new Obstacle(120, 190, 50, 100);
      // before we push obstacles in the array:
    // // obstacle2.drawObstacle();
    // // obstacle1.drawObstacle();

    // if we push obstacles in the array:
    // currentGame.obstacles.push(obstacle1, obstacle2, obstacle3);
    // for(let i=0; i < currentGame.obstacles.length; i++){
    //   currentGame.obstacles[i].drawObstacle();
    // }


    update();
  }

  let frames = 0;
  function update(){
    ctx.clearRect(0, 0 , 500, 600);
    currentCar.drawCar();
    frames ++;

    if(frames % 100 === 1){
      randomObstacleX = Math.floor(Math.random() * 450);
      obstacleY = 0; // always starts on the top
      randomObstacleWidth = Math.floor(Math.random() * 50) + 20;
      randomObstacleHeight = Math.floor(Math.random() * 50) + 20;
      let obstacle = new Obstacle(randomObstacleX, obstacleY, randomObstacleWidth, randomObstacleHeight);
      currentGame.obstacles.push(obstacle);
    }

    for (let i=0; i< currentGame.obstacles.length; i++){
      currentGame.obstacles[i].y += 2;
      currentGame.obstacles[i].drawObstacle();
      if(detectCollision(currentGame.obstacles[i])){
        // console.log("BOOOOMMMM!");
        alert("BOOMMMM!");

        frames = 0;
        currentGame.score = 0;
        document.getElementById("score").innerHTML = currentGame.score;

        currentGame.obstacles = [];
        document.getElementById("game-board").style.display = "none";

      }


      if(currentGame.obstacles[i].y >= 600){
        currentGame.obstacles.splice(i, 1);
        currentGame.score ++;
        document.getElementById("score").innerHTML = currentGame.score;
      }
    }

    requestAnimationFrame(update);


  }
};
