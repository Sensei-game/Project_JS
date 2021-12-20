function start(){
    // initialise canvas and context
var canvas = document.getElementById('fourthCanvas');
var context = canvas.getContext('2d'); 
 
var REcenter = new Vector(0,0,1)
         centerMatrix = Matrix.createTranslation(REcenter);
         centerMatrix.setTransform(context);
// physical variables
var g = 1.2; // gravity
var bounce = 0.9; // velocity reduction factor per bounce
var radius = 20; // ball radius
var color = "#DC143C"; // ball color
 
// initialise position and velocity of ball
var x = 500;
var y = 50;
var vx = 10;
var vy = 0;
 var frictionRate = 0.01 

// set up a timer
    setInterval(update, 1000/60); // 60 frames per second
//update();
 
function update() {
  // update velocity
  vy += g; // gravity
 
  // update position
  x += vx;
  y += vy; 
 
  // handle bouncing
  if (y > canvas.height - radius){
    y = canvas.height - radius;
    vy *= -bounce;
  }

  // wrap around
  if (x > canvas.width + radius){
    x = -radius;
  }

  if(x + vx > canvas.width-radius || x + vx < radius) {
    vx = -vx;
}

if(y + vy > canvas.height-radius || y + vy < radius) {
    vy = -vy;
}



// if(vy<0 && vy>-2.1)
// {
//     vy = 0;
// }
// if(Math.abs(vx) < 1.1)
// {
//     vx =0;
// // }

if(vx>0)
{  vx = vx - frictionRate;
}
            else if(vx<0)
                 {vx = vx + frictionRate;
                }
// if(vx>=0)
// {  vx = v - frictionRate;}
//         else if(vy<=0)
//                  {vy = vy + frictionRate;}

  // update the ball
  drawBall();
};
 
function drawBall() {
    
    context.clearRect(0, 0, canvas.width, canvas.height); // clear canvas
        context.fillStyle = color;
        context.beginPath();
        context.arc(x, y, radius, 0, 2*Math.PI, true);
        context.closePath();
        context.fill();
        context.lineWidth = 3;
        context.stroke();
    
};
}
window.addEventListener('load', start, false);





