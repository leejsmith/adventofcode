$(document).on('ready', function() {
    $.ajax({
        url: '/2017/2/input.txt',
        success: function(data) {
            input = data;
            processChecksum(input);
        }
    });
});

function processChecksum(inputData) {
    sum = 0;
    //split row
    row = inputData.split('\n');
    //set defaults
    for (i = 0; i < row.length; i++) {
        //reset vals
        min = -1;
        max = -1;
        $('.input').append(row[i] + '<br/>');
        //split numbers
        column = row[i].split('\t');
        for (j = 0; j < column.length; j++) {
            //set the new value
            selected = parseInt(column[j]);
            //set inital min/max to first val
            if (min == -1 && max == -1) {
                min = selected;
                max = selected;
            } else {
                //set new min if smaller than current
                if (selected < min) {
                    min = selected;
                }
                //set new max if bigger than current
                if (selected > max) {
                    max = selected;
                }
            }
        }
        //calculate sum
        sum = sum + (max - min);
    }
    $('.output').append(sum);
}