function graduation (input) {
    let index = 0;
    let studentName = input[index];
    index ++;

    let sumGrades = 0;
    let fail = 0;
    let currentClass = 1;

    let isExpeled = false;

    while (currentClass <= 12) {
        let annualGrade = Number(input[index]);

        if (annualGrade < 4) {
            fail++
            if (fail === 2) {
                console.log(`${studentName} has been excluded at ${currentClass} grade`);
                isExpeled = true;
                break;
            } 
            continue;
        } 
        sumGrades += annualGrade;
        currentClass++;
        index++;
    }
    let averageGrade = sumGrades / 12;
    if (!isExpeled) {
        console.log(`${studentName} graduated. Average grade: ${averageGrade.toFixed(2)}`);
    }
}

graduation(["Gosho", 
"5",
"5.5",
"6",
"5.43",
"5.5",
"6",
"5.55",
"5",
"6",
"6",
"5.43",
"5"])


