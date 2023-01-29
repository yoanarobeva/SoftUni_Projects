function walking (input) {
    let index = 0;
    let currentSteps = input[index];
   

    let sumSteps = 0;
    let diff = 0;

    while (true) {
        currentSteps = input[index];

        if (currentSteps === "Going home") {
            index++
            currentSteps = Number(input[index]);
            sumSteps += currentSteps;

            if (sumSteps >= 10000) {
                diff = sumSteps - 10000;
                console.log(`Goal reached! Good job!`);
                console.log(`${diff} steps over the goal!`);
                break;
            } else {
                diff = 10000 - sumSteps;
                console.log(`${diff} more steps to reach goal.`);
                break;
            }

        } else {
            currentSteps = Number(input[index]);
            index++;
            sumSteps += currentSteps;

            if (sumSteps >= 10000) {
                diff = sumSteps - 10000;
                console.log(`Goal reached! Good job!`);
                console.log(`${diff} steps over the goal!`);
                break;
            }
        }
    }
}

walking(["125",
"250",
"4000",
"30",
"2678",
"4682"])




