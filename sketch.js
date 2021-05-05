
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground
var line1,line2,line3
var ball

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:false} );
	World.add(world, ground);

	line1 = new dustbin(600,700,50,200);
	line2 = new dustbin(650,700,200,50);
	line3 = new dustbin(700,700,50,200);

	var ball_options = {
		isStatic:false ,
        restitution:0.3,
		friction:0.5,
		density:1.2
    }

    ball = Bodies.circle(200,100,20,ball_options);
    World.add(world,ball);

	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background(0);
  line1.display();
  line2.display();
  line3.display();
  ball.display();
  drawSprites();
 
}

function keyPressed (){

	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(ball.body,ball.body.position,{x:85,y:-85});
	}
}

