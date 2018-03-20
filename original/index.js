/* Notes

  set background color P5 (initiual search)

  https://p5js.org/reference/#/p5/background
  https://p5js.org/examples/hello-p5-simple-shapes.html
  https://p5js.org/reference/#/p5/stroke
  https://p5js.org/reference/#/p5/fill

  Techonology:  P5

  color: RGB
  rect(left-corner(x,y),w,ht)

  Created in class (_lesson3)

*/


var circleSize = 180;
var canvasSize = 600;
var cRed = 50;
var cGreen = 50;
var cBlue = 50;

function setup()
{
  createCanvas(canvasSize, canvasSize);
  frameRate(30);
  /* draw is called 30 times a second */
}

function draw()
{

  background(0,200,0);
  // Set colors
  fill(200, 200, 0);
  strokeWeight(6);
  stroke(127, 63, 120);

  // A rectangle
  rect(200, 200, 200, 200);
  fill(cRed,cGreen,cBlue);
  ellipse(300, 300, circleSize, circleSize);
  circleSize = circleSize + 20;
  if (circleSize > canvasSize) {
    circleSize = 180;
  }

}

function mousePressed()
{
  console.log("MOUSE PRESSED!");
  console.log(mouseButton);
  
  /* changing color to purple on mouse press */
  /* used in earlier version:
  cRed = 200;
  cGreen = 120;
  cBlue = 255;
  */
  cRed = getRandomArbitrary(0, 255)
  cGreen = getRandomArbitrary(0, 255)
  cBlue = getRandomArbitrary(0, 255)
}

function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}
