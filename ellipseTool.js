function EllipseTool() {
    //set an icon and a name for the object
	this.icon = "assets/ellipse.jpg";
	this.name = "ellipse";
    
    //counts how many times the mouse has been pressed
    var pressCount = 0;
    
    //this checks if the ellipse has started to be drawn
    var toolOn = false;
    
    //these arrays store the start and end position of the ellipse
    var startPosition = [];
    var endPosition = [];

    var currentPositionX = mouseX;
    var currentPositionY = mouseY;
    
    // `this` changes in the click handler. So storing it as a
	// variable `self` now means we can still access it in the handler
	var self = this;
    
    this.draw = function(){
        updatePixels();
        if(pressCount == 0 && MousePressOnCanvas){
            //sets the starting point for the ellipse
            toolOn = true;
            startPositionX = mouseX;
            startPositionY = mouseY;
            startPosition.push(startPositionX);
            startPosition.push(startPositionY);
            pressCount = 1;
            toolOn = false;
            console.log("The start position is " + startPosition);
            console.log(toolOn);
            console.log(pressCount);
        }else if(pressCount == 1 && MousePressOnCanvas){
            //sets the end position for the ellipse
            toolOn = true;
            endPositionX = mouseX;
            endPositionY = mouseY;
            endPosition.push(endPositionX);
            endPosition.push(endPositionY);
            pressCount = 2;
            toolOn = false;
            console.log("The end position is " + endPosition);
            console.log(toolOn);
            console.log(pressCount);
        }else if(pressCount == 2 && !toolOn && MousePressOnCanvas){
            pressCount = 3;
            noFill();
            ellipse(startPosition[0], startPosition[1], endPosition[0], endPosition[1]);
            loadPixels();
            pressCount = 0;
            startPosition = [];
            endPosition = [];
        }else{
            
        }
        loadPixels();
    };
    
    
    this.unselectTool = function() {
		updatePixels();
        strokeWeight(1);
		//clear options
		select(".options").html("");
	};
}