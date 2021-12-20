class Vector {
    constructor (pX, pY, pZ) {
        this.setX(pX);
        this.setY(pY);
        this.setZ(pZ);
    }
    getX() {
        return this.mX;
    }
    setX(pX) {
        this.mX = pX;
    }
    getY() {
        return this.mY
    }
    setY(pY) {
        this.mY = pY;
    }
    getZ() {
        return this.mZ;
    }
    setZ(pZ) {
        this.mZ = pZ;
    }
    
    add (Vector_2)
    {
        var New_Vector =new Vector(
     this.getX() + Vector_2.getX(),
     this.getY() + Vector_2.getY(),
     this.getZ() + Vector_2.getZ(),
        );
     return New_Vector;  
    }
     
    subtract(pVector_2)
    {
        var New_Vector= new Vector(
            this.getX() - pVector_2.getX(),
            this.getY() - pVector_2.getY(),
            this.getZ() - pVector_2.getZ(),
               );
         return New_Vector; 
        
    }
    
    multiply (Scalar_1)
    {
    var New_Vector = new Vector(
    this.getX() * Scalar_1,
    this.getY() * Scalar_1,
    this.getZ() * Scalar_1,
    );
    return New_Vector;
    }

    divide (Scalar_2)
    {
       var New_Vector = new Vector(
     this.getX() / Scalar_2,
     this.getY() / Scalar_2,
     this.getZ() / Scalar_2,
       );
       return New_Vector;
    }
    magnitude()
    {
        var result_pow = (this.getX()*this.getX() + this.getY()*this.getY() + this.getZ()*this.getZ());
        var final_result = Math.sqrt(result_pow);
        return final_result;
    }
    normalise()
    {
        var newV = this.divide(this.magnitude());
        return newV;
       /*  var final_result= this.final_result;
       
        var New_Vector = new Vector (
         this.getX()/ final_result,
         this.getY()/ final_result,
         this.getZ()/ final_result,
        );
        return New_Vector;
        */
    }
    limitTo (pScalar) 
    {
        var New_Vector = new Vector (this.getX(), this.getY(), this.getZ());

        if (New_Vector.magnitude() > pScalar)
       {
           New_Vector = New_Vector.normalise();
           New_Vector = New_Vector.multiply(pScalar);
        }
      return New_Vector;
   }
   
   dotProduct(S_Vector)
   {
    var result = (this.getX() * S_Vector.getX() + this.getY() * S_Vector.getY() + this.getZ() * S_Vector.getZ());
    return result;
   };

   interpolate(New_Vector, interpolation)
   {
        return new Vector((this.getX() + interpolation*(New_Vector.getX()-this.getX())) , (this.getY()+ interpolation* (New_Vector.getY()- this.getY())));
   };

   rotate(Scalar_3)
   {
     return new Vector(this.getX()*Math.cos(Scalar_3) - this.getY()*Math.sin(Scalar_3),this.getX()*Math.sin(Scalar_3) + this.getY()*Math.cos(Scalar_3));
   };

   angleBetween(New_Vector)
   {
       var dot = this.dotProduct(New_Vector);
       var mag1 = this.magnitude();
       var mag2 = New_Vector.magnitude();
       return Math.acos(dot/mag1*mag2);
   }
}