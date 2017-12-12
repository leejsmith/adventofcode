$(document).on('ready', function() {
    $.ajax({
        url: '/2017/5/input.txt',
        success: function(data) {
            input = data;
            calculateJumps(input);
        }
    });
});

function calculateJumps(inputData) {
    stepCount =0;
    arrSteps = inputData.split('\n').map(function(value){
        return parseInt(value);
    });
    //append input area
    for (i=0;i<arrSteps.length;i++){
        $('.input').append((i+1) + ': ' + arrSteps[i] + '<br/>');
    }
    currentIndex = 0;
    while (arrSteps[currentIndex] != undefined){
        oldVal = arrSteps[currentIndex];
        currentVal = arrSteps[currentIndex];
        currentVal++;
        arrSteps[currentIndex] = currentVal;
        currentIndex += oldVal;
        stepCount++;
    }
    $('.output').append(stepCount);

}