var PLAY=1
var END=0
var gamestate=PLAY

var pikachu,pikachuimage,pikachustop
var bg,bgimage
var ghostGroup,ghost;
var haunter,gengar,gastly
function preload(){
  pikachuimage=loadAnimation("images/p1.jpg","images/p2.jpg","images/p3.jpg","images/p4.jpg")
  pikachustop=loadAnimation("images/p2.jpg")
  bgimage=loadImage("images/bg.jpg")
  gastlyimage=loadAnimation("images/gastly1.png","images/gastly2.png","images/gastly3.png","images/gastly4.png")
  haunterimage=loadAnimation("images/haunter1.png","images/haunter2.png","images/haunter3.png","images/haunter4.png","images/haunter5.png")
 gengarimage=loadAnimation("images/gengar1.png","images/gengar2.png","images/gengar3.png","images/gengar4.png","images/gengar5.png")
}
function setup(){
  createCanvas (1000,700)
 
bg=createSprite(500,300,1000,600)
bg.addImage(bgimage)
bg.scale=2.9


pikachu=createSprite(70,470)
pikachu.scale=0.6
pikachu.addAnimation("running",pikachuimage)
pikachu.addAnimation("stop",pikachustop)
gastlyGroup=new Group()
gengarGroup=new Group()
haunterGroup=new Group()
}
function draw (){
  background("blue")
  if (gamestate===PLAY){
    if (bg.x < 0){
      bg.x = bg.width/2;
    }
    bg.velocityX=-5
    var r = Math.round(random(1,3))
  
    switch(r){
      case 1:spawngastly()
      break;
      case 2:spawngengar()
      break;
      case 3:spawnhaunter()
      break;
    }
    if (pikachu.isTouching(gengarGroup)||pikachu.isTouching(gastlyGroup)||pikachu.isTouching(haunterGroup)){
      gamestate=END
    }
  }
  else if (gamestate===END){
    bg.velocityX=0
pikachu.changeAnimation("stop",pikachustop)
gastlyGroup.setLifetimeEach(-1)
gengarGroup.setLifetimeEach(-1)
haunterGroup.setLifetimeEach(-1)
gastlyGroup.setVelocityXEach(0)
gengarGroup.setVelocityXEach(0)
haunterGroup.setVelocityXEach(0)
  }
 

  
  drawSprites()
}
function spawngastly(){
  if(World.frameCount % 100 === 0) {
    var gastly = createSprite(1000,random(370,430),10,40);
   // gastly.shapeColor="blue"
    gastly.addAnimation("gas",gastlyimage)
    gastly .velocityX = -6;            
    gastly .scale = 0.5;
    gastly.lifetime = 170;
    gastlyGroup.add(gastly); 
  }
}
function spawngengar(){
  if(World.frameCount % 100 === 0) {
    var gengar = createSprite(1000,470,10,40);
   // gengar.shapeColor="red"
    gengar.addAnimation("gen",gengarimage)
    gengar .velocityX = -6;            
    gengar .scale = 0.35;
    gengar.lifetime = 170;
    gengarGroup.add(gengar); 
  }
}
function spawnhaunter(){
  if(World.frameCount % 100 === 0) {
    var haunter = createSprite(1000,random(370,430),10,40);
    haunter.addAnimation("haun",haunterimage)
    haunter.velocityX = -6;            
    haunter.scale = 0.5;
    haunter.lifetime = 170;
    haunterGroup.add(haunter); 
  }
}