function trainTheTrainers (input) {
    let index = 0;
    let judgesCount = Number(input[index]);
    index++;
    let presentationName = input[index];
    index++;
    let currentDegree = Number(input[index]);

    let sumAvgDegree = 0;
    let presentationCounter = 0;

    while (presentationName !== "Finish") {
        let sumDegrees = 0;
        let currentAvgDegree = 0

        for (let i = 0; i < judgesCount; i++) {
            currentDegree = Number(input[index]);
            sumDegrees += currentDegree;
            index++;
            currentAvgDegree = sumDegrees / judgesCount;
        }
        console.log(`${presentationName} - ${currentAvgDegree.toFixed(2)}.`)
        sumAvgDegree += currentAvgDegree; 

        presentationCounter++;
        presentationName = input[index];
        index++;
    }
    let avgDegree = sumAvgDegree / presentationCounter;
    console.log(`Student's final assessment is ${avgDegree.toFixed(2)}.`);
}

trainTheTrainers(["3",
"Arrays",
"4.53",
"5.23",
"5.00",
"Lists",
"5.83",
"6.00",
"5.42",
"Finish"])
