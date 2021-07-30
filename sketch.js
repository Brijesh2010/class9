var sprite


function setup() {
  createCanvas(400,400);

  
  sprite = createSprite(200,200,30,30)
  sprite.shapeColor = 'white'
}

function draw() 
{
  background(30);

  if (keyIsDown(RIGHT_ARROW)) 
  { sprite.x = sprite.x +5; }

  if (keyIsDown(LEFT_ARROW)) 
  { sprite.x = sprite.x -5; }

  if (keyIsDown(UP_ARROW)) 
  { sprite.y = sprite.y -5; }

  if (keyIsDown(DOWN_ARROW)) 
  { sprite.y = sprite.y +5; }

  drawSprites();

}




