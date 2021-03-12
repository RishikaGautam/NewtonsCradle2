const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const MouseConstraint = Matter.MouseConstraint;
const Mouse = Matter.Mouse;

var blob1, blob2, blob3, blob4, blob5;
var sling1, sling2, sling3, sling4, sling5;

function setup() {
  createCanvas(windowWidth/2, windowHeight/2);
  engine = Engine.create();
  world = engine.world;

  let canvasmouse = Mouse.create(canvas.elt);
  canvasmouse.pixelRatio = pixelDensity();
  let options = {
    mouse: canvasmouse
  };
  mConstraint = MouseConstraint.create(engine, options);
  World.add(world, mConstraint)

  blob1 = new Pendulum(340, 400, 'white');
  blob2 = new Pendulum(400, 400, 'white');
  blob3 = new Pendulum(460, 400, 'white');
  blob4 = new Pendulum(520, 400, 'white');
  blob5 = new Pendulum(580, 400, 'white');

  sling1 = new Sling(blob1.body,{x:340, y:100});
  sling2 = new Sling(blob2.body,{x:400, y:100});
  sling3 = new Sling(blob3.body,{x:460, y:100});
  sling4 = new Sling(blob4.body,{x:520, y:100});
  sling5 = new Sling(blob5.body,{x:580, y:100});


}

function draw() {
  Engine.update(engine);
  background(0,0,0);  
  blob1.display();
  blob2.display();
  blob3.display();
  blob4.display();
  blob5.display();

  sling1.display();
  sling2.display();
  sling3.display();
  sling4.display();
  sling5.display();

  drawSprites();
}

function mouseDragged(){
  Matter.Body.setPosition(blob1.body, {x: mouseX, y: mouseY} );
}