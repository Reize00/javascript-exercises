const palindromes = function(str) {
    //remove all punctuation
    str = str.replace(/[^\w\s]|_/g, "").replace(/\s+/g, "");
    const forwardArray = str.split("");
    const backwardArray = [];

    for (x = 0; x < forwardArray.length; x++) {
        backwardArray.unshift(forwardArray[x]);
    }

    strA = JSON.stringify(forwardArray).toLowerCase();
    console.log(strA);
    strB = JSON.stringify(backwardArray).toLowerCase();
    console.log(strB);
    
    if(JSON.stringify(forwardArray).toLowerCase() == JSON.stringify(backwardArray).toLowerCase()) {
        return true;
    } else return false;

}

module.exports = palindromes
