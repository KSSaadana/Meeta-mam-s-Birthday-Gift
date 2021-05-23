var gameState="serve";

var bow , arrow,  background, giftGroup1, giftGroup2, giftGroup3, giftGroup4, arrowGroup;
var gift1, gift2, gift3, gift4;
var bowImage, arrowImage, gift1Image,gift2Image,gift3Image,gift4Image , backgroundImage, bgImg;
var h1, h2, h3, heartImg;

var cake, cakeImg;
var happyBday_song;

function preload(){
  
  backgroundImage = loadImage("background0.png");
  
  arrowImage = loadImage("arrow0.png");
  bowImage = loadImage("bow0.png");
  gift1Image = loadImage("desert.png");
  gift2Image = loadImage("gift.png");
  gift3Image = loadImage("sandwhich.png");
  gift4Image = loadImage("rose.png");
  cakeImg = loadImage("cake.png");
  heartImg=loadImage("heart.png");
  happyBday_song= loadSound("Happy Birthday song.m4a")
}



function setup() {
  createCanvas(640, 600);
  
  //creating background
  background = createSprite(0,0,640,600);
  background.addImage(backgroundImage);
  background.scale = 2.5;
  background.visible=false;
  

 h1 = createSprite(360,100);
  h1.addImage(heartImg);
  h1.scale=0.6;

  h2 = createSprite(100,420);
  h2.addImage(heartImg);
  h2.scale=0.6;
  
  h3 = createSprite(550,450);
  h3.addImage(heartImg);
  h3.scale=0.6;
  
  // creating bow to shoot arrow
  bow = createSprite(500,220,20,50);
  bow.addImage(bowImage); 
  bow.scale = 1;
  bow.visible=false;
  
  // creating bow to shoot arrow
  cake = createSprite(315,408);
  cake.addImage(cakeImg); 
  cake.scale = 0.4;
  cake.visible=false;
  
   score = 0;  
giftGroup1=new Group();
giftGroup2=new Group();
giftGroup3=new Group();
giftGroup4=new Group();
  
arrowGroup=new Group();
  
}

function draw() {
 
  if(gameState==="serve"){
    
  fill("green");
    textSize(25);
  text("Hi Meeta mam,", 70,100);
    fill("purple");
    textSize(20);
    text("Happy Birthday!!!", 85,150);
     fill("blue");
      text("This is my 1st gift for you.", 80,180);
     fill("purple");
 text("This is a game where you have to hunt things which",80,210);
 text("  you like the most.",80,240 );
    fill("blue");
 text("You can hunt the things by pressing 'space' to release",80,270)
 text("  arrow from the bow!", 80,300);
        fill("purple");
    text("Please play the game & let me know ur comments.", 80,330); 
     fill("blue");
  text("Hope you like it! Press 's' to start the game!", 80,360); 
  
}
  if(keyDown("s")){
    gameState="play";
  }
  if(gameState==="play"){
    background.visible=true;
    bow.visible=true;
    h1.visible=false;
    h2.visible=false;
    h3.visible=false;
  // moving ground
    background.velocityX = -3 

    if (background.x < 0){
      background.x = background.width/2;
    }
  
  //moving bow
  bow.y = World.mouseY
  
   if(keyDown("space")){
     createArrow()
   }

  
  //creating continous enemies
  var select_gift = Math.round(random(1,4));
  
  if (World.frameCount % 100 == 0) {
    if (select_gift == 1) {
      Gift1();
    } else if (select_gift == 2) {
      Gift2();
    } else if (select_gift == 3) {
      Gift3();
    } else {
      Gift4();
    }
  }
  
if(arrowGroup.isTouching(giftGroup1)){
  giftGroup1.destroyEach();
  arrowGroup.destroyEach();
  score=score+1;
}
  
  if(arrowGroup.isTouching(giftGroup2)){
  giftGroup2.destroyEach();
  arrowGroup.destroyEach();
  score=score+1;
}
  
  if(arrowGroup.isTouching(giftGroup3)){
  giftGroup3.destroyEach();
  arrowGroup.destroyEach();
  score=score+1;
}
  
  if(arrowGroup.isTouching(giftGroup4)){
  giftGroup4.destroyEach();
  arrowGroup.destroyEach();
  score=score+1;
}

 if(score===15){
  giftGroup1.destroyEach();
  giftGroup2.destroyEach();
  giftGroup3.destroyEach();
  giftGroup4.destroyEach();
  arrowGroup.destroyEach();
  bow.destroy();
  background.velocityX=0;

 }
     if(score===15 && keyDown("e")){
   happyBday_song.play();
 }
  } 
  drawSprites();
    text("Score: "+ score, 520,50);
  
  if(score>14){
    fill("green");
    textSize(25);
  text("Happy birthday Meeta mam!!!", 150,80);
    fill("purple");
    textSize(20);
    text(" I am very lucky to be your student.You are a great teacher.", 50,130);
     fill("blue");
      text("You work hard. Your work is really applaudable.", 75,160);
     fill("purple");
    text("You have taught me so good that I am able to make games on my own.", 5,190); 
     fill("blue");
    text("Thank you so much for your support and encouragement. ", 65,220); 
    fill("purple");
    text("Press 'e' for another surprise!!!", 170,250); 
    
     fill("blue");
    text("I wish you have a wonderful day! Happy birthday mam!!!", 65,280); 
     fill("purple");
    text("Hope you loved the gift. Love you lots!", 145,310); 
  cake.visible=true;
}
}


function Gift1() {
  var gift1 = createSprite(0,Math.round(random(20, 370)), 10, 10);
  gift1.addImage(gift1Image);
  gift1.velocityX = 3;
  gift1.lifetime = 150;
  gift1.scale = 0.14;
  giftGroup1.add(gift1);
  
}

function Gift2() {
  var gift2 = createSprite(0,Math.round(random(20, 370)), 10, 10);
  gift2.addImage(gift2Image);
  gift2.velocityX = 3;
  gift2.lifetime = 150;
  gift2.scale = 0.31;
  giftGroup2.add(gift2);
}

function Gift3() {
  var gift3 = createSprite(0,Math.round(random(20, 370)), 10, 10);
  gift3.addImage(gift3Image);
  gift3.velocityX = 3;
  gift3.lifetime = 150;
  gift3.scale = 0.23;
  giftGroup3.add(gift3);
}

function Gift4() {
  var gift4 = createSprite(0,Math.round(random(20, 370)), 10, 10);
  gift4.addImage(gift4Image);
  gift4.velocityX = 3;     
  gift4.lifetime = 150;
  gift4.scale = 0.3;
  giftGroup4.add(gift4);
}


// Creating  arrows for bow
 function createArrow() {
  var arrow= createSprite(100, 100, 60, 10);
  arrow.addImage(arrowImage);
  arrow.x = 470;
  arrow.y=bow.y;
  arrow.velocityX = -4;
  arrow.lifetime = 100;
  arrow.scale = 0.3;
  
  arrowGroup.add(arrow);
}
