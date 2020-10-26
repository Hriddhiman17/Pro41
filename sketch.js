const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;

drops = [];
var maxDrops = 100;
var umbrella;
var lightning1, lightning_img1, lightning_img2, lightning_img3;

function preload(){
lightning_img1 = loadImage("1.png");
lightning_img2 = loadImage("2.png");
lightning_img3 = loadImage("3.png");
lightning_img4 = loadImage("4.png");
}

function setup() {
	createCanvas(400,760);
	engine = Engine.create();
	world = engine.world;
    Engine.run(engine);
    if(frameCount % 200 === 0){
     for(var i = 0; i<maxDrops;i++){
    drops.push(new Drops(random(0,400),random(0,400)));
    drops.lifetime = 90;
       }

    umbrella = new Umbrella(200,600);

    

    }
}

function draw(){
    background("black");
  
    for(var i = 0; i<maxDrops;i++){
      drops[i].showDrops();
      drops[i].updateDrops();
}
umbrella.display();

lightning();
drawSprites();

}   

function lightning(){
if(frameCount % 12 === 0){ 
    lightning1 = createSprite(random(0, 400),10);

    var rand = Math.round(random(1,4));
    switch(rand) {
      case 1: lightning1.addImage(lightning_img1);
              break;
      case 2: lightning1.addImage(lightning_img2);
              break;    
      case 3: lightning1.addImage(lightning_img3);
              break;
      case 4: lightning1.addImage(lightning_img4);
              break;
          default: break;
          
    }
    lightning1.scale = 0.6;
    lightning1.lifetime = 15;
}


}

