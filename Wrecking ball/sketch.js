const Engine = Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
const Constraint=Matter.Constraint;

var engine,world;
var ground,box1,box2,box3,box4,ball;

function setup(){
    createCanvas(2000,800);
    engine=Engine.create();
    world=engine.world;

    ground=new Ground(1000,600,2000,20);
    
    box1 = new Box(800,100,70,70);
    box2 = new Box(800,200,70,70);
    box3 = new Box(800,300,70,70);
    box4 = new Box(800,400,70,70);

    ball = new Ball(200,200,80,80);

    rope = new Rope(ball.body,{x:500,y:250});
    

}

function draw(){
    background("white");

    Engine.update(engine);

    ground.display();

    box1.display();
    box2.display();
    box3.display();
    box4.display();

    ball.display(); 
}

function mouseDragged(){
    Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY});
}