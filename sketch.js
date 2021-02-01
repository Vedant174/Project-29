
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ground,tree,stone,boyIMG,boy,mango1,mango2,mango3,mango4,mango5,mango6,mango7,mango8,chain,score,tries;
//var gameState;
function preload()
{
	polygonImg = loadImage("polygon.png");
}

function setup() {
	createCanvas(1200, 700);
	
	//score = 0;
	//gameState = "play";
	//tries = 0;

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(600,550,220,10);
	ground2 = new Ground(750,400,150,10);
	//1st Platform
	//Level 1
	block1 = new Box(510,480,30,30);
	block2 = new Box(540,480,30,30);
	block3 = new Box(570,480,30,30);
	block4 = new Box(600,480,30,30);
	block5 = new Box(630,480,30,30);
	block6 = new Box(660,480,30,30);
	block7 = new Box(690,480,30,30);
	//Level 2
	block8 = new Box(540,450,30,30);
	block9 = new Box(570,450,30,30);
	block10 = new Box(600,450,30,30);
	block11 = new Box(630,450,30,30);
	block12 = new Box(660,450,30,30);
	//Level 3
	block13 = new Box(570,420,30,30);
	block14 = new Box(600,420,30,30);
	block15 = new Box(630,420,30,30);
	//Top
	block16 = new Box(600,390,30,30);

	//2nd Platform
	//Level 1
	blockA = new Box(705,350,30,30);
	blockB = new Box(735,350,30,30);
	blockC = new Box(765,350,30,30);
	blockD = new Box(795,350,30,30);
	//Level 2
	blockE = new Box(735,320,30,30);
	blockF = new Box(765,320,30,30);
	//Top
	blockG = new Box(750,290,30,30);

	polygon = Bodies.circle(50,200,20);
	World.add(world,polygon);

	slingShot = new Slingshot(polygon,{x:200,y:200});

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(200);

  drawSprites();

  ground.display();
  ground2.display();
  
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();
  block16.display();

  blockA.display();
  blockB.display();
  blockC.display();
  blockD.display();
  blockE.display();
  blockF.display();
  blockG.display();

  push();
  fill("yellow");
  imageMode(CENTER);
  image(polygonImg, polygon.position.x, polygon.position.y, 40, 40);
  pop();
  

 slingShot.display();


}

function mouseDragged(){
    Matter.Body.setPosition(polygon, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingShot.fly();
}
function keyPressed(){
    if(keyCode===32){
        slingShot.attach(polygon);
    }
}