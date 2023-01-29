function easterDecoration (input) {
    let index = 0;
    let clientCount = Number(input[index]);
    index++;
    let currentProduct = input[index];

    let avgSpentMoney = 0;
    let allSpentMoney = 0
    
    for (let i = 0; i < clientCount; i++) {
       
        let basketCounter = 0;
        let wreathCounter = 0;
        let chocolateBunnyCounter = 0;
        let totalPrice = 0;

        while (currentProduct !== "Finish") {
            
            switch (currentProduct) {
                case "basket": basketCounter++; break;
                case "wreath": wreathCounter++; break;
                case "chocolate bunny": chocolateBunnyCounter++; break;
            }

            totalPrice = basketCounter * 1.50 + wreathCounter * 3.80 + chocolateBunnyCounter * 7;

            index++;
            currentProduct = input[index];
        }
        index++;
        currentProduct = input[index];

        let allItemCounter = basketCounter + wreathCounter + chocolateBunnyCounter;
        if (allItemCounter % 2 === 0) {
            totalPrice = totalPrice * 0.8;
        }
        allSpentMoney += totalPrice
        console.log(`You purchased ${allItemCounter} items for ${totalPrice.toFixed(2)} leva.`);
    }
    avgSpentMoney = allSpentMoney / clientCount;
    console.log(`Average bill per client is: ${avgSpentMoney.toFixed(2)} leva.`);
}

easterDecoration(["1",
"basket",
"wreath",
"chocolate bunny",
"wreath",
"basket",
"chocolate bunny",
"Finish"])

