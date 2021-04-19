var pikachu,pikachuimage
var bg,bgimage
function preload(){
  pikachuimage=loadAnimation("images/p1.jpg","images/p2.jpg","images/p3.jpg","images/p4.jpg")
  bgimage=loadImage("images/bg.jpg")
}
function setup(){
  createCanvas (1000,600)
  pikachu=createSprite(70,530)
  pikachu.scale=0.6
  pikachu.addAnimation("running",pikachuimage)

bg=createSprite(500,300,1000,600)
bg.addImage(bgimage)
}
function draw (){
  background("blue")
  drawSprites()
}