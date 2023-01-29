function familyTrip (input) {
    let budget = Number(input[0]);
    let nightCount = Number(input[1]);
    let nightPrice = Number(input[2]);
    let additionalPercent = Number(input[3]);

    if (nightCount > 7) {
        nightPrice = nightPrice * 0.95;
    }

    let pricePerStay = nightCount * nightPrice;
    let additionalSpending = budget * additionalPercent / 100;

    let totalSpendMoney = pricePerStay + additionalSpending;
    let diff = Math.abs(budget - totalSpendMoney);
    

    if (totalSpendMoney <= budget) {
        console.log(`Ivanovi will be left with ${diff.toFixed(2)} leva after vacation.`);
    } else {
        console.log(`${diff.toFixed(2)} leva needed.`);
    }
}

familyTrip(["500",
    "7",
    "66",
    "15"
    ])