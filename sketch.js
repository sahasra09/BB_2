
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

//var rain;
var rain=[];
var tillwhen=100;
var drops=[];
var ground;
var umbrella;
var jungle;
function preload(){

    junglep=loadImage("jungle.jpg");
    thunder1=loadImage("1.png");
    thunder2=loadImage("2.png");
    thunder3=loadImage("3.png");
    thunder4=loadImage("4.png")
}

function setup(){
    createCanvas(400,650);
    engine = Engine.create();
    world = engine.world;
 
   if(frameCount%100===0){
    for(i=0;i<tillwhen;i++){
      drops.push(new Rain(random(200,300),-100));
    }
  }
  umbrella=new Umbrella(200,325);

  thunder=createSprite(random(100,600),random(10,30),10,10);
  thunder.visible=false;
}


function draw(){
    Engine.update(engine);
    background("black")
   
    for(i=0;i<tillwhen;i++){
        drops[i].display();
        drops[i].positionup();
    }  
    
    if(frameCount%80===0){
     thunder.visible=true;
      var rand = Math.round(random(1,4));
      thunder.x=random(100,550)
      switch(rand){
        case 1:thunder.addImage(thunder1);
           break;
        case 2:thunder.addImage(thunder2);
           break;
        case 3:thunder.addImage(thunder3);
           break;
        case 4:thunder.addImage(thunder4);
           break;
                 default:break;
       }
       
       thunder.scale = random(0.3,0.6);
       
       }

  
    umbrella.display();
    drawSprites();
    
}   

