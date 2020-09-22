const reverseString = function(str) {
    let word = str.split("");
    let answer = "";

    for(i = word.length-1; i >= 0; i--) {
        answer += word[i];
    }

    return answer;
}

module.exports = reverseString
