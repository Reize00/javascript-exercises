const getTheTitles = function(books) {
    answer = [];
    for (book in books) {
        answer.push(books[book].title);
    }
    return answer;
}

module.exports = getTheTitles;
