
class Matrix
{
    constructor(pX0, pX1, pX2,pY0, pY1, pY2, pZ0, pZ1, pZ2)
    {
      this.matrix = [
        [pX0, pX1, pX2],
        [pY0, pY1, pY2],
        [pZ0, pZ1, pZ2]
    ];
}


getX0()
{
    return this.mX0;
};


setX0 (pX0)
 {
    this.mX0 = pX0;
};


getX1  () 
{
    return this.mX1;
};


setX1  (pX1) {
    this.mX1 = pX1;
};


getX2  () 
{
    return this.mX2;
};


setX2  (pX2)
 {
    this.mX2 = pX2;
};


getY0  () 
{
    return this.mY0;
};


setY0  (pY0)
 {
    this.mY0 = pY0;
};


getY1  ()
 {
    return this.mY1;
};


setY1  (pY1)
 {
    this.mY1 = pY1;
};


getY2  ()
 {
    return this.mY2;
};


setY2  (pY2) 
{
    this.mY2 = pY2;
};


getZ0  ()
 {
    return this.mZ0;
};


setZ0  (pZ0) 
{
    this.mZ0 = pZ0;
};


getZ1  () 
{
    return this.mZ0;
};


setZ1  (pZ1) 
{
    this.mZ1 = pZ1;
};


getZ2  () 
{
    return this.mZ2;
};


setZ2  (pZ2) 
{
    this.mZ2 = pZ2;
};


getElement  (pRow, pColumn)
 {
    return this.matrix[pRow][pColumn];
};

static createIdentity() {
  return new Matrix(1, 0, 0, 0, 1, 0, 0, 0, 1);
};


static createTranslation(tVector) {

  return new Matrix(1, 0, tVector.getX(), 0, 1, tVector.getY(), 0, 0, 1);
};


static createScale(scaleVector) {

  return new Matrix(scaleVector.getX(), 0, 0, 0, scaleVector.getY(), 0, 0, 0, 1);
};


static createRotation(rotation) {

  return new Matrix(Math.cos(rotation), -Math.sin(rotation), 0,Math.sin(rotation), Math.cos(rotation), 0, 0, 0, 1);
};


multiplyVector(vector) {
  //vector = new Vector();

  return new Vector(
    (this.getElement(0,0) * vector.getX()) + (this.getElement(0,1) * vector.getY()) + (this.getElement(0,2) * vector.getZ()),
    (this.getElement(1,0) * vector.getX()) + (this.getElement(1,1) * vector.getY()) + (this.getElement(1,2) * vector.getZ()),
    (this.getElement(2,0) * vector.getX()) + (this.getElement(2,1) * vector.getY()) + (this.getElement(2,2) * vector.getZ()));
};

multiply(Matrix2) 
{
  
  return new Matrix(this.getElement(0,0)*Matrix2.getElement(0,0) + this.getElement(0,1)*Matrix2.getElement(1,0) + this.getElement(0,2)*Matrix2.getElement(2,0),
                    this.getElement(0,0)*Matrix2.getElement(0,1) + this.getElement(0,1)*Matrix2.getElement(1,1) + this.getElement(0,2)*Matrix2.getElement(2,1),
                    this.getElement(0,0)*Matrix2.getElement(0,2) + this.getElement(0,1)*Matrix2.getElement(1,2) + this.getElement(0,2)*Matrix2.getElement(2,2),

                    this.getElement(1,0)*Matrix2.getElement(0,0) + this.getElement(1,1)*Matrix2.getElement(1,0) + this.getElement(1,2)*Matrix2.getElement(2,0),
                    this.getElement(1,0)*Matrix2.getElement(0,1) + this.getElement(1,1)*Matrix2.getElement(1,1) + this.getElement(1,2)*Matrix2.getElement(2,1),
                    this.getElement(1,0)*Matrix2.getElement(0,2) + this.getElement(1,1)*Matrix2.getElement(1,2) + this.getElement(1,2)*Matrix2.getElement(2,2),

                    this.getElement(2,0)*Matrix2.getElement(0,0) + this.getElement(2,1)*Matrix2.getElement(1,0) + this.getElement(2,2)*Matrix2.getElement(2,0),
                    this.getElement(2,0)*Matrix2.getElement(0,1) + this.getElement(2,1)*Matrix2.getElement(1,1) + this.getElement(2,2)*Matrix2.getElement(2,1),
                    this.getElement(2,0)*Matrix2.getElement(0,2) + this.getElement(2,1)*Matrix2.getElement(1,2) + this.getElement(2,2)*Matrix2.getElement(2,2),
      );

};

setTransform(pContext){
    var a = this.getElement(0,0);
    var b = this.getElement(1,0);
    var c = this.getElement(0,1);
    var d = this.getElement(1,1);
    var e = this.getElement(0,2);
    var f = this.getElement(1,2);
    pContext.setTransform(a,b,c,d,e,f)
}

transform(pContext){
    var a = this.getElement(0,0);
    var b = this.getElement(1,0);
    var c = this.getElement(0,1);
    var d = this.getElement(1,1);
    var e = this.getElement(0,2);
    var f = this.getElement(1,2);
    pContext.transform(a,b,c,d,e,f)
}


Scale (x, y, z) 
{
  scaleMatrix = this.matrix();
  return  scaleMatrix = [
    [x,    0,    0],   
    [0,    y,    0],   
    [0,    0,    z]  
  ];  
  };
}

{
// foloseste vectori ca sa pui elementele in pozitii si doar copiezi pozitiile la getElement
   /* 
   this.matrix(0,0,p00);
   this.matrix(0,1,p01);
   this.matrix(0,2,p02);
   this.matrix(1,0,p10);
   this.matrix(1,1,p11);
   this.matrix(1,2,p12);
   this.matrix(2,0,p20);
   this.matrix(2,1,p21);
   this.matrix(2,2,p22);
    };

    matrix(i,j,pvalue)
    {
        var array = [];
        // Creates all lines:
       // for(var i=0; i < rows; i++){
      
            // Creates an empty line
            array.push([]);

            // Adds cols to the empty line:
            array[i].push( new Array(cols));
      
           // for(var j=0; j < cols; j++){
              // Initializes:} 
           // }

     return array[i][j] = pvalue;
    }
 
getElement(i,j)
{
  return array[i][j];
};
*/
}
