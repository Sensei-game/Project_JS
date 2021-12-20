class Polygon{
    constructor(mMatrix){

    }
    setRootNode(nRoot){
     return nRoot;
    }
    setFillColour(pColour){
        this.fillColour = pColour;
    }
    setLineJoin(pStyle){
        this.lineJoinStyle = pStyle;
    }
    setLineWidth(pWidth){
        this.setLineWidth = pWidth;
    }

    initialiseSceneGraph(){
        var translationMatrix = Matrix.createTranslation(this.getPosition());
        var translationSceneGraphNode = new SceneGraphNode(translationMatrix);

        var rotationMatrix =Matrix.createRotation(this.getRotation());
        var rotationSceneGraphNode = new SceneGraphNode(rotationMatrix);

        var scaleMatrix = Matrix.createScale(this.getScale());
        var scaleSceneGraphNode = new SceneGraphNode(scaleMatrix);

        translationSceneGraphNode.addChild(scaleSceneGraphNode);

        rotationSceneGraphNode.addChild(translationSceneGraphNode);

        this.setRootNode(rotationSceneGraphNode);
    }

    draw(pContext, pMatrix){
        pContext.lineWidth = this.lineWidth;
        pContext.lineJoin = this.lineJoinStyle;
        pContext.strokeStyle = this.strokeColour;
        
        pMatrix.setTansform(pContext);
    }
}