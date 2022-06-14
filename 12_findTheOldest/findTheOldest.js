const findTheOldest = function(people) {

let peopleOldest = people.sort(function(a,b) {

    if (a.yearOfDeath === undefined) {
        a.yearOfDeath = new Date().getFullYear()
    }

    let lastPerson = a.yearOfDeath - a.yearOfBirth;

    if (b.yearOfDeath === undefined) {
        b.yearOfDeath = new Date().getFullYear()
    }

    let nextPerson = b.yearOfDeath - b.yearOfBirth;

    return lastPerson > nextPerson ? -1 : 1;
});

return peopleOldest[0];

};

// Do not edit below this line
module.exports = findTheOldest;
