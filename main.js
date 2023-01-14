function setup()
{
    canvas=createCanvas(640,420);
    canvas.center();
}

function preload()
{
    img=loadImage("Bedroom.jpeg")
}

function draw()
{
    image(img, 0,0,640,420);
    fill("#FF0000");
    text("bed",45,75);
    noFill();
    stroke("#FF0000");
    rect(30,60,370,350);

    fill("#FF0000");
    text("dog",200,260);
    noFill();
    stroke("#FF0000");
    rect(200,250,170,320);

    fill("#FF0000");
    text("lamp",70,55);
    noFill();
    stroke("#FF0000");
    rect(50,40,170,210);
}