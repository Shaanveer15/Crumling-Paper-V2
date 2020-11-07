
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground,ball,d1;
function preload(){
dustbin=loadImage("dustbingreen.png")


	
}

function setup() {
	createCanvas(800, 700);
	

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ball=new Ball (100,180,20);
	ground= new Ground(400,670,800,40);
	d1=new Dustbin(600,660,200,20);
	d2=new Dustbin(690,610,20,100);
	d3=new Dustbin(510,610,20,100);
	box=createSprite(600,560,200,20);
	box.addImage(dustbin);
	box.scale=0.8;
	Engine.run(engine);
	
}


function draw() {
  rectMode(CENTER);
  background(255);
  
  
 ground.display();
ball.display();
d1.display();
d2.display();
d3.display();
drawSprites();
}

function keyPressed(){
if(keyCode === UP_ARROW){
	Matter.Body.applyForce(ball.body,ball.body.position,{x:30,y:-30})
}

}


