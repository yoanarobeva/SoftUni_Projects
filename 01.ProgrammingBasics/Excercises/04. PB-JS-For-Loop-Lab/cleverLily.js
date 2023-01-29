function cleverLily (input) {
    let age = Number(input[0]);
    let priceWashingMachine = Number(input[1]);
    let priceToy = Number(input[2]);

    let moneyYearCounter = 0;
    let toyYearCounter = 0;
    let totalMoney = 0;

    for (let i = 1; i <= age; i++) {
        if (i % 2 === 0) {
            moneyYearCounter++
            totalMoney += (moneyYearCounter * 10) - 1;
        } else {
            toyYearCounter++;
        }
    }

    totalMoney += toyYearCounter * priceToy;
    let diff = Math.abs(priceWashingMachine-totalMoney).toFixed(2);

    if (totalMoney >= priceWashingMachine) {
        console.log (`Yes! ${diff}`);
    } else {
        console.log (`No! ${diff}`);
    }
}

cleverLily(["21",
"1570.98",
"3"])

