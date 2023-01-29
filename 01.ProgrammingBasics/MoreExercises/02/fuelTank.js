function fuelTank(input) {
    let fuelType = input[0];
    let litres = Number(input[1]);
    let isFuelTypeValid = true;

    switch (fuelType) {
        case "Diesel": fuelType = "diesel"; break;
        case "Gasoline": fuelType = "gasoline"; break;
        case "Gas": fuelType = "gas"; break;
        default: console.log(`Ivalid fuel!`); isFuelTypeValid = false; break;
    } 
    if(isFuelTypeValid) {
        if (litres >= 25){
            console.log(`You have enough ${fuelType}`);
        } else {
            console.log(`Fill your tank with ${fuelType}!`);
    }
    }
}

fuelTank(["Diesel", "10"])