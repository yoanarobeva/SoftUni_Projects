function fitnessCard(input) {
    let budget = Number(input[0]);
    let sex = input[1];
    let age = Number(input[2]);
    let sport = input[3];

    let neededMoney = 0;

    switch(sport) {
        case "Gym": 
            if (sex === "m") {
                neededMoney = 42;
            } else {
                neededMoney = 35;
            }
        break;
        case "Boxing":
            if (sex === "m") {
                neededMoney = 41;
            } else {
                neededMoney = 37;
            }    
        break;
        case "Yoga":
            if (sex === "m") {
                neededMoney = 45;
            } else {
                neededMoney = 42;
            }    
        break;
        case "Zumba":
            if (sex === "m") {
                neededMoney = 34;
            } else {
                neededMoney = 31;
            }    
        break;
        case "Dances":
            if (sex === "m") {
                neededMoney = 51;
            } else {
                neededMoney = 53;
            }    
        break;
        case "Pilates":
            if (sex === "m") {
                neededMoney = 39;
            } else {
                neededMoney = 37;
            }    
        break;
    }

    if (age <= 19) {
        neededMoney = neededMoney * 0.8;
    }

    if (neededMoney <= budget) {
        console.log(`You purchased a 1 month pass for ${sport}.`);
    } else {
        console.log(`You don't have enough money! You need $${(neededMoney - budget).toFixed(2)} more.`);
    }
}

fitnessCard(["50",
"m",
"23",
"Gym"])
