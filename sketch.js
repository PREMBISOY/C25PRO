
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload(){
	
	dimg = loadImage('sprites/dustbin.png');
    paperA = loadImage('sprites/dustbin.png');
}

function setup() {
	createCanvas(1200, 700);

var dustbinimg = createSprite(925,620,60,100);
dustbinimg.addImage("dustbinimg",dimg);
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	
	Engine.run(engine);
	paperObject= new paper(100,100);
	Ground1 = new ground(600,695,1200,5);
	binb = new Dustbin(930,680,100,20);
	binr = new Dustbin(980,640,20,100);
	binl = new Dustbin(880,640,20,100);

	//   var subb = createSprite(930,680,100,20);
	//   var subr = createSprite(980,640,20,100);
	//   var subl = createSprite(880,640,20,100);


  
}


function draw() {
	background(255);
	Engine.update(engine);
	
	
  
binb.display();
binr.display();
binl.display();
paperObject.display();
Ground1.display()
  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
     Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:20,y:-19})


	}

}

