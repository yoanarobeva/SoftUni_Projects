function bestPlayer (input) {
    let index = 0;
    let playerName = input[index];
    index++;
    let goalsNumber = Number(input[index]);

    let bestPlayer = "";
    let maxGoals = 0;
    let isHattrick = false;

    while (playerName !== "END") {
        
        if (goalsNumber > maxGoals) {
            bestPlayer = playerName;
            maxGoals = goalsNumber;
        }
        if (goalsNumber >= 10) {
            break;
        }
        index++;
        playerName = input[index];
        index++;
        goalsNumber = Number(input[index]);
    }

    if (maxGoals >= 3) {
        isHattrick = true;
    }

    console.log(`${bestPlayer} is the best player!`);
    if (isHattrick) {
        console.log(`He has scored ${maxGoals} goals and made a hat-trick !!!`);
    } else {
        console.log(`He has scored ${maxGoals} goals.`);
    }
}

bestPlayer (["Neymar", "2",
"Ronaldo",
"1",
"Messi",
"3",
"END"])


