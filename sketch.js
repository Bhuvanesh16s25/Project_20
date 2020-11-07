var car_1, car_2;
var line_1, line_2;
var wall;
var speed, weight;

function setup() {
  createCanvas(1500,400);
  
  speed = random(55,99);
  weight = random(400,1500);

  line_1 = createSprite(400, 90, 999,15);
  line_1.shapeColor = "white";

  line_2 = createSprite(400, 270, 999,15);
  line_2.shapeColor = "white";

  car_1 = createSprite(55,155,100,50);


  wall = createSprite(928,180,60, height/2)
  wall.shapeColor = "brown";
}

function draw() {
  background(0); 
  car_1.velocityX = speed;
  
  if (wall.x-car_1.x < (car_1.width+wall.width)/2){
    car_1.velocityX = 0;
    var deformation = 0.5 * weight * speed * speed/22509;
    if(deformation > 180){
      car_1.shapeColor = color(255,0,0);
      textSize(60);
      stroke("white");
      fill("red");
      text("It's Illegal 👿😱", 300, 200);
      textFont("Arial");    }
    if(deformation < 180 && deformation > 100){
      car_1.shapeColor = color(230,230,0);

      textSize(60);
      stroke("white");
      fill("yellow");
      text("Go Slowly 😠😤", 300, 200);
      textFont("Arial");
    }
    if(deformation < 100){
      car_1.shapeColor = color(0,255,0);

      textSize(60);
      stroke("white");
      fill("green");
      text("Good 😇🤗🤝", 300, 200);
      textFont("Arial");
    }
  }
  

  drawSprites();
}