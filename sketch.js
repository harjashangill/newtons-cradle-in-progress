const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;



var rope1
var roof;
var ball1
var ball2
var ball3
var ball4
var ball5
var con
var con2
var con3
var con4
var con4
//Create multiple bobs, mulitple ropes varibale here


function setup() {
	createCanvas(800, 600);
	rectMode(CENTER);



	engine = Engine.create();
	world = engine.world;

	
	rope1 = new rope(roof,ball1,-80,0)

	
	


	var roof_options={
		isStatic:true			
	}

	var circle_options={
		restitution:0.3
	}
	roof = Bodies.rectangle(400,100,230,20,roof_options);
    World.add(world,roof);

	ball1 = Bodies.circle(300,300,25,circle_options)
	World.add(world,ball1)
	ball2 = Bodies.circle(350,300,25,circle_options)
	World.add(world,ball2)
	ball3 = Bodies.circle(400,300,25,circle_options)
	World.add(world,ball3)
	ball4 = Bodies.circle(450,300,25,circle_options)
	World.add(world,ball4)
	ball5 = Bodies.circle(500,300,25,circle_options)
	World.add(world,ball5)
	Engine.run(engine);
	
	rectMode(CENTER);
	
}

function draw() {
  
  background("#99004d");

  rect(roof.position.x,roof.position.y,230,20);

  //call display() to show ropes here
  rope1.show()
  //create ellipse shape for multiple bobs here
ellipse(ball1.position.x,ball1.position.y,50)
ellipse(ball2.position.x,ball2.position.y,50)
ellipse(ball3.position.x,ball3.position.y,50)
ellipse(ball4.position.x,ball4.position.y,50)
ellipse(ball5.position.x,ball5.position.y,50)
keyPressed()

}

//Write keyPressed function and apply force on pressing up_arrow key on the first bob.
function keyPressed(){


if(keyCode==RIGHT_ARROW)
    {
      Matter.Body.applyForce(ball1,{x:0,y:0},{x:-0.001,y:0})
	}
}