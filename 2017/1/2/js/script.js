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
    halfWay = (splitArray.length / 2) - 1;
    for (i = 0; i < splitArray.length; i++) {
        halfWay = halfWay + 1;
        if (halfWay >= splitArray.length) {
            halfWay = 0;
        }
        if (splitArray[i] == splitArray[halfWay]) {
            sum = sum + parseInt(splitArray[i]);
        }
    }
    $('.output').append(sum);

}