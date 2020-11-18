
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground
var ball,side1,side2
function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
    world = engine.world;
	engine = Engine.create();
	world = engine.world;
	Engine.run(engine);
	ball= new Ball(200,460,10,10);
side1=createSprite(660,565,10,50);
side2=createSprite(600,565,10,50);
ground = new Ground(400,600,1000,20);
}
function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(ball.body,ball.body.position,{x:15,y:-15})
		}
}
function draw() {
background(0);
ground.display(); 
ball.display();
drawSprites();
}
