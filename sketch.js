var PLAY = 1;
var END = 0;
var gameState = PLAY;

var basket,basketball


var score=0


function preload(){
  basketImage=loadImage("basket.png")
  basketballImage=loadImage("basketball.png")
  backgroundImage=loadImage("basketball-court.jpg")
}

function setup() {
  createCanvas(800,500);
  basket=createSprite(560, 100, 20);
  basket.addImage(basketImage)
  basket.scale=0.35

  basket1=createSprite(680,100,20)
  basket1.scale=0.5
  basket1.visible=false;

  basket2=createSprite(590,130,height/2,10)
  basket2.scale=0.5
  basket2.visible=false

  basketball=createSprite(100,450)
  basketball.addImage(basketballImage)
  basketball.scale=0.03

 

 

  score=0
  

}

function draw() {
 
  background(backgroundImage);  

  textSize(25)
  fill("pink")

  text("Score: "+ score, 100,20); 

  if(keyDown("space") && basketball.y >= 109) {

    basketball.velocityY = -14;
    basketball.velocityX=11
  }

  if(keyDown("down")){
    basketball.velocityY=10
    
  }

  if(basketball.isTouching(basket1)){
    score = score + Math.round(getFrameRate()/60);
  }
  
  //basketball.collide(basket);
  basketball.collide(basket1);
  basketball.collide(basket2)
  



  if(keyDown("up")){
    reset();
  }
  


  

  


  drawSprites();
}
