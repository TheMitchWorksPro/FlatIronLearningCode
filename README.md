# Flatiron Learning Code - P5 JS
Learning code created in connection with The Flatiron School in NYC.

This project was initiated after attending a 2 day free class through the [Access Labs](https://www.accesslabs.org/) 
initiative of The [Flatiron School](https://flatironschool.com).  Different versions of the P5 JavaScript code are 
presented in this project:

/[static](./static/) - first they show us in class how to create the [static shape](http://htmlpreview.github.com/?https://github.com/TheMitchWorksPro/FlatIronLearningCode/blob/master/static/index.html) that will be animated by the end of class<br/>
/[original](./original/) - the [animated circle](http://htmlpreview.github.com/?https://github.com/TheMitchWorksPro/FlatIronLearningCode/blob/master/original/index.html) in a box that got created by the end of the 2 hour class<br/>
/ - TheMitchWorksPro coding enhancements and modifications I made after class are in the root folder
+ this final version reuses the shape in a function
+ provides some different behaviors for the animation
+ integrates the behavior with URL parameters
+ under the covers, it reduces the risk of the same color being randomly generated twice in a row

To test the enhanced code, you will need to download the files from the root of this project, and test locally with parameters in the URL (the page does not work right unless the parameters are set).  Instructions are provided in the comments of `index.js`.  

To test the final code, these hyperlinks include appropriate parameters to test all the variations:
1. [circle behavior 1](http://htmlpreview.github.com/?https://github.com/TheMitchWorksPro/FlatIronLearningCode/blob/master/index.html?arg1=0&runModeToggle=1&runModeToggle2=1), each click affects the circle and randomly changes its color
2. [circle behavior 1](http://htmlpreview.github.com/?https://github.com/TheMitchWorksPro/FlatIronLearningCode/blob/master/index.html?arg1=0&runModeToggle=0&runModeToggle2=1), same as previous, but click once to stop and again to continue animation
1. [circle behavior 2](http://htmlpreview.github.com/?https://github.com/TheMitchWorksPro/FlatIronLearningCode/blob/master/index.html?arg1=0&runModeToggle=1&runModeToggle2=2), each click affects the circle and randomly changes its color
2. [circle behavior 2](http://htmlpreview.github.com/?https://github.com/TheMitchWorksPro/FlatIronLearningCode/blob/master/index.html?arg1=0&runModeToggle=0&runModeToggle2=2), same as previous, but click once to stop and again to continue animation
1. [circle behavior 3](http://htmlpreview.github.com/?https://github.com/TheMitchWorksPro/FlatIronLearningCode/blob/master/index.html?arg1=0&runModeToggle=1&runModeToggle2=3), each click affects the circle and randomly changes its color
2. [circle behavior 3](http://htmlpreview.github.com/?https://github.com/TheMitchWorksPro/FlatIronLearningCode/blob/master/index.html?arg1=0&runModeToggle=0&runModeToggle2=3), same as previous, but click once to stop and again to continue animation

<!--
did not work:
[circle behavior 1](http://htmlpreview.github.com/?https://github.com/TheMitchWorksPro/FlatIronLearningCode/blob/master/index.html?runModeToggle=1&runModeToggle2=1)
(tried putting url in quotes and escaping second ?)
<br/>
[circle behavior 1](http://htmlpreview.github.com/?./blob/master/index.html?arg1=0&runModeToggle=1&runModeToggle2=1)

  samples from looking at stackoverflow
  (https://rawgit.com/TheMitchWorksPro/FlatIronLearningCode/blob/master/index.html?runModeToggle=1&runModeToggle2=1)
  (http://htmlpreview.github.com/?https://github.com/ ...)
-->

## Testing This Code
There is a [web tool](https://repl.it/repls/GentleFrizzyCubase) you can use for free to experiment with the original code 
and the static code provided in this project.  This UI was provided by the Flatiron school.  Note that the enhancements 
made in the tmwp version will not run in this web UI, but you can see the code in action by following the instructions 
in the .js file or clicking the demo links above.

![Mitch](https://github.com/TheMitchWorksPro/TestProject/blob/master/html_mitch_logo/Mitch_LogoBG.gif)
