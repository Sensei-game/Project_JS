class Moon {
    constructor(pPosition, pRotation, pScale, pColour)
    {
        this.setColour(pColour);
        this.setPosition(pPosition);
        this.setRotation(pRotation);
        this.mRotationRate = Math.PI;
        this.setScale(pScale);
        this.initialiseSceneGraph();
    }
    getColour()
    {
        return this.mColour;
    }
    setColour(pColour){
        this.mColour = pColour;
    }
    getPosition(){
        return this.mPosition;
    }
    setPosition(pPosition){
        this.mPosition = pPosition;
    }
    getRotation(){
        return this.mRotation;
    }
    setRotation(pRotation){
        this.mRotation = pRotation;
    }
    getScale(){
        return this.mScale;
    }
    setScale (pScale){
        this.mScale = pScale;
    }
    getSceneGraphRoot(){
     return this.mSceneGraphRoot;
    }
    
    update (pDelta){
        var currentRotationDelta;
        currentRotationDelta = pDelta * this.mRotationRate;
        this.setRotationDelta(this.getRotation() + currentRotationDelta);
        this.refreshSceneGraph();
    }
    refreshSceneGraph(){
        var rotationMatrix, translationMatrix;
        rotationMatrix = Matrix.createRotation(this.getRotation());
        this.mRotationNode.setTransform(translationMatrix); 
    }
    initialiseSceneGraph(){
        var circle, geometry, colour, fill, stroke, rotationMatrix, translationMatrix,scaleMatrix;
        this.mSceneGraphRoot = new Group('Moon');
        rotationMatrix = Matrix.createRotation(this.getRotation());
        this.mRotationNode = new Transform('MoonRotation',rotationMatrix);
        scaleMatrix = Matrix.createScale(this.getScale());
        this.mScaleNode = new Transform('MoonScale',scaleMatrix);
        translationMatrix = Matrix.createTranslation(this.getPosition());
        this.mTranslationNode = new Transform('MoonTranslation', translationMatrix);
        this.mSceneGraphRoot.addChild(this.mTranslationNode);
        this.mTranslationNode.addChild(this.mRotationNode);
        circle = Polygon.createRegularPolygon(30,20);
        geometry = new Geometry('MoonGeometry',circle);
        colour = new State('BlueColour','fillStyle',this.getColour());
        fill = new Fill('CircleFill');
        fill.addChild(geometry);
        stroke = new stroke('CircleStroke');
        stroke.addChild(fill);
        colour.addChild(stroke);
        this.mRotationNode.addChild(this.mScaleNode)
        this.mScaleNode.addChild(colour);
        this.initialiseRaySceneGraph(colour);  
    }

    initialiseRaySceneGraph(pParentGroup){
        var numRays, ray, rotationNode, rotationMatrix, translationMatrix,translationNode,geometry, rays, fill ,stroke, i;
        ray = Polygon.createRegularPolygon(3,0);
        numRays = 6;
        rays = new Group('Rays');
        for (i = 0; i < numRays; i += 1)
        {
            rotationMatrix = Matrix.createRotation(i * Math.PI * 2/ numRays);
            rotationNode = new Transform('RayRotation', rotationMatrix);
            translationMatrix = Matrix.createTranslation(new Vector(28, 0, 1));
            translationNode = new Transform('RayTranslation', translationMatrix);
            geometry = new Geometry ('RayGeometry', ray);
            fill = new Fill('RayFill');
            fill.addChild(geometry);
            stroke = new stroke('RayStroke');
            stroke.addChild(fill);
            fill.addChild(geometry);
            translationNode.addChild(stroke);
            rotationNode.addChild(translationNode);
            rays.addChild(rotationNode);
        }
        pParentGroup.addChild(rays);
 
    }

}
