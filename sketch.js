var wall,thickness, bullet;
var speed, weight;

function setup() {
  createCanvas(1600,400);
  bullet = createSprite(50, 200, 20, 5);
  bullet.shapeColor = "white";

  speed = Math.round(random(223,321));
  weight = Math.round(random(30,52));
  thickness = Math.round(random(22,83));
  wall = createSprite(1200,200,thickness,height/2);
  wall.shapeColor = color(80,80,80);
  bullet.velocityX = speed;

}

function draw() {
  background("black");

  text("Speed ="+ speed,1400,20);
  text("Weight ="+ weight,1400,40);
  text("Thickness ="+ thickness,1400,60);
  
  if(bullet.collide(wall)) {
    
    var damage = 0.5 * (weight * speed * speed)/(thickness * thickness * thickness);
    if(damage > 10) {
      wall.shapeColor = "red";
    }
    if(damage < 10) {
      wall.shapeColor = "green";
    }

  }

  drawSprites();
}