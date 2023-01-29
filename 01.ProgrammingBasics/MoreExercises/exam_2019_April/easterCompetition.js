function easterCompetition (input) {
    let index = 0; 
    let sweetBreadCount = Number(input[index]);
    index++;
    let chefName = input[index];
    index++;
    let command = input[index];

    let maxPointsChef = "";
    let maxPoint = 0;

    for (let i = 0; i < sweetBreadCount; i++) {
        let totalPoints = 0;
        let isMaxPoints = false;
        while (command !== "Stop") {
            let currentPoints = Number(command);
            totalPoints += currentPoints;

            index++;
            command = input[index];
        }

        if (totalPoints > maxPoint) {
            maxPointsChef = chefName;
            maxPoint = totalPoints;
            isMaxPoints = true;
        }

        console.log(`${chefName} has ${totalPoints} points.`)

        if (isMaxPoints) {
            console.log(`${chefName} is the new number 1!`);
        }

        index++;
        chefName = input[index];
        index++;
        command = input[index];
    }  

    console.log(`${maxPointsChef} won competition with ${maxPoint} points!`);
}

easterCompetition(["2",
"Chef Angelov",
"9",
"9",
"9",
"Stop",
"Chef Rowe",
"10",
"10",
"10",
"10",
"Stop"])

