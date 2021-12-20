class House 
{
constructor(pPosition)
   {
    this.setPosition(pPosition);
    }
        getPosition() 
        {
            return this.mPosition;
        }

        setPosition(pPosition) 
        {
            this.mPosition = pPosition;
        }

          setTransform(pContext)
          {
            return Matrix.setTransform(pContext);
          }

          transform(pContext)
          {
            return Matrix.transform(pContext);
          }

        drawbase(pContext)
        { 
            pContext.moveTo(this.getPosition().getX() - 175,   this.getPosition().getY() + 10);
            pContext.lineTo(this.getPosition().getX() + 200,   this.getPosition().getY() + 10);
            pContext.lineTo(this.getPosition().getX() + 200,   this.getPosition().getY() - 200);
            pContext.lineTo(this.getPosition().getX() - 173,   this.getPosition().getY() - 200);
            pContext.lineTo(this.getPosition().getX() - 173,   this.getPosition().getY() + 12);
             pContext.stroke(); 
            }


            moveBase(pContext, matrix){
        var translate = Matrix.createTranslation(new Vector(0,13,1));
       // var scale = matrix.createScale(new Vector(1,1,1));
        var transform = matrix.multiply(translate);
        
        transform.setTransform(pContext);
        this.drawbase(pContext);
        matrix.setTransform(pContext);
    }

         drawleftTriangle(pContext)
         {
            pContext.moveTo(this.getPosition().getX() - 173,   this.getPosition().getY() - 200);
            pContext.lineTo(this.getPosition().getX() + 25,   this.getPosition().getY() - 400);
            pContext.lineTo(this.getPosition().getX() - 173,   this.getPosition().getY() + 10);
            pContext.closePath();
            pContext.stroke(); 
        } 
        moveleftTriangle(pContext, matrix){
            var translate = Matrix.createTranslation(new Vector(10,13,1));
          //  var scale = Matrix.createScale(new Vector(1,1,1));
            var transform = matrix.multiply(translate);

            transform.setTransform(pContext);
            this.drawleftTriangle(pContext);
            matrix.setTransform(pContext);
        }

            drawrightTriangle(pContext)
            {

            pContext.moveTo(this.getPosition().getX() + 25,   this.getPosition().getY() - 400);
            pContext.lineTo(this.getPosition().getX() + 200,   this.getPosition().getY() + 10);
            pContext.lineTo(this.getPosition().getX() + 200,   this.getPosition().getY() -200);
            pContext.closePath();
            pContext.stroke();   
        }
moverightTriangle(pContext, matrix){
    var translate = Matrix.createTranslation(new Vector(11,20,1));
    //var scale = Matrix.createScale(new Vector(1,1,1));
    var transform = matrix.multiply(translate);

    transform.setTransform(pContext);
    this.drawrightTriangle(pContext);
    matrix.setTransform(pContext);
}
         
         drawMoon(pContext)
         { 
            
            pContext.beginPath();
            pContext.arc(-250,-200,60,0,2*Math.PI,false); 
            pContext.fillStyle = 'blue';
            pContext.fill();
            pContext.lineWidth = 5;
            pContext.strokeStyle = 'red';
            pContext.stroke();

        }
moveMoon(pContext,matrix){
    var translate = Matrix.createTranslation(new Vector(-10,13,1));
    //var scale = Matrix.createScale(new Vector(1,1,1));
    var transform = matrix.multiply(translate);
    transform.setTransform(pContext);
    this.drawMoon(pContext);
    matrix.setTransform(pContext);
}

         draw(pContext, matrix)
          {
        // this.moveBase(pContext, matrix);
        // this.moveleftTriangle(pContext, matrix);
        // this.moverightTriangle(pContext, matrix);
        // this.moveMoon(pContext, matrix);


        this.drawleftTriangle(pContext);
        this.drawrightTriangle(pContext);
        this.drawbase(pContext);
        this.drawMoon(pContext);
        }


}