
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint

var bob1, bob2, bob3, bob4,bob5;
var rope1, rope2, rope3, rope4, rope5;
var roof;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	bob1 = new BOb(300, 500, 50)
	bob2 = new BOb(350, 500, 50)
	bob3 = new BOb(400, 500, 50)
	bob4 = new BOb(450, 500, 50)
	bob5 = new BOb(500, 500, 50)

    roof = new Roof(width/2, height/4, width/7, 20)
	rope1= new Rope(bob1.body,roof.body, -100, 0)
	rope2= new Rope(bob2.body,roof.body, -50,0)
	rope3= new Rope(bob3.body,roof.body,0,0)
	rope4= new Rope(bob4.body,roof.body, 50, 0)
	rope5= new Rope(bob5.body,roof.body ,100, 0)
	 

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("yellow");
  
 bob1.display();
 bob2.display();
 bob3.display();
 bob4.display();
 bob5.display();
 roof.display();
 rope1.display();
 rope2.display();
 rope3.display();
 rope4.display();
 rope5.display();




}



