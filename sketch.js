var bullet,wall;
var speed,height,weight,thickness;
function setup() {
  createCanvas(1600,400);
  bullet=createSprite(50, 200, 50, 20);
  speed=random(223,321);
  weight=random(30,52);
  thickness=random(22,83);
  wall=createSprite(1500,200,thickness,height/2);
  wall.shapeColor=color(80,80,80);
  bullet.velocityX=speed;
}

function draw() {
  background(0,0,0);  
  if (collide(bullet,wall)) {
    var damage=0.5*weight*speed*speed/(thickness*thickness*thickness);
    if (damage<10) {
      bullet.shapeColor="green";
      
    }
   
    if (damage>10) {
      bullet.shapeColor="red";
    }
  }
  drawSprites();
}
function collide(bull,wa)
{
 if  (wall.x-bullet.x<(wall.x+bullet.x)) {
   return true;
 }
 return false;
}