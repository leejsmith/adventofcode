$(document).on('ready', function() {
    $.ajax({
        url: '/2017/4/input.txt',
        success: function(data) {
            input = data;
            calculatePassphrase(input);
        }
    });
});

function calculatePassphrase(inputData) {
    retVal = 0;
    //split rows
    row = inputData.split('\n');
    processed = false;
    for (i = 0; i < row.length; i++) {
        $('.input').append((i + 1) + ': ' + row[i] + '<br/>');
        //split words
        column = row[i].split(' ');
        processed = false;
        for (j = 0; j < column.length; j++) {
            //set K as next word in row
            k = j + 1;
            for (0; k < column.length; k++) {
                //if words match we can't use this phrase
                if (column[j] == column[k]) {
                    retVal++;
                    processed = true;
                    break;
                }
            }
            if (processed) {
                break;
            }
        }
    }
    //retVal is total non accepted phrases calculate total correct phrases
    totalCorrect = row.length - retVal;
    $('.output').append(totalCorrect);
}