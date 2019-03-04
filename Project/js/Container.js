function initialiseNewSceneGraph()
    {
        var root = new Group('Root');
        initialiseBackgroundSceneGraph(root);
        var originTransformMatrix = createOriginTransform();
        var originTransform = new Transform('OriginCentre', originTransformMatrix);
        root.addChild(originTransform);

        originTransform.addChild(moon.getSceneGraphRoot());
  
        sceneGraph = root;


    }

    function initialiseBackgroundSceneGraph(pParentGroup){
        var group, colour, fill, background, backgroundVertices, geometry;

        group = new Group('Background');
        backgroundVertices = [];
        backgroundVertices.push(new Vector(0,0,0));
        backgroundVertices.push(new Vector(mainCanvas.width,0,0));
        backgroundVertices.push(new Vector(mainCanvas.width, mainCanvas.height, 0));
        backgroundVertices.push(new Vector(0, mainCanvas.height,0));
        backgroundVertices.push(new Vector(0,0,0));
        background = new Polygon(backgroundVertices);
        geometry = new Geometry('BackgroundGeometry', background);
        colour = new State('YellowColour', 'fillStyle', '#fafac8');
        group.addChild(colour);
        fill = new fill('BackgroundFill');
        colour.addChild(fill);
        fill.addChild(geometry);
        pParentGroup.addChild(group);
    }
    initialiseNewSceneGraph();


    function update(pDeltaTime){
        moon.update(pDeltaTime);
    }