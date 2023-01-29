function oscars (input) {
    let index = 3;
    let actor = input[0];
    let academyPoints = Number(input[1]);
    let judges = Number(input[2]);

    for (let i = 3; i < input.length; i += 2) {
        let judgeName = input[index];
        index++;
        let judgePoint = Number(input[index]);
        index++;
        let nameLength = judgeName.length; 
        academyPoints = academyPoints + (nameLength * judgePoint / 2)

        if (academyPoints >= 1250.5) {
            break;
        }
    }
    let diff = Math.abs(1250.5 - academyPoints);
    
    if (academyPoints >= 1250.5) {
        console.log(`Congratulations, ${actor} got a nominee for leading role with ${academyPoints.toFixed(1)}!`)
    } else {
        console.log(`Sorry, ${actor} you need ${diff.toFixed(1)} more!`)
    }
}

oscars(["Sandra Bullock",
"340",
"5",
"Robert De Niro",
"50",
"Julia Roberts",
"40.5",
"Daniel Day-Lewis",
"39.4",
"Nicolas Cage",
"29.9",
"Stoyanka Mutafova",
"33"])

