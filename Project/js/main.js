// the window load event handler

function onLoad() {
    var mainCanvas, mainContext, housePosition, houses;
     // this function will initialise our variables
     function initialiseCanvasContext()
    {    // Find the canvas element using its id attribute.
        mainCanvas = document.getElementById('mainCanvas');
        // if it couldn't be found 
        if (!mainCanvas) 
        {
            // make a message box pop up with the error.
            alert('Error: I cannot find the canvas element!');
            return;
        }   
        // Get the 2D canvas context.
        mainContext = mainCanvas.getContext('2d');
        //mainContext.translate(mainCanvas.width/2,mainCanvas.height/2);

        if (!mainContext) 
        {
            alert('Error: failed to get context!');
            return;
        }
        var REcenter = new Vector(mainCanvas.width/2,mainCanvas.height/2,1)
       centerMatrix = Matrix.createTranslation(REcenter);
       centerMatrix.setTransform(mainContext);
       
       //moon = new Moon(new Vector(350, -250, 1), 0, new Vector(2,2,1), '#ffff00');
        
        // LastTime = Date.now();


        housePosition = new Vector(0, 180, 1);
        houses = [];
        houses.push(new House(housePosition));

        // linePosition = new Vector(0,0,1);
        // lines = [];
        // lines.push(new Animation(linePosition));
    }

 

    

    function draw() 
    {
        var i;
         // mainContext.fillRect(0, 0, mainCanvas.width, mainCanvas.height);
         //mainContext.fillRect(0, 0, mainCanvas.width, mainCanvas.height);
         // choose a line width
         mainContext.lineWidth = 5;
         // set the line join
         mainContext.lineJoin = 'round';
         mainContext.strokeStyle = 'blue';

         for (i = 0; i < houses.length; i += 1) 
         {
            houses[i].draw(mainContext);
         }
        //  for (j = 0; i < lines.length; i += 1)
        //  {
        //      lines[j].draw(mainContext);
        //  }
        // for (i = 0; i < houses.length; i += 1) 
        // {
        // houses[i].draw(mainContext);
        // }

    }

    //activate the page by calling the function when the page loads this function will actually draw on the canvas
   
    initialiseCanvasContext();
    draw();

    //animate();
}
window.addEventListener('load', onLoad, false);
