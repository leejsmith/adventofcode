$(document).on('ready', function() {
    $.ajax({
        url: '/2017/2/input.txt',
        success: function(data) {
            input = data;
            processChecksum(input);
            $('.input').append(input);
        }
    });
});

function processChecksum(inputData) {
    sum = 0;
    row = inputData.split('\n');
    processed = false;
    big = 0;
    small = 0;
    for (i = 0; i < row.length; i++) {
        column = row[i].split('\t');
        processed = false;
        for (j = 0; j < column.length; j++) {
            nextIndex = j + 1;
            currInt = parseInt(column[j]);
            while (nextIndex < column.length) {
                modVal = -1;
                nextInt = parseInt(column[nextIndex]);
                if (nextInt > currInt) {
                    big = nextInt;
                    small = currInt;
                } else {
                    big = currInt;
                    small = nextInt;
                }
                modVal = big % small;
                if (modVal == 0) {
                    sum = sum + (big / small);
                    processed = true;
                }
                if (processed) {
                    break;
                }
                nextIndex++;
            }
            if (processed) {
                break;
            }
        }
    }
    $('.output').append(sum);
}