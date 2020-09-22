const sumAll = function(numberA, numberB) {
    let startNumber = 0;
    let endNumber = 0;

    if (numberA < 0 || numberB < 0) return "ERROR";

    if (typeof numberA != "number" && typeof numberA != "bigint") return "ERROR";
    if (typeof numberB != "number" && typeof numberB != "bigint") return "ERROR";

    if (numberA <= numberB) {
        beginNumber = numberA;
        endNumber = numberB;
    } else {
        beginNumber = numberB;
        endNumber = numberA;
    }

    let total = 0;

    for (x = beginNumber; x <= endNumber; x++) {
        total += x;
    }

    return total;
}

module.exports = sumAll
