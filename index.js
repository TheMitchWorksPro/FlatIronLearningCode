/* Notes

  Flatiron School Test URL:
  https://repl.it/repls/GentleFrizzyCubase

  set background color P5 (initiual search)
  https://p5js.org/reference/#/p5/background
  https://p5js.org/examples/hello-p5-simple-shapes.html
  https://p5js.org/reference/#/p5/stroke
  https://p5js.org/reference/#/p5/fill
  https://p5js.org/reference/#/p5/text
  https://github.com/processing/p5.js/issues/459
  https://p5js.org/reference/#p5/getURL
  https://p5js.org/reference/#p5/getURLParams

  Techonology:  P5
  color: RGB
  rect(left-corner(x,y),w,ht)

*/

/* note:
   these globals were moved later in code
   and still worked

   To run this code, use these parameters on the URL:
   file:///Users/mitchmac/Desktop/flat-iron-code_2018-03-17/index.html?runModeToggle=0&runModeToggle2=1
     use 0 or 1 for first paramater, and 1, 2, or 3 for second parameter
*/

var initCircleSize = 10;    
var circleSizeLimit = 180;
var circleSize = initCircleSize
var squareSize = circleSizeLimit + 20
var canvasSize = 600;
var cRed = 50;
var cGreen = 50;
var cBlue = 50;
var getLargerOnClick = false;
var colorString = "";
var colorStringNew = "";

// initialize (set them in draw())
var animationSpeed = 0
var runModeToggle = 0
var runModeToggle2 = 0

// Animation code starts here
function setup()
{
  createCanvas(canvasSize, canvasSize);
  frameRate(30);
  /* draw is called 30 times a second */
}

function draw()
{

	// configuration section
	var zParams = getURLParams(); 
	animationSpeed = 10;
	runModeToggle = zParams.runModeToggle
	                    // toggles minor variation on click behavior 
	runModeToggle2 = zParams.runModeToggle2 
	                    // controls circle size settings for how it grows

	// logic for what toggle2 options actually do:
	if (runModeToggle2 == 1) {
		// animationSpeed = default
		initCircleSize = 180;
		circleSizeLimit = squareSize;
	}

	if (runModeToggle2 == 2) {
		animationSpeed = 5;
		circleSizeLimit = canvasSize;
	}

	if (runModeToggle2 == 3) {
		animationSpeed = 2;
		circleSizeLimit = squareSize;
	}	

  background(0,200,0);
  // Set Background Colors (RGB)

  textSize(32);
  text("P5 Interactivity Demo", 10, 30);
  textSize(15)
  text("runModeToggle: " + zParams.runModeToggle +
  	    "  runModeToggle2: " + zParams.runModeToggle2, 10, 50);
  
  var xy1 = 75;
  var xy2 = xy1 + 250;

  circleInSquare(xy1, xy1);
  circleInSquare(xy1, xy2);
  circleInSquare(xy2, xy1);
  circleInSquare(xy2, xy2);

  if (getLargerOnClick === true)  // === for t/f, else use ==
  {
 	  circleSize = circleSize + animationSpeed;
  
	  if (circleSize > circleSizeLimit)
	  {
	    circleSize = initCircleSize;
	  }
  }
}

function mousePressed()
{
  /* test code: logs activities to console */
  // console.log("MOUSE PRESSED!");
  console.log(mouseButton + " mouse click");
  
  /* changing color to purple on mouse press */
  /* used in earlier version:
  cRed = 200;
  cGreen = 120;
  cBlue = 255;
  */
  
  // runModeToggle Controls Growsh of cercle behavior here:
  // -------------------------------------------------------
  /* toggle increase cicle size switch during animation */
  // this variation: 
  //   * one click: stops circle increasing
  //   * next click starts it again
  //   * ... and so on ... (alternates the click behavior)

  if (runModeToggle == 0) 
  {
	  if (getLargerOnClick === true)
	  {
	    getLargerOnClick = false;
	  } else
	  {
	    getLargerOnClick = true;
	  }
  }
	 
  /* enhancement so that each click causes
     circle to grow and change colors instead
     of previously described alternate behavior
  */
  if (runModeToggle == 1)
  {
	  if (getLargerOnClick === false)
	  {
	    getLargerOnClick = true;
	  }
  }

  /* randomly generate circle fill colors */
  cRed = getRandomArbitrary(0, 255);
  cGreen = getRandomArbitrary(0, 255);
  cBlue = getRandomArbitrary(0, 255);
  
  colorStringNew = String(int(cRed)) + String(int(cGreen)) + 
                   String(int(cBlue));
  if (colorString == colorStringNew)
  {
    console.log("Color Used Previously!");
  } else
  {
    console.log("New Color");
  }
  colorString = colorStringNew;
  console.log(colorString);

}

function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}

/* function used to draw circle in square */
function circleInSquare(upperLeftX, upperLeftY)
{
  var eModifer = 100;

  /* set fill, then border width, then border color,
     then draw rectangle (square) w/ these settings
     then draw elipse (circle) w/ these colors
  */

  fill(200, 200, 0);
  strokeWeight(6);
  stroke(127, 63, 120);
  rect(upperLeftX, upperLeftY, squareSize, squareSize);
  fill(cRed,cGreen,cBlue);
  ellipse(upperLeftX + eModifer, upperLeftY + eModifer, circleSize, circleSize);
  
}