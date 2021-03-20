const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
var engine,world;
var ground,box1,box2;

function setup(){
  var canvas=createCanvas(400,400);
  engine=Engine.create();
  world=engine.world;
  var ground_option={
    isStatic:true
  }
  ground=Bodies.rectangle(200,390,200,20,ground_option);
  World.add(world,ground);
  box1 = new Box(200,300,50,50);
  box2 = new Box(240,100,50,100);
}
function draw()
{
  background("green");
  Engine.update(engine);
  rectMode(CENTER);
    rect(ground.position.x,ground.position.y,400,20);
 
 box1.display(); 
 box2.display(); 
}
