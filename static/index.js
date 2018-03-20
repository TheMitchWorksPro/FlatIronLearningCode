/* Notes

  set background color P5 (initiual search)

  https://p5js.org/reference/#/p5/background
  https://p5js.org/examples/hello-p5-simple-shapes.html
  https://p5js.org/reference/#/p5/stroke
  https://p5js.org/reference/#/p5/fill

  Techonology:  P5

  color: RGB
  rect(left-corner(x,y),w,ht)

*/

function setup()
{
  createCanvas(600,600);
  frameRate(30)
}

function draw()
{
  background(0,200,0)
  // Set colors
  fill(200, 200, 0);
  strokeWeight(6);
  stroke(127, 63, 120);

  // A rectangle
  rect(200, 200, 200, 200);
  fill(0,0,2000)
  ellipse(300, 300, 180, 180);

}

function mitchShape(upperLeftX, upperLeftY)
{
  x1 = upperLeftX;
  y1 = upperLeftY;
  x2 = x1 + 100
  y2 = y1 + 100
  
  fill(200, 200, 0);
  strokeWeight(6);
  stroke(127, 63, 120);

  // A rectangle
  rect(200, 200, 200, 200);
  fill(0,0,2000)
  ellipse(300, 300, 180, 180);
  
}

 function mousePressed()
{
  console.log("MOUSE PRESSED!")
  console.log(mouseButton)
}

function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}



