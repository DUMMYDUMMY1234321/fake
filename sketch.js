var car1,wall1 ; 
var wall2 ;
var wall ;
var speed,weight ; 




function setup() {
  createCanvas(1600,500);
  


speed = random(55,90);
weight = random(400,1500);


wall = createSprite(1500,200,60,height/2);

  car1= createSprite(50, 100, 50, 25);
  car1.shapeColor = "red"
  car1.velocityX =  +5 ; 

  wall =  createSprite(50,50,5000,10);
  wall.shapeColor = ("grey");

  wall2 =  createSprite(50,150,5000,10);
  wall2.shapeColor = ("grey");

}

function draw() {
  background("green");
  
  if(wall.x-car1.x<(car1.width+wall.width)/2)
{
 
  var deformation  = 0.5 *weight*speed*speed/22509 ;
  if (deformation>180){
    car1.velocityX = 0;
car1.shapeColor = (255,0,0);
  }
  if(deformation<180 && deformation>100){
    car1.shapeColor = (230,230,0);
    car1.velocityX = 0;
  }
  if(deformation<100){
    car1.velocityX = 0;
    car1.shapeColor = (0,255,0);
  }
}






createEdgeSprites();

  drawSprites();
}