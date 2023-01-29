function fuelTankPart2 (input) {
    let fuelType = input[0];
    let fuelLitres = Number(input[1]);
    let clubCardHolder = input[2];
    
    let sum = 0;

    switch (fuelType) {
        case "Gas": 
            sum = fuelLitres * 0.93;
            if (clubCardHolder === "Yes") {
                sum -= fuelLitres * 0.08;
            }
        break;

        case "Gasoline":
            sum = fuelLitres * 2.22;
            if (clubCardHolder === "Yes") {
                sum -= fuelLitres * 0.18;
            }
        break;

        case "Diesel":
            sum = fuelLitres * 2.33;
            if (clubCardHolder === "Yes") {
                sum -= fuelLitres * 0.12;
            }
        break;
    }
    if (fuelLitres >= 20 && fuelLitres <= 25) {
        sum = sum * 0.92;
    } else if (fuelLitres > 25) {
        sum = sum * 0.9;
    }
    console.log(`${sum.toFixed(2)} lv.`);
}

fuelTankPart2(["Gas", "30", "Yes"]);