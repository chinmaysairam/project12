const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;




var ground1,circle1;
var rectangle1;




function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
} 
ground1 = new Ground(600,height,1200,20);

circle1 = new Circle(700,320,70,70);
rectangle1= new Rectangle(920,320,70,70);













function draw() {
  background(255,255,255);  
  circle1.display();
  rectangle1.display();
  
  ground1.display();
}
