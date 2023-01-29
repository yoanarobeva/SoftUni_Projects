function deerOfSanta (input) {
    let missingDays = Number(input[0]);
    let leftFoodKG = Number(input[1]);
    let deerOneFoodKGPerDay = Number(input[2]);
    let deerTwoFoodKGPerDay = Number(input[3]);
    let deerThreeFoodKGPerDay = Number(input[4]);

    let deerOneFood = deerOneFoodKGPerDay * missingDays;
    let deerTwoFood = deerTwoFoodKGPerDay * missingDays;
    let deerThreeFood = deerThreeFoodKGPerDay * missingDays;

    let neededFood = deerOneFood + deerTwoFood + deerThreeFood;

    let diff = Math.abs(neededFood - leftFoodKG);

    if (neededFood <= leftFoodKG) {
        console.log(`${Math.floor(diff)} kilos of food left.`);
    } else {
        console.log(`${Math.ceil(diff)} more kilos of food are needed.`);
    }
}

deerOfSanta(["5",
"10",
"2.1",
"0.8",
"11"])

