var car,wall;
var speed,weight;
var car1,car1_Image;
var car2,car2_Image;
var car3,car3_Image;

function setup() {
createCanvas(1600,400);

      speed=random(55,90)
      weight=random(400,1500)

      car1=createSprite(50,200,50,50);
      car1.addImage(car1_Image);
      car1.scale=0.1;
      car1.velocityX = speed;

      car2=createSprite(100,250,50,50);
      car2.addImage(car2_Image);
      car2.scale=0.1;
      car2.velocityX = speed;

      car3=createSprite(150,300,50,50);
      car3.addImage(car3_Image);
      car3.scale=0.1;
      car3.velocityX = speed;

      wall=createSprite(1500,200,60,height/2);
      wall.addImage(wallImage);
      wall.scale=2.5;
      wall.shapeColor(80,80,80);


}

function draw() {
  background(255,255,255);  

if(wall.x-car.x <(car.width+wall.width)/2)
{
  car1.velocityX=0;
  var deforestation=0.5; weight* speed* speed/22509;
  if(deformation>180)
  {
    car1.shapeColor=color(255,0,0);
    car1.shapeColor(red);
  }
  if(deformation<180 && deformation>100)
  {
    car2.shapeColor=color(230,230,0);
    car2.shapeColor(blue);

  }
  if(deformation<100)
  {
    car3.shapeColor=color(0,255,0);
    car3.shapeColor(yellow);
  }
}

  drawSprites();
}