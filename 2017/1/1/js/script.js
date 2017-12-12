$(document).on('ready', function() {
    $.ajax({
        url: '/2017/1/input.txt',
        success: function(data) {
            input = data;
            processChecksum(input);
            $('.input').append(input);
        }
    });
});

function processChecksum(inputData) {
    sum = 0;
    splitArray = inputData.split('');
    for (i = 0; i < splitArray.length; i++) {
        nextIndex = i + 1;
        if (nextIndex >= splitArray.length) {
            nextIndex = 0;
        }
        if (splitArray[i] == splitArray[nextIndex]) {
            sum = sum + parseInt(splitArray[i]);
        }
    }
    $('.output').append(sum);

}