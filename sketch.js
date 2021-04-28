var pikachu,pikachuimage
var bg,bgimage
function preload(){
  pikachuimage=loadAnimation("images/p1.jpg","images/p2.jpg","images/p3.jpg","images/p4.jpg")
  bgimage=loadImage("images/bg.jpg")
}
function setup(){
  createCanvas (1000,700)
 
bg=createSprite(500,300,1000,600)
bg.addImage(bgimage)
bg.scale=2.9
bg.velocityX=-5

pikachu=createSprite(70,470)
pikachu.scale=0.6
pikachu.addAnimation("running",pikachuimage)
}
function draw (){
  background("blue")
  if (bg.x < 0){
    bg.x = bg.width/2;
  }
  
  drawSprites()
}