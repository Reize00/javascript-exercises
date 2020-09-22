const removeFromArray = function(inputArray, ...theArgs) {

    for (x = 0; x < theArgs.length; x++) {
        for (i = 0; i < inputArray.length; i++) {
            if (theArgs[x] === inputArray[i]) {
                inputArray.splice(i, 1);
            }
        }
    }

    return inputArray;
}

module.exports = removeFromArray
