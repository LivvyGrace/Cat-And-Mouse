var cat, catImg, mouseImg, gardenImage;



function preload() {
    //load the images here

gardenImage = loadImage("garden.png");
mouseImg1 = loadAnimation ("mouse1.png");
catImg1 = loadAnimation("cat1.png");
catImg2 = loadAnimation("cat2.png","cat3.png");
mouseImg2 = loadAnimation("mouse2.png","mouse3.png","mouse4.png");


}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here

    

garden = createSprite(160,180);
garden.addImage("garden.png", gardenImage);

cat = createSprite(200,20);
cat.addImage("cat1.png", catImg1);

}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here


}
