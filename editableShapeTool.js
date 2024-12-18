function EditableShapeTool() {
    this.icon = "assets/editShape.jpg";
    this.name = "editableShape";
    
    var editMode = false;
    var currentShape = [];
    var self = this;
    
    this.mousePressOnCanvas = function (canvas) {
        if (mouseX > canvas.elt.offsetLeft &&
            mouseX < (canvas.elt.offsetLeft + canvas.width) &&
            mouseY > canvas.elt.offsetTop &&
            mouseY < (canvas.elt.offsetTop + canvas.height)) {
            return true;
        }
        return false;
    };
    
    this.draw = function() {
        updatePixels();
        noFill();
        if(this.mouseIsPressed){
            if(editMode = false){
                currentShape.push({
                    x: mouseX,
                    y: mouseY
                });
            }
            else{
                for(var i=0; i < currentShape.length; i++){
                    if(dist(currentShape[i].x, currentShape[i].y,
                            mouseX, mouseY) < 15){
                        currentShape[i].x = mouseX;
                        currentShape[i].y = mouseY;
                    }
                }
            }
        };

        beginShape()
        for (var i = 0; i < currentShape.length; i++){
            vertex(currentShape[i].x, 
                   currentShape[i].y);
            if(editMode){
                fill("red");
                ellipse(currentShape[i].x, currentShape[i].y, 7);
                noFill();
            }
        }
        endShape();
    };
    
    this.unselectTool = function() {
		updatePixels();
		//clear options
		select(".options").html("");
	};
    
    this.populateOptions = function() {
		select(".options").html(
			"<button id='editButton'>Edit Shape</button>");
		//click handler
		select("#editButton").mouseClicked(function() {
			var button = select("#" + this.elt.id);
			if (editMode) {
                editMode = false;
				button.html('Edit Shape');
			} else {
				editMode = true;
				button.html('Add Vertices');
			}
		});

	};
}