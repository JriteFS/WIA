/*
     Name: Jacob Ritenour
     Date: 9/10/2014
     Class & Section:  WIA-0914
     Comments: "HTML5 Canvas Drawing"
 */

/*******************************************
HTML5 Shape Drawing Activity
    1.  Setup the canvas and 2d context
    2.  Draw out each shape in the sections below
     
********************************************/

window.onload = function(){

/*******************************************
FILE SETUP

// Setup up 7 different Canvases in index.html one for each problem.
//Link Modernizr.js
// Link the main.js file
// Setup the call to that canvas and get it's 2d context
//Use Modernizr to verify that your browser supports canvas, include a fallback message


/*******************************************
PART 1

Draw a rectangle starting at point (0 ,0)
That has a width of 50 px and a heigh of 100px
Set the color of the rectangle to a shade of blue.
Set the stroke color to black and the dimension of the stroke are the same as the rectangle.

Reminder - set the style first then draw.
********************************************/

//Draw Rectangle here

if(Modernizr.canvas){
    var canvasOne = document.getElementById("Canvas1");
    var ctx = canvasOne.getContext("2d");
    
    if(ctx){

        ctx.strokeStyle = "black";
        ctx.fillStyle = "blue";        
        ctx.lineWidth = 5;
        ctx.strokeRect(0,0,50,100);
        ctx.fillRect(0,0,50,100);
    }
    
}

/*******************************************
PART 2

Draw a circle starting at point (50 ,50)
That has a radius of 20 px 
Set the color of the circle to a shade of red and set the alpha to .5
Set the stroke color to black and use a radius of 30px for this circle.

Reminder - set the style first then draw.
Use the arc method
********************************************/


//Draw Circle here
    
    var canvasTwo = document.getElementById("Canvas2");
    var ctx2 = canvasTwo.getContext("2d");
    
    if(ctx2){
        ctx2.strokeStyle = "black";
        ctx2.lineWidth =5;
        ctx2.fillStyle = "red";
        
        ctx2.beginPath();
        ctx2.arc(50,50,20,0,(360/180)*Math.PI,true);
        ctx2.fill();
        ctx2.stroke();
        
    }




/*******************************************
PART 3

Practice using Path drawing.
Create a 5-point star shaped pattern using the lineTo method.
Begin this shape at (100, 100)

Height and width and color are up to you.

********************************************/


//Draw Star here
    var canvasThree = document.getElementById("Canvas3");
    var ctx3 = canvasThree.getContext("2d");
    
    if(ctx3){
        ctx3.strokeStyle = "cyan";
        ctx3.lineWidth = 5;
        
        ctx3.lineJoin = "miter";
        
        ctx3.beginPath();
        ctx3.moveTo(100,100);
        ctx3.lineTo(125,25);
        ctx3.lineTo(150,100);
        ctx3.lineTo(80,50);
        ctx3.lineTo(170,50);
        ctx3.lineTo(100,100);
        ctx3.stroke();
        
        
    }

/*******************************************
PART 4

Practice drawing with Bezier curves.
Try drawing the top to an umbrella.
This should have one large arc (a half circle) on the top and scalloped edges on the bottom.

Position, height, width and color are your choice.
Do not overlap any other object.

********************************************/

//Draw Umbrella top here
    var canvasFour = document.getElementById("Canvas4");
    var ctx4 = canvasFour.getContext("2d");
    
    if(ctx4){
    
        ctx4.strokeStyle = "pink";
        ctx4.lineWidth = 4;
        ctx4.fillStyle= "orange";
        
        ctx4.beginPath();
        ctx4.arc(200,150,100,0,1*Math.PI,true)
        ctx4.stroke();
        ctx4.fill();
        
        ctx4.fillStyle= "lightgrey";
        
        ctx4.beginPath();
        ctx4.arc(125,150,25,0,1*Math.PI,true)
        ctx4.stroke();
        ctx4.fill();
        
        ctx4.beginPath();
        ctx4.arc(175,150,25,0,1*Math.PI,true)
        ctx4.stroke();
        ctx4.fill();
        
        ctx4.beginPath();
        ctx4.arc(225,150,25,0,1*Math.PI,true)
        ctx4.stroke();
        ctx4.fill();
        
        ctx4.beginPath();
        ctx4.arc(275,150,25,0,1*Math.PI,true)
        ctx4.stroke();
        ctx4.fill();
        
        ctx4.strokeStyle = "black";
        ctx4.fillStyle = "yellow";
        
        ctx4.beginPath();
        ctx4.moveTo(325,150);
        ctx4.bezierCurveTo(400,5,500,5,575,150);
        ctx4.stroke();
        ctx4.fill();
        
        ctx4.fillStyle = "lightgrey";
        
        ctx4.beginPath();
        ctx4.moveTo(325,150);
        ctx4.bezierCurveTo(350,100,365,100,375,150);
        ctx4.stroke();
        ctx4.fill();
        
        ctx4.beginPath();
        ctx4.moveTo(375,150);
        ctx4.bezierCurveTo(390,100,415,100,425,150);
        ctx4.stroke();
        ctx4.fill();
        
        ctx4.beginPath();
        ctx4.moveTo(425,150);
        ctx4.bezierCurveTo(450,100,465,100,475,150);
        ctx4.stroke();
        ctx4.fill();
        
        ctx4.beginPath();
        ctx4.moveTo(475,150);
        ctx4.bezierCurveTo(500,100,515,100,525,150);
        ctx4.stroke();
        ctx4.fill();
        
        ctx4.beginPath();
        ctx4.moveTo(525,150);
        ctx4.bezierCurveTo(540,100,555,100,575,150);
        ctx4.stroke();
        ctx4.fill();
    
    
    }
    

/*******************************************
PART 5

Practice using text.
Draw text into your canvas.  It can said whatever you would like in any color.

********************************************/

//Draw text here
    var canvasFive = document.getElementById("Canvas5");
    var ctx5 = canvasFive.getContext("2d");
    
    if(ctx5){
    
    var theString = "I an writing on the Canvas.";
        
        ctx5.font = "25pt Century Gothic";
        ctx5.fillStyle = "Red";
        ctx5.fillText(theString,100,100); 
    }
    

/*******************************************
PART 6

Pixel manipulation.
Draw the image logo.png into the canvas in the following 3 ways.
1. The image exactly as it is.
2. Shrink the image by 50%
3. Slice a section of the logo out and draw that onto the canvas.

Reminder to use the drawImage method for all 3 of the ways.

********************************************/

//Draw images here

    var canvasSix = document.getElementById("Canvas6");
    var ctx6 = canvasSix.getContext("2d");
    
    if(ctx6){
        
        var image1 = document.getElementById("image1");
    
        ctx6.drawImage(image1,0,0);
        
        ctx6.drawImage(image1,0, 1100, 250, 250)
        
        ctx6.drawImage(image1, 700, 300, 150, 100, 300, 1100, 200, 150);
    
    }
    


/*******************************************
PART 7

Putting it all together. 

Using a combination of all the methods. 
Create a complex scene.
You must use at least 3 different methods.

********************************************/

// Draw scene here

    var canvasSeven = document.getElementById("Canvas7");
    var ctx7 = canvasSeven.getContext("2d");
    
    if(ctx7){
    
    
    var theString = "I am at a loss for a scene to create. ";
        
        ctx7.font = "25pt Century Gothic";
        ctx7.fillStyle = "Blue";
        ctx7.fillText(theString,100,800); 
    
        
        ctx7.strokeStyle = "black";
        ctx7.fillStyle = "yellow";
        
        ctx7.beginPath();
        ctx7.moveTo(325,150);
        ctx7.bezierCurveTo(400,5,500,5,575,150);
        ctx7.stroke();
        ctx7.fill();
        
        ctx7.fillStyle = "lightgrey";
        
        ctx7.beginPath();
        ctx7.moveTo(325,150);
        ctx7.bezierCurveTo(350,100,365,100,375,150);
        ctx7.stroke();
        ctx7.fill();
        
        ctx7.beginPath();
        ctx7.moveTo(375,150);
        ctx7.bezierCurveTo(390,100,415,100,425,150);
        ctx7.stroke();
        ctx7.fill();
        
        ctx7.beginPath();
        ctx7.moveTo(425,150);
        ctx7.bezierCurveTo(450,100,465,100,475,150);
        ctx7.stroke();
        ctx7.fill();
        
        ctx7.beginPath();
        ctx7.moveTo(475,150);
        ctx7.bezierCurveTo(500,100,515,100,525,150);
        ctx7.stroke();
        ctx7.fill();
        
        ctx7.beginPath();
        ctx7.moveTo(525,150);
        ctx7.bezierCurveTo(540,100,555,100,575,150);
        ctx7.stroke();
        ctx7.fill();
    
        
        ctx7.strokeStyle = "red";
        ctx7.lineWidth = 25;
        
        ctx7.lineJoin = "bevel";
        
        ctx7.beginPath();
        ctx7.moveTo(300,500);
        ctx7.lineTo(375,125);
        ctx7.lineTo(450,500);
        ctx7.lineTo(240,250);
        ctx7.lineTo(510,250);
        ctx7.lineTo(300,500);
        ctx7.stroke();
        
        
        ctx7.strokeStyle = "orange";
        ctx7.fillStyle = "pink";        
        ctx7.lineWidth = 10;
        ctx7.strokeRect(300,500,290,400);
        ctx7.fillRect(375,525,310,500);
    
    }
    
    
    
    
    
    
    
    
    
}();
