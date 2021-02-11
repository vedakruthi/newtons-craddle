
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var rope1;
var bob1;
var bob2;
var bob3;
var bob4;
var bob5;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = engine.create();
	World = engine.world;

	//Create the Bodies Here.
	bob1=new bob1(500,200,50);
	rope1=new rope1();


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  bob1.display();
  drawSprites();
 
}



