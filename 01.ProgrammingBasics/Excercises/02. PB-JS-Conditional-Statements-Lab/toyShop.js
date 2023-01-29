function toyShop (input) {
    let excursionPrice = Number (input[0]);
    let puzzleCount = Number (input[1]);
    let dollCount = Number (input[2]);
    let bearCount = Number (input[3]);
    let minionCount = Number (input[4]);
    let truckCount = Number (input[5]);

    let allToysCount = puzzleCount + dollCount + 
        bearCount + minionCount + truckCount;
    let allToysPrice = puzzleCount * 2.60 + dollCount * 3 +
        bearCount * 4.10 + minionCount * 8.2 +
        truckCount * 2;

    if (allToysCount >= 50) {
        allToysPrice = allToysPrice * 0.75;
    }

    let finalIncome = allToysPrice * 0.9;
    let diff = Math.abs(excursionPrice - finalIncome).toFixed(2);


    if (finalIncome >= excursionPrice) {
        console.log(`Yes! ${diff} lv left.`);
    } else {
        console.log(`Not enough money! ${diff} lv needed.`);
    }
    
}

toyShop (["40.8",
"20",
"25",
"30",
"50",
"10"])


