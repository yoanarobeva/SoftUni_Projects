function tournamentOfChristmas (input) {
    let index = 0;
    let daysTournament = Number(input[index]);
    index++;
    let sport = input[index];
    index++;
    let result = input[index];

    let totalMoneyRaised = 0;
    let winDaysCounter = 0;

    for (i = 0; i < daysTournament; i++) {
        let winCounter = 0;
        let loseCounter = 0;
        let money = 0;

        while (sport !== "Finish") {

            if (result === "win") {
                winCounter++;
                money += 20;
            } else {
                loseCounter++;
            }

            index++;
            sport = input[index];
            index++;
            result = input[index];
        }

        if (winCounter > loseCounter) {
            money = money * 1.1;
            winDaysCounter++;
        }
        
        totalMoneyRaised += money;

        sport = input[index];
        index++;
        result = input[index]; 
    }

    if (winDaysCounter > daysTournament / 2) {
        totalMoneyRaised = totalMoneyRaised * 1.2;
        console.log (`You won the tournament! Total raised money: ${totalMoneyRaised.toFixed(2)}`);
    } else {
        console.log (`You lost the tournament! Total raised money: ${totalMoneyRaised.toFixed(2)}`);
    }
}

tournamentOfChristmas(["3",
"darts",
"lose",
"handball",
"lose",
"judo",
"win",
"Finish",
"snooker",
"lose",
"swimming",
"lose",
"squash",
"lose",
"table tennis",
"win",
"Finish",
"volleyball",
"win",
"basketball",
"win",
"Finish"])

