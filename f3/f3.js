const students = require('../students.json');
/* Írj függvényt ami megvizsgálja, hogy van-e eltérés a freeDormitory
 boolean és dormitoryPrice number-ek között
 (Ha jól van feltöltve a lista a false értékek száma és a null-ok száma megegyezik.
  Ha nem akkor írja ki az eltérést) */

const f3 = (x) => {

    let elteres = 0;

    students.forEach(student => {
        if ((student.freeDormitory && student.dormitoryPrice !== null) ||
            (!student.freeDormitory && student.dormitoryPrice === null)) {
            elteres++;
        }
    });

    return elteres;

}

f3(students);
module.exports = f3;
