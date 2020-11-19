const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;

var ground;
var boy,boyimg;
var tree;
var stone;
var mango1,mango2,mango3,mango4,mango5,mango6,mango7,mango8,mango9,mango10;
var rope;

function preload()
{
    boyimg=loadImage("boy.png");
    tree=loadImage("tree.png");
}

function setup() {
	createCanvas(1200, 550);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

    ground = new Ground(600,520,1200,10);

    boy=createSprite(400,460,50,50);
    boy.addImage(boyimg);
    boy.scale=0.1;
    
 

    stone=new Stone(335,400,30);


	mango1=new Mango(1100,100,30);
	mango2=new Mango(770,130,30);
	mango3=new Mango(1010,140,30);
	mango4=new Mango(1000,70,30);
    mango5=new Mango(1100,70,30);
    mango6=new Mango(1000,230,30);
    mango7=new Mango(900,230,40);
    mango8=new Mango(1120,200,40);
    mango9=new Mango(875,75,40);
    mango10=new Mango(775,250,40);

    rope=new Rope(stone.body,{x:335,y:400});

  
}

function draw(){
  background("grey");

   Engine.update(engine);   

  rectMode(CENTER);
  textSize(20);
  fill("white");
  text("PRESS THE SPACE BUTTON TO PLAY AGAIN!!",50,50)

  ground.display();

  image(tree,700,0,600,520);


  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();

  detectCollision(stone,mango1);
  detectCollision(stone,mango2);
  detectCollision(stone,mango3);
  detectCollision(stone,mango4);
  detectCollision(stone,mango5);
  detectCollision(stone,mango6);
  detectCollision(stone,mango7);
  detectCollision(stone,mango8);
  detectCollision(stone,mango9);
  detectCollision(stone,mango10);

  rope.display();

  drawSprites();

  stone.display();

}

function mouseDragged(){
    Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
    rope.fly();
}

function keyPressed(){
    if(keyCode===32){
		Matter.Body.setPosition(stone.body,{x:235,y:420})
        rope.attach(stone.body);
    }
}

function detectCollision(lstone,lmango){
	mangoBodyPosition=lmango.body.position
	stoneBodyPosition=lstone.body.position

var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y);

	if(distance<=lmango.radius+lstone.radius){

		Matter.Body.setStatic(lmango.body,false);
	}
}

