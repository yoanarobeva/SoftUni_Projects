function vacation (input) {
    let index = 0;
    let neededMoney = Number(input[index++]);
    let currentMoney = Number(input[index++]);
   
    let daycounter = 0;
    let spendDaysCounter = 0;

    while (true) {
        let balance = input[index++];
        let balanceMoney = Number(input[index++]);

        if (balance === "spend") {
            spendDaysCounter++;
            daycounter++;
            currentMoney -= balanceMoney;
            if (currentMoney <= 0) {
                currentMoney = 0;
            }
            if (spendDaysCounter >= 5) {
                console.log(`You can't save the money.`);
                console.log(daycounter);
                break;
            }
        } else if (balance === "save") {
            daycounter++
            currentMoney += balanceMoney;
            spendDaysCounter = 0;
            if (currentMoney >= neededMoney) {
                console.log(`You saved the money for ${daycounter} days.`);
                break;
            }
        }
      
    }

}

vacation(["250",
"150",
"spend",
"50",
"spend",
"50",
"save",
"100",
"save",
"100"])


