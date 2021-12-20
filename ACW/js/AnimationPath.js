
    function init(){
//Call multiple animation frames 
    var lastTime = 0;
    var vendors = ['ms', 'moz', 'webkit', 'o'];
    for (var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
        window.requestAnimationFrame = window[vendors[x] + 'RequestAnimationFrame'];
        window.cancelAnimationFrame = window[vendors[x] + 'CancelAnimationFrame'] || window[vendors[x] + 'CancelRequestAnimationFrame'];
    }
//activate animation frame
    if (!window.requestAnimationFrame) window.requestAnimationFrame = function (callback, element) {
        var currTime = new Date().getTime();
        var timeToCall = Math.max(0, 16 - (currTime - lastTime));
        var id = window.setTimeout(function () {
            callback(currTime + timeToCall);
        },
        timeToCall);
        lastTime = currTime + timeToCall;
        return id;
    };
//cancel the animation frame
    if (!window.cancelAnimationFrame) window.cancelAnimationFrame = function (id) {
        clearTimeout(id);
    };




var canvas = document.getElementById("mainCanvas");
var ctx = canvas.getContext("2d");

ctx.lineCap = "round";
var REcenter = new Vector(canvas.width/2,canvas.height/2,1)
       centerMatrix = Matrix.createTranslation(REcenter);
       centerMatrix.setTransform(ctx);
// variable to hold how many frames have elapsed in the animation
var t = 1;

// define the path to plot
var vertices = [];
vertices.push({
    x: -400,
    y: 259
});
vertices.push({
    x: -200,
    y: -100
});
vertices.push({
    x: 200,
    y: -100
});
vertices.push({
    x: 350,
    y: 260
});
vertices.push({
    x: -404,
    y: 259
});


// draw the path line
ctx.lineWidth = 1;

// tell canvas you are beginning a new path
ctx.beginPath();
// draw the path with moveTo and multiple lineTo's
ctx.moveTo(-400, 259);
ctx.lineTo(-200, -100);
ctx.lineTo(200, -100);
ctx.lineTo(350, 260);
ctx.lineTo(-404,259);

// stroke the path
ctx.stroke();

// set style of animation
ctx.lineWidth = 5;
ctx.strokeStyle = "blue";
// calculate incremental points along the path
var points = calcWaypoints(vertices);
// extend the line from start to finish with animation
animate(points);


// calc waypoints traveling along vertices
function calcWaypoints(vertices) {
    var waypoints = [];
    for (var i = 1; i < vertices.length; i++) {
        var pt0 = vertices[i - 1];
        var pt1 = vertices[i];
        var dx = pt1.x - pt0.x;
        var dy = pt1.y - pt0.y;
        for (var j = 0; j < 100; j++) {
            var x = pt0.x + dx * j / 100;  
            var y = pt0.y + dy * j / 100;
            waypoints.push({
                x: x,
                y: y
            });
        }
    }
    return (waypoints);
}


function animate() {
    if (t < points.length - 1) {
        requestAnimationFrame(animate);
    }
    // draw a line segment from the last waypoint
    // to the current waypoint
    ctx.beginPath();
    ctx.moveTo(points[t - 1].x, points[t - 1].y);
    ctx.lineTo(points[t].x, points[t].y);
    ctx.stroke();
    // increment "t" to get the next waypoint
    t++;
}
//methods called
}
window.addEventListener('load', init, false);

