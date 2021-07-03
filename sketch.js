const Engine = Matter.Engine;
const World = Matter.World;
const Bodies =  Matter.Bodies;
const Constraint = Matter.Constraint;

var BackgroundImage, bg;
var olaf, olafImg;
var music;
var text,textImg;
var world;
var snow=[];
var snowfall = 100;

function preload(){
 BackgroundImage = loadImage("snowy.jpg")
 music = loadSound("Some things never change.mp3")
 olafImg = loadImage("snowman.png");
 textImg = loadImage("snowyText.png");

}
function setup() {
  createCanvas(1536,719);

    music.loop();
  
    olaf = createSprite(740,500,20,20);
    olaf.addImage(olafImg);
    olaf.scale = 0.5;

    text = createSprite(1300,650,10,10);
    text.addImage(textImg);
    text.scale = 1;
    
    
    if(frameCount % 275 === 0){
     for(var i=0; i<snowfall; i++){
     snow.push(new snowflake(random(0,1536), random(0,719)));
     }
   }
}

function draw() {
  background(BackgroundImage); 

    for(var i = 0;i < snowfall; i++){
    snow[i].display();
    snow[i].changePosition();
    }    

  drawSprites();
}
