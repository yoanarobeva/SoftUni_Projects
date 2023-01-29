function schoolGrades(input) {
    let studentsMap = new Map();

    for (let line of input) {
        let token = line.split(" ");
        let name = token.shift();
        let grades = token;

        if (studentsMap.has(name)) {
            let temp = studentsMap.get(name);
            grades.forEach(a => temp.push(a));
            grades = temp;
        }

        studentsMap.set(name, grades);
    }

    let namesArr = Array.from(studentsMap.keys());
    namesArr.sort((a, b) => a.localeCompare(b));

    for (let name of namesArr) {
        let grades = studentsMap.get(name);
        let avgSum = 0
        for (let num of grades) {
            avgSum += Number(num);
        }

        let avg = avgSum / grades.length;
        console.log(`${name}: ${avg.toFixed(2)}`);
    }
}

schoolGrades(['Lilly 4 6 6 5',
    'Tim 5 6',
    'Tammy 2 4 3',
    'Tim 6 6'])