class SceneGraphNode{
    constructor(pMatrix){
        this.setMattrix(pMatrix);
        this.mChildren = [];
    }

    getMatrix(){
        return this.mMatrix;
    }

    setMatrix(pMatrix){
        this.mMatrix = pMatrix;
    }
    getChildren(){
        return this.mChildren;
    }
    setChildren(pChildren){
        this.mChildren=pChildren;
    }
    getNumberofChildren(){
        return this.mChildren.length;
    }
    getChildAt(index){
        return this.mChildren[index];
    }
        addChild(pNode){
            if(pNode instanceof Polygon){
                if(this.getNumberofChildren() > 0){
                   this.mChildren[0].addChild(pNode)
            }

                else{
                    this.mChildren.push(pNode);
                }
           }
            else{
                this.mChildren.push(pNode);
            }
       }

    //  draw(pContext, pMatrix){
    //      var transform = pMatrix.multiply(this.getMatrix())
    //      transform.setTransform(pContext);

    //      for(var i = 0; i< this.getNumberofChildren(); i++){
    //          this.getChildAt(i).draw(pContext, transform);
    //         }
    //      pMatrix.setTransform(pContex);
    //    }  

    //  update(pDeltaTime){
    //      for(var i = 0; i < this.getNumberofChildren(); i++){
    //          this.getChildAt(i).update(pDeltaTime);
    //      }
    // }  
}