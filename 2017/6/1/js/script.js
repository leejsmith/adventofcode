$(document).on('ready', function() {
    $.ajax({
        url: '/2017/6/input.txt',
        success: function(data) {
            input = data;
            memoryCheck(input);
        }
    });
});

function memoryCheck(inputData) {
    count = 0;
    var history = new Array();
    banks = new Array();
    processed = false;
    inputSplit = inputData.split('\t');
    $('.input').append(inputData);
    strHistory = '';
    for (i = 0; i < inputSplit.length; i++) {
        banks[i] = parseInt(inputSplit[i]);
    }
    strHistory = banks.toString();
    history[0] = strHistory;
    count++;
    while (!processed) {
        selectedBank = getHighestBankIndex(banks);
        memValue = banks[selectedBank];
        banks[selectedBank] = 0;
        for (i = memValue; i > 0; i--) {
            selectedBank++;
            if (selectedBank >= banks.length) {
                selectedBank = 0;
            }
            banks[selectedBank]++;
        }
        
        if (history.indexOf(banks.toString()) > -1) {
            break;
        } else {
            history[count] = banks.toString();
            count++;
        }
    }
    $('.output').append(count);
}

function getHighestBankIndex(banks) {
    retVal = -1;
    currHighest = -1;
    for (i = 0; i < banks.length; i++) {
        if (banks[i] > currHighest) {
            currHighest = banks[i];
            retVal = i;
        }
    }
    return retVal;
}

