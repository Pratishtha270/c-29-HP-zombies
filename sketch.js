const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

var base;
var leftSide,rightSide;
var bridgeHolder,bridgeHolder1;
var bridge;
var jointPoint,jointLink;
var stones= [];

function setup() {
  createCanvas(windowWidth,windowHeight);
  engine = Engine.create();
  world = engine.world;
  frameRate(80);

  base=new Base(200,690,600,20);
  leftSide=new Base(10,350,20,700);
  rightSide=new Base(490,350,20,700);
  bridgeHolder=new Base(20,350,150,70);
  bridgeHolder1=new Base(480,350,150,70);
  bridge=new Bridge(9,{x:70,y:340});
  jointPoint=new Base(405,350,10,70);

  Matter.Composite.add(bridge.body,jointPoint);
  jointLink=new Link(bridge,jointPoint);

}

function draw() {
  background(51);
  Engine.update(engine);

  base.show();
  rightSide.show();
  leftSide.show();
  bridgeHolder.show();
  bridgeHolder1.show();
  bridge.show();
  jointPoint.show();

  for (var i=0;i <= 8; i++){
    var x=random(width/2-200,width/2+300);
    var y=random(-10,140);
    var stone=new Stone(x,y,80,80);
    stones.push(stone);
  }

}
