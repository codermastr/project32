function setup() {
  createCanvas(800,400);
  createSprite(100,50, 100, 10);
  createSprite(50,100,10,100);
  createSprite(100,100,10,100);
  createSprite(50,50,100,10);
  createSprite(75,150,150,10);
}

function draw() {
  background(255,255,255);  
  drawSprites();
}