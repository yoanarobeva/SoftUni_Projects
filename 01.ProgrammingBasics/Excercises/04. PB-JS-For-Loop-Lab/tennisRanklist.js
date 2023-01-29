function tennisRanklist (input) {
    let tournamentCount = Number(input[0]);
    let ranglistScore = Number(input[1]);
    let index = 2;
    
    let winsCounter = 0;
    let finalsCounter = 0;
    let semiFinalsCounter = 0;

    let finalScore = 0;

    for (let i = 1; i <= tournamentCount; i++) {
        let currentStage = input[index];
        index++;

        switch (currentStage) {
            case "W": winsCounter++; break;
            case "F": finalsCounter++; break;
            case "SF": semiFinalsCounter++; break;
        }
    }
    finalScore = ranglistScore + winsCounter * 2000 +
    finalsCounter * 1200 + semiFinalsCounter * 720;   

    let avaragePoints = (finalScore - ranglistScore) / tournamentCount;
    let percentageWins = winsCounter / tournamentCount * 100;

    console.log(`Final points: ${finalScore}`);
    console.log(`Average points: ${Math.floor(avaragePoints)}`);
    console.log(`${percentageWins.toFixed(2)}%`);
}

tennisRanklist(["4",
"750",
"SF",
"W",
"SF",
"W"])

