function examPreparation (input) {
    let index = 0;
    let notEnoughGradeCount = Number(input[index]);
    index++;

    let avgGrade = 0;
    let sumForAvgGrade = 0;
    let problemCounter = 0;
    let underFourGradeCounter = 0;


    while (true) {
        let problemName = input[index];
        index++;
        let problemGrade = Number(input[index]);
        index++;

        if (problemName === "Enough") {
            index -= 4;
            let lastProblemName = input[index];
            console.log(`Average score: ${avgGrade.toFixed(2)}`);
            console.log(`Number of problems: ${problemCounter}`);
            console.log(`Last problem: ${lastProblemName}`);
            break;
        } else if (problemGrade <= 4) {
            underFourGradeCounter++;
            problemCounter++;
            sumForAvgGrade += problemGrade;
            if (underFourGradeCounter === notEnoughGradeCount) {
                console.log (`You need a break, ${underFourGradeCounter} poor grades.`);
                break;
            }
        } else {
            sumForAvgGrade += problemGrade;
            problemCounter++;
            avgGrade = sumForAvgGrade / problemCounter;
        }
    }
    
}

examPreparation(["2",
"Income",
"3",
"Game Info",
"6",
"Best Player",
"4"])

