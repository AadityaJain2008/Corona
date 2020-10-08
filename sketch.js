var moving,fixed;

function setup() {
  createCanvas(800,400);
  fixed=createSprite(400, 200, 50, 50);
  moving = createSprite(600,200,50,50);
}

function draw() {
  background(255,255,255);
  moving.x=World.mouseX;
  moving.y=World.mouseY;
    
  drawSprites();
}