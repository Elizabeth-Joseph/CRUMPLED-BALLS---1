
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var engine, world;
var ground, paper1;


function setup() {
	 createCanvas(1000,700);
	


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	
	paper1= new Paper(100,450,60,60);

	ground= new Ground(200,690,2000,10);

	dustbin1=new Dustbin(800, 670,180,20);
	dustbin2=new Dustbin(700,630,20,100);
	dustbin3=new Dustbin(900,630,20,100);

	Engine.run(engine);
  
}


function draw() {
  background(0);

  Engine.update(engine);

  

  paper1.display();
  ground.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
}

function keyPressed() {
	if (keyCode === UP_ARROW) {

	  Matter.Body.applyForce(paper1.body,paper1.body.position,{x:60,y:-85});
	}
}