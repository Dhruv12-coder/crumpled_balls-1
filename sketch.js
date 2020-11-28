
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground1,dustbin1,dustbin2,dustbin3,paper1 ;

function preload()
{
}

function setup() {
	
	
createCanvas(1400, 700);
	rectMode(CENTER);
	engine = Engine.create();
	world = engine.world;
	


	
	
	ground1 = new Ground(700,690,1400,30);
  dustbin1 = new Dustbin(1000,570,20,180);
  dustbin2 = new Dustbin(1100,650,180,20);
  dustbin3 = new Dustbin(1200,570,20,180);
	paper1 = new Ball (200,300,40);
	
	 Engine.run(engine);
  
}


function draw() {
	background(206,237,227);
	//Engine.update(engine);
	
	
	
  ground1.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
  paper1.display();
  
  
	
 
}

function keyPressed()	{
		if(keyCode === 32)	{
			Matter.Body.applyForce(paper1.body,paper1.body.position,{x:0.3,y:-0.3});

		}
	}
