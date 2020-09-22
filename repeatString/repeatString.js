const repeatString = function(string, num) {
    let answer = ""
    if (num < 0) {
        return "ERROR";
    }
    for (i = 1; i <= num; i++) {
        answer += string;
    }
    return answer;
}

module.exports = repeatString
