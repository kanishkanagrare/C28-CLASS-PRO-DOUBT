const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground, base, block, polygon, slingshot;
var world, Matter; 

function setup() {
  createCanvas(800,400);

  polygon= createSprite(100, 200, 50, 50);
  base= new Grounds(600, 500, 100, 20);
  ground= new Grounds(400, 375, 800, 10);
  slingshot= new Slingshot(this.polygon, {x:100, y:200})
  block2= new Box(520,500, 20, 30);
  block3= new Box(541,500, 20, 30);
  block4= new Box(562,500, 20, 30);
  block5= new Box(583,500, 20, 30);

  block6= new Box(525,531, 20, 30);
  block7= new Box(525,531, 20, 30);
  block8= new Box(525,531, 20, 30);

  block9= new Box(530,562, 20, 30);
  block10= new Box(530,562, 20, 30);

  block11= new Box(535,593, 20, 30);
}

function draw() {
  background(255,255,255);  
  
  ground.display();
  polygon.display();
  base.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();

  drawSprites();

}