function getAge(person) {
    let date = new Date();
    let age = 0;
    if(person.yearOfBirth === "undefined") {
        age = 0;
    } else if("yearOfDeath" in person) {
        age = person.yearOfDeath - person.yearOfBirth;
    } else {
        age = date.getFullYear() - person.yearOfBirth;
    }
    return age;
}

let findTheOldest = function(people) {
    currentOldest = {
        name: 'test',
        yearOfBirth: 2020,
    };
    for (person in people) {
        if (getAge(people[person]) > getAge(currentOldest)) {
            currentOldest = people[person];
        }
    }

    return currentOldest;
}

module.exports = findTheOldest