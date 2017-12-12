$(document).on('ready', function() {
    $.ajax({
        url: '/2017/3/input.txt',
        success: function(data) {
            input = data;
            calculateGrid(input);
        }
    });
});

function calculateGrid(inputData) {
    start = 1;
    inputInt = parseInt(inputData);
    $('.input').append(inputInt);
    inputSqrt = Math.ceil(Math.sqrt(inputInt));
    centre = Math.ceil(inputSqrt / 2);
    inputSqrt = Math.sqrt(inputInt);
    inputSqrtCeil = Math.ceil(inputSqrt);
    var arrNums = new Array();

    for (i = 0; i < inputSqrtCeil; i++) {
        arrNums[i] = new Array();
        for (j = 0; j < inputSqrtCeil; j++) {
            arrNums[i][j] = 0;
        }
    }
    xLoc = centre;
    yLoc = centre;
    iteration = 1;
    right = iteration;
    if ((inputSqrtCeil - inputSqrt) == 0 && (inputSqrtCeil % 2 == 1)){
    	xLoc = xLoc - 1;
    	yLoc = yLoc - 1;
    } 

    arrNums[yLoc][xLoc] = start;
    right = 1;
    up = -1;
    left = -1;
    down = 1;
    processed = false;
    while (!processed) {
        for (i = 1; i < iteration + 1; i++) {
            xLoc = xLoc + right;
            start++;
            arrNums[yLoc][xLoc] = start;
            if (start >= inputInt){
            	processed = true;
            	break;
            }
        }
        if (processed){
        	break;
        }
        for (i = 1; i < iteration + 1; i++) {
            yLoc = yLoc + up;
            start++;
            arrNums[yLoc][xLoc] = start;
            if (start >= inputInt){
            	processed = true;
            	break;
            }
        }
        if (processed){
        	break;
        }
        iteration++;
        for (i = 1; i < iteration + 1; i++) {
            xLoc = xLoc + left;
            start++;
            arrNums[yLoc][xLoc] = start;
            if (start >= inputInt){
            	processed = true;
            	break;
            }
        }
        if (processed){
        	break;
        }
        for (i = 1; i < iteration + 1; i++) {
            yLoc = yLoc + down;
            start++;
            arrNums[yLoc][xLoc] = start;
            if (start >= inputInt){
            	processed = true;
            	break;
            }
        }
        if (processed){
        	break;
        }
        iteration++;
    }

    //We have now constructed the spiral work out the value.

    xDif = xLoc - centre;
    yDif = yLoc - centre;
    //Getting Positive vals for addition to middle.
    if (xDif < 0) {
    	xDif = xDif * -1;
    }
    if (yDif < 0) {
    	yDif = yDif * -1;
    }
    $('.output').append(yDif+xDif);
}