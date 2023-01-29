function fishingBoat (input) {
    let groupBudget = Number(input[0]);
    let season = input[1];
    let fishermanCount = Number(input[2]);

    let boatPrice = 0;

    switch (season) {
        case "Spring": boatPrice = 3000; break;
        case "Summer":
        case "Autumn": boatPrice = 4200; break;
        case "Winter": boatPrice = 2600; break;
    }

    if (fishermanCount <= 6) {
        boatPrice = boatPrice * 0.9;
    } else if (fishermanCount > 12) {
        boatPrice = boatPrice * 0.75;
    } else {
        boatPrice = boatPrice * 0.85;
    }

    if (season !== "Autumn" && fishermanCount % 2 === 0) {
        boatPrice = boatPrice * 0.95;
    }

    let diff = Math.abs(groupBudget-boatPrice).toFixed(2);

    if (groupBudget >= boatPrice) {
        console.log (`Yes! You have ${diff} leva left.`);
    } else {
        console.log (`Not enough money! You need ${diff} leva.`);
    }
}

fishingBoat(["2000",
"Winter",
"13"])


