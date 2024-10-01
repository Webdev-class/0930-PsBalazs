const students = require('../students.json');
/* Írj függvényt ami feltölt egy objektumot (lehetőleg üres {}-ről induljon)
a klubbok nevével és tagjainak számával. (pl. {"club1": 4, "club2": 3....}) */
function f2() {

    const result = {};

    students.forEach(student => {
        const club = student.club;

        if (!result[club]) {
            result[club] = 0;
        }

        result[club]++;
    });

    return result;
}

const endData = f2(students)
console.log(endData);

module.exports = f2;
