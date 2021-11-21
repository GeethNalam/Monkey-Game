
var monkey , monkey_running, ground;
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score, bananaGroup;
var bananas;
var survivalTime = 0;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
createCanvas(1000, 600);
  
monkey = createSprite(80,315,20,20);
monkey.addAnimation("moving",monkey_running);
monkey.scale = 0.1;
  
  ground = createSprite(400,350,9000,10);
  ground.velocityX = -4;
  ground.x = ground.width/2;
  console.log(ground.x);
  
FoodGroup=createGroup();
}


function draw() {
 
  background(255);
  
  
  if(ground.x<0){
    ground.x = ground.width/2;
  }
  
  if(keyDown("space")&& monkey.y>85){
    monkey.velocityY = -12;
  }
  monkey.velocityY = monkey.velocityY + 0.8;
  
  monkey.collide(ground);
  
  stroke("black")
  textSize(20);
  fill("black");
  survivalTime = Math.ceil(frameCount/frameRate())
  text("Survival Time:" + survivalTime, 100,50);

  drawSprites();
}


function bananas(){
  if(World.frameCount%80===0){
    banana=createSprite(400,200,20,20);
    banana.scale=0.5;
    banana.velocityX = -4;
      banana.addImage(bananaImage);
   
    
   // banana.y=Math.round(random(120,200));
   
   
    banana.setLifetime=300;
    
    FoodGroup.add(banana);
  }
}



