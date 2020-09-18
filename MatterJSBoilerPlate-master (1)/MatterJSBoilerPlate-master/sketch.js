
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(800, 1000);


	engine = Engine.create();
	world = engine.world;

	roofObject = new roof(400, 150, 500, 50);

	bobObject1 = new paperball(-100,200)
	bobObject2 = new paperball(-50,200)
	bobObject3 = new paperball(0,200)
	bobObject4 = new paperball(-50,200)
	bobObject5 = new paperball(-50,200)

	chain1 = new Chain(bobObject1.body,roofObject.body,-200,5);
	chain2 = new Chain(bobObject2.body,roofObject.body,-100,5);
	chain3 = new Chain(bobObject3.body,roofObject.body, 0,5);
	chain4 = new Chain(bobObject4.body,roofObject.body, 100,5);
	chain5 = new Chain(bobObject5.body,roofObject.body, 200,5);

	Engine.run(engine);
  
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(bobObject1.body,bobObject1.body.position,{x:-100,y:-30});
	}
}

function draw() {
  rectMode(CENTER);
  background(59);
  
  roofObject.display();
  bobObject1.display();
  chain1.display();
  bobObject2.display();
  chain2.display();
  bobObject3.display();
  chain3.display();
  bobObject4.display();
  chain4.display();
  bobObject5.display();
  chain5.display();

  drawSprites();
 
}



