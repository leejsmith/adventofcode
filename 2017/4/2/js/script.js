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
    for (i = 0; i < row.length; i++){
        $('.input').append((i+1) + ': ' + row[i] + '<br/>');
        //split words
        column = row[i].split(' ');
        processed = false;
        for (j = 0; j < column.length; j++){
            //set k as next word in row
            k = j+1;
            for (0; k < column.length; k++){
                wordOne = column[j].split('');
                wordTwo = column[k].split('');
                //words can only match if lengths match ignore the rest
                if (wordOne.length == wordTwo.length){
                    count = 0;
                    for (l =0; l < wordOne.length; l++){
                        //check if char exists in both words +1 count if exists
                        if(wordTwo.indexOf(wordOne[l]) > -1){
                            count++;
                        }
                        //if counts match then words can be anagrammed invalid phrase
                        if (count == wordOne.length){
                            processed = true;
                            retVal++;
                            break;
                        }
                    }
                    if(processed){
                        break;
                    }
                }
            }
            if (processed){
                break;
            }
        }
    }
    //retVal is total non accepted phrases calculate total correct phrases
    totalCorrect = row.length - retVal;
    $('.output').append(totalCorrect);
}