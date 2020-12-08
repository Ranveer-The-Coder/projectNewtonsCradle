
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bobObject1,bobObject2,bobObject3,bobObject4,bobObject5;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 1200);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

		roof = new Ground(625,200,500,20);
	bobObject1 = new Bob1(440,497,50);
	bobObject2 = new ball(500,497,50);
	bobObject3 = new ball(560,497,50);
	bobObject4 = new ball(620,497,50)
	bobObject5 = new ball(680,497,50)

	hook1 = new Ground (425,200,20,20)
 	hook2 = new Ground (525,200,20,20)
	hook3 = new Ground (625,200,20,20)
	hook4 = new Ground (725,200,20,20)
	hook5 = new Ground (825,200,20,20)

	rope1 = new Rope(bobObject1.body,hook1.body);	
	rope2 = new Rope(bobObject2.body,hook2.body);
	rope3 = new Rope(bobObject3.body,hook3.body); 
	rope4 = new Rope(bobObject4.body,hook4.body); 
	rope5 = new Rope(bobObject5.body,hook5.body); 
   
 

	Engine.run(engine);
  

	

}


function draw() {
  rectMode(CENTER);
  background("lightBlue");

  console.log (mouseY)  
  
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();


  hook1.display();
  hook2.display();
  hook3.display();
  hook4.display();
  hook5.display();

  roof.display();

    drawSprites();
 
}

function keyPressed(){
	if (keyCode===UP_ARROW){
		Matter.Body.applyForce(bobObject1.body,bobObject1.body.position,{x:-3000,y:-3000})
	}
}




