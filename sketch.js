const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var hammer1;
var plane1;
var stone1;
var rubber1;
var iron1;
var sand1, sand2, sand3, sand4, sand5, sand6, sand7, sand8, sand9, sand10;

function setup() {
	createCanvas(1800, 700);

	engine = Engine.create();
	world = engine.world;

	// bodies
	hammer1 = new Hammer(400, 350);
	plane1 = new Plane(900, 690);
	stone1 = new Stone(300, 650);
	rubber1 = new Rubber(600, 680);
  iron1 = new Iron(1200, 650);
  sand1 = new Sand(900, 650);
  sand2 = new Sand(400, 650);
  sand3 = new Sand(450, 650);
  sand4 = new Sand(500, 650);
  sand5 = new Sand(1500, 650);
  sand6 = new Sand(600, 650);
  sand7 = new Sand(950, 650);
  sand8 = new Sand(1100, 650);
  sand9 = new Sand(1800, 650);
  sand10 = new Sand(1400, 650);
}

function draw() {
  rectMode(CENTER);
  ellipseMode(CENTER);
  background("lightblue");
  Engine.update(engine);

  // display
  hammer1.display();
  plane1.display();
  stone1.display();
  rubber1.display();
  iron1.display();
  sand1.display();
  sand2.display();
  sand3.display();
  sand4.display();
  sand5.display();
  sand6.display();
  sand7.display();
  sand8.display();
  sand9.display();
  sand10.display();
  
  drawSprites();
}