function shift(letter) {
    if (letter == 'z') return 'a';
    if (letter == 'Z') return 'A';
    if( letter.toUpperCase() != letter.toLowerCase() ) {
        letter = String.fromCharCode(letter.charCodeAt() + 1);
    }
    return letter;
}

function negativeShift(letter) {
    if (letter == 'a') return 'z';
    if (letter == 'A') return 'Z';
    if( letter.toUpperCase() != letter.toLowerCase() ) {
        letter = String.fromCharCode(letter.charCodeAt() - 1);
    }
    return letter;
}

function setCharAt(str,index,chr) {
    if(index > str.length-1) return str;
    return str.substring(0,index) + chr + str.substring(index+1);
}

const caesar = function(inputStr, inputNum) {
    let newStr = inputStr;
    for(y= 0; y < inputStr.length; y++) {
        if (inputNum >= 0) {
            for(x = 0; x < inputNum; x++) {
                newStr = setCharAt(newStr, y, shift(newStr[y]));
            }
        } else {
            for(x = 0; x < Math.abs(inputNum); x++) {
                newStr = setCharAt(newStr, y, negativeShift(newStr[y]));
            }
        }
    }
    return newStr;
}

module.exports = caesar