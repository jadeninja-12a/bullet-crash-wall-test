var bullet,wall, thickness;
var speed, weight;
function setup() {
  createCanvas(1600,400);
  bullet = createSprite(50, 200, 50, 20);
  bullet.shapeColor = color(255, 255, 255);
  speed = random(55, 90);
  thickness = random(22, 83);
  weight = random(400, 1500);
  wall = createSprite(1200, 200, thickness, height/2);
  wall.shapeColor = color(80, 80, 80);
  bullet.velocityX = speed;
}

function draw() {
  background(0);  
  if( isTouching(bullet, wall)){
     bullet.velocityX = 0;
     var damage = (0.5 * weight * speed * speed)/(thickness * thickness * thickness);
     if(damage < 10){
       wall.shapeColor = color(0, 255, 0);
     } else{
       wall.shapeColor = color(255, 0, 0);
    } 
   }
  drawSprites();
}