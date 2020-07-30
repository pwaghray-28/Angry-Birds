const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(200,350,50,50);
    pig1 = new Pig(250,350)
    box2 = new Box(300,350,50,50);
    log1 = new Log (250,320,PI/2,200)
    box3 = new Box(200,300,50,50);
    pig2 = new Pig(250,300)
    box4 = new Box(300,300,50,50)
    log2 = new Log(250,280,PI/2,200)
    box5 = new Box(250,260,50,50)
    ground = new Ground(200,height,400,20)
    log3 = new Log(223,260,PI/6,100)
    log4 = new Log(278,260,-PI/6,100)
    bird = new Bird(100,100);
}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    pig1.display();
    log1.display();
    ground.display();
    box3.display();
    pig2.display();
    box4.display();
    log2.display();
    box5.display();
    log3.display();
    log4.display();
    bird.display();
}