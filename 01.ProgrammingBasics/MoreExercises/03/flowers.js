function flowers (input) {
    let hrizantemiCount = Number(input[0]);
    let roseCount = Number(input[1]);
    let tulipCount = Number(input[2]);
    let season = input[3];
    let isHoliday = input[4];

    let sum = 0;
    let hrizantemiPrice = 0;
    let rosePrice = 0;
    let tulipPrice = 0;

    let allFlowers = roseCount + tulipCount + hrizantemiCount;

    if (season === "Spring" || season === "Summer") {
        hrizantemiPrice = hrizantemiCount * 2;
        rosePrice = roseCount * 4.10;
        tulipPrice = tulipCount * 2.50;
        sum = hrizantemiPrice + rosePrice + tulipPrice;
        if (isHoliday === "Y") {
            sum = sum * 1.15;
        }
        if (season === "Spring") {
            if (tulipCount > 7) {
                sum = sum * 0.95
            }
        }
    } else {
        hrizantemiPrice = hrizantemiCount * 3.75;
        rosePrice = roseCount * 4.50;
        tulipPrice = tulipCount * 4.15;
        sum = hrizantemiPrice + rosePrice + tulipPrice;
        if (isHoliday === "Y") {
            sum = sum * 1.15;
        }
        if (season === "Winter") {
            if (roseCount >= 10) {
                sum = sum * 0.9;
            }
        }
    } 

    if (allFlowers > 20) {
        sum = sum * 0.8;
    }

    sum += 2
    console.log(sum.toFixed(2))
}

flowers(["2", "4", "8", "Spring", "Y"])