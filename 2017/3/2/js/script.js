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

    //Find Max Grid Size Required
    inputSqrt = Math.ceil(Math.sqrt(inputInt));
    //Get Centre of Grid
    centre = Math.ceil(inputSqrt / 2);
    //construct grid with 0 val contents
    var arrNums = new Array();
    for (i = 0; i < inputSqrt; i++) {
        arrNums[i] = new Array();
        for (j = 0; j < inputSqrt; j++) {
            arrNums[i][j] = 0;
        }
    }

    //recalulate sqrt to actual sqrt
    inputSqrt = Math.sqrt(inputInt);
    //get rounded sqrt
    inputSqrtCeil = Math.ceil(inputSqrt);
    //set center of grid locations
    xLoc = centre;
    yLoc = centre;
    //used to calculate square moves
    iteration = 1;
    // Calculate Actual center, odd squares are max grid locations per iteration so -1 for middle
    if ((inputSqrtCeil - inputSqrt) == 0 && (inputSqrtCeil % 2 == 1)){
    	xLoc = xLoc - 1;
    	yLoc = yLoc - 1;
    } 
    //set middle val
    arrNums[yLoc][xLoc] = start;
    //Location directions
    right = 1;
    up = -1;
    left = -1;
    down = 1;
    //used to calc when no further action required
    processed = false;
    while (!processed) {
        //Go Right
        for (i = 1; i < iteration + 1; i++) {
            //Get New Location
            xLoc = xLoc + right;
            //get sum of surrounding cells
            start = calculateSum(arrNums, xLoc, yLoc)
            //set this val
            arrNums[yLoc][xLoc] = start;
            //have we reached goal?
            if (start >= inputInt){
            	processed = true;
            	break;
            }
        }
        //break loop
        if (processed){
        	break;
        }
        //Repeat for each direction
        for (i = 1; i < iteration + 1; i++) {
            yLoc = yLoc + up;
            start = calculateSum(arrNums, xLoc, yLoc)
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
            start = calculateSum(arrNums, xLoc, yLoc)
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
            start = calculateSum(arrNums, xLoc, yLoc)
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
    $('.output').append(start);
}

function calculateSum(arrNums, xLoc, yLoc){
    retVal = 0;
    //topRight
        y = yLoc - 1;
        x = xLoc + 1;
        if (arrNums[y][x] != undefined){
            retVal += arrNums[y][x]
        }
    //top
        y = yLoc - 1;
        x = xLoc;
        if (arrNums[y][x] != undefined){
            retVal += arrNums[y][x]
        }
    //topLeft
        y = yLoc - 1;
        x = xLoc - 1;
        if (arrNums[y][x] != undefined){
            retVal += arrNums[y][x]
        }
    //left
        y = yLoc;
        x = xLoc - 1;
        if (arrNums[y][x] != undefined){
            retVal += arrNums[y][x]
        }
    //bottomLeft
        y = yLoc + 1;
        x = xLoc - 1;
        if (arrNums[y][x] != undefined){
            retVal += arrNums[y][x]
        }
    //bottom
        y = yLoc + 1;
        x = xLoc;
        if (arrNums[y][x] != undefined){
            retVal += arrNums[y][x]
        }
    //bottomRight
        y = yLoc + 1;
        x = xLoc + 1;
        if (arrNums[y][x] != undefined){
            retVal += arrNums[y][x]
        }
    //right
        y = yLoc;
        x = xLoc + 1;
        if (arrNums[y][x] != undefined){
            retVal += arrNums[y][x]
        }
        return retVal;
}