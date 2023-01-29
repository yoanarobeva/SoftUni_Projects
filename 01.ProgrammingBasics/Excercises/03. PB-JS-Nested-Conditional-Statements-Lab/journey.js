function journey (input) {
    let budget = Number(input[0]);
    let season = input[1];

    let destination = "";
    let hollidayType = "";
    let sum = 0;

    if (budget <= 100) {
        destination = "Bulgaria";
        if (season === "summer") {
            sum = 0.3 * budget;
            hollidayType = "Camp";
        } else if (season === "winter") {
            sum = 0.7 * budget; 
            hollidayType = "Hotel";
        }
    } else if (budget > 100 && budget <= 1000 ) {
        destination = "Balkans";
        if (season === "summer") {
            sum = 0.4 * budget;
            hollidayType = "Camp";
        } else if (season === "winter") {
            sum = 0.8 * budget; 
            hollidayType = "Hotel";
        }
    } else {
        destination = "Europe";
        hollidayType = "Hotel";
        sum = 0.9 * budget;
    }
    console.log(`Somewhere in ${destination}`);
    console.log(`${hollidayType} - ${sum.toFixed(2)}`);
}

journey(["1500", "summer"])