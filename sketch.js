var starImg, fairyImg, bgImg;
var fairy , fairyVoice;
var star, starBody;
var world,engine;
var optStars;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg = loadImage("images/star.png");
	fairyImg = loadAnimation("images/fairyImage1.png","images/fairyImage2.png");
	bgImg = loadImage("images/starNight.png");
	fairyVoice = loadSound("sound/JoyMusic.mp3");

}

function setup() {
	createCanvas(800, 750);
    
	engine=Engine.create();
	world=engine.world;

	// fairyVoice.play();

	fairy = createSprite(50,600,20,20)
    fairy.addAnimation("fairyflying",fairyImg);  
	fairy.scale=0.25;

	star = createSprite(400,400,20,20);
	star.addImage(starImg);
	star.scale =0.20;

	starBody = Bodies.circle(650 , 30 , 5 , { restitution: 0.5 , isStatic: true });
	World.add(world, starBody);
	
	console.log(starBody.position.y,starBody.position.x);
	Engine.run(engine);

	fairyVoice.play();

}


function draw() {
  background(bgImg);
  rectMode(CENTER);
  Engine.update(engine);
 
  //fairyVoice.play();

 star.y = starBody.position.y;
 star.x= starBody.position.x;
  
 //console.log('pos'+starBody.position.y,starBody.position.x);

 keyPressed();

 if(keyDown(RIGHT_ARROW)){
     fairy.x  = fairy.x + 20;
    } 
 
 if(keyDown(LEFT_ARROW)){
     fairy.x  = fairy.x - 20;
    }

 if(starBody.position.y > 530){
	 Matter.Body.setStatic(starBody,true)
   }
  console.log('pos'+mouseX,mouseY)
  //console.log(starBody.type)

  drawSprites();

}

function keyPressed() {
	//write code here
	if(keyDown(DOWN_ARROW)){
		Matter.Body.setStatic(starBody,false)
	}
}
