var woman1
var womanc
var Path
var thing

function preload(){
woman1= loadAnimation("woman1.png","woman2.png","woman3.png")
background1= loadImage("background.jpg");
thingImgl=loadImage("Thing.png");
}

function setup() {
createCanvas(400,400);   
path=createSprite(0,0,600,600);
path.addImage(background1);
path.scale=2.4
path.x = path.width /2;
path.velocityX=-2;


 womanc=createSprite(10,300,20,50);
 womanc.addAnimation("womanc",woman1);
 womanc.scale=0.4

 
} 

function draw() {
   background(0);
   path.velocityX=-5;
   if (path.x < 0){
    path.x = path.width/2;}

    edges= createEdgeSprites();
    womanc.collide(edges);

    if(keyDown("UP_ARROW"))
    {
        womanc.velocityY=4
    }
    if(keyDown("DOWN_ARROW"))
    {
        womanc.velocityY=-4
    }

if(keyDown("space")&& womanc.y >= 100) {
    womanc.velocityY = -13;
  }
  womanc.velocityY = womanc.velocityY + 0.8;

SpawnThings();

 drawSprites();
}


}
function SpawnThings()
{ if(frameCount%100===0)
    {
   var thing=createSprite(random(100,300),random(300,350),5,5)
   thing.addImage("thing",thingImgl)
   thing.scale=0.2
   thing.velocityX=-2
    }
}
