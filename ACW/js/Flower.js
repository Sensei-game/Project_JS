

    function start(){

        var canvas = document.getElementById('thirdCanvas');
        var nContext = canvas.getContext('2d');
       
         var REcenter = new Vector(680,140,1)
         centerMatrix = Matrix.createTranslation(REcenter);
         centerMatrix.setTransform(nContext);

         nContext.scale(0.80,0.80);

       var RotateAngle=0.005;

       function draw(){
           
          nContext.clearRect(-150,-150,canvas.width,canvas.height);
           
           nContext.beginPath();
           nContext.fillStyle =' hsl(148, 100%, 50%)';
           //nContext.moveTo(0,0);
           for(var angle=0; angle < 2*Math.PI; angle+=0.01){
             var x = 140*Math.cos(16*angle)*Math.cos(angle);
             var y = 140*Math.cos(16*angle)*Math.sin(angle);
           nContext.lineTo(x,y);
            }
            
            nContext.fill();
            nContext.stroke();
            nContext.rotate(RotateAngle);
            
            requestAnimationFrame(draw);
            
       }
       requestAnimationFrame(draw);

    }
    window.addEventListener('load', start, false);
