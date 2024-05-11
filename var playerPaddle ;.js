var playerPaddle ;
var computerPaddle ;
var ball ;
var computerScore ;
var playerScore ;
var gameState ;
function setup(){
 playerPaddle = createSprite(380, 50, 10, 70);
var computerPaddle = createSprite(5, 200, 10, 70);
var ball = createSprite(200, 200, 10, 10);
var playerScore = 0;
var computerScore = 0;
var gameState = "serve";}
function draw() {
  background("white");
  if (gameState === "serve") {
    text("Press Space to Serve", 150, 180);
  }
  text(computerScore, 180, 20);
  text(playerScore, 215, 20);
  playerPaddle.y = camera.mouseY;
  computerPaddle.y = ball.y;
  // 
  createEdgeSprites();
  ball.bounceOff(topEdge);
  ball.bounceOff(playerPaddle);
  ball.bounceOff(computerPaddle);
  ball.bounceOff(bottomEdge);
  for (var i = 0; i < 400; i = i + 20) {
    line(200, i, 200, i + 10);
  }
  if (keyDown("space") && gameState==="serve") {
    serve();
    gameState = "play";
  }
  if (ball.x > 400 || ball.x < 0) {
    if (ball.x > 400) {
      computerScore = computerScore + 1;
    }
    if (ball.x < 0) {
      playerScore = playerScore + 1;
    }
    reset();
    gameState = "serve";
  }
  if (playerScore === 10 || computerScore === 10) {
    gameState = "over";
    text("Game Over", 198, 120);
    text("Press R to Restart", 198, 96);
  }
  if (keyDown("R") || gameState == "over") {
    gameState = "serve";
    computerScore = 0;
    playerScore = 0;
  }
  drawSprites();
  }
function serve() {
  ball.velocityX = 3;
  ball.velocityY = 4;
}
function reset() {
  ball.x = 200;
  ball.y = 200;
  ball.velocityX = 0;
  ball.velocityY = 0;
}





