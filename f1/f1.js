const students = require('../students.json');

//Írj függvényt annak kiszűrésére, hogy a tanulók melyik emeleten laknak.
function f1(floor) {
    const result = [];

    students.forEach(x => {
        if (floor === x.dormitoryFloor) {
            result.push(x);
        }
    });

    return result;
}

const endData = f1(students)
console.log(endData);

module.exports = f1;
