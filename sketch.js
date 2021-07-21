

var  shipx, ship,ship_moving ,edges;
var sea;

function preload(){
  shipx = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
  sea = loadImage("sea.png")
}

function setup(){
  createCanvas(9000,2000);
  
  // creating ship
  ship = createSprite(50,160,20,50);
  ship.addAnimation("moving", shipx);
  edges = createEdgeSprites();
  ship.scale = 0.1;
  ship.x = 50


  
}


function draw(){
  //set background color 
  background("white");
  
  //logging the y position of the ship
  console.log(ship.y)
  
  drawSprites();
}