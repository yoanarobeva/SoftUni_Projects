function carToGo (input) {
    let budget = Number(input[0]);
    let season = input[1];

    let carClass = "";
    let car = "";
    carRent = 0;

    if (budget <= 100) {
        carClass = "Economy class";
        if (season === "Summer") {
            car = "Cabrio";
            carRent = budget * 0.35;
        } else if (season === "Winter") {
            car = "Jeep";
            carRent = budget * 0.65;
        }
    } else if (budget > 100 && budget <= 500) {
        carClass = "Compact class";
        if (season === "Summer") {
            car = "Cabrio";
            carRent = budget * 0.45;
        } else if (season === "Winter") {
            car = "Jeep";
            carRent = budget * 0.8;
        }
    } else if (budget > 500) {
        carClass = "Luxury class";
        car = "Jeep";
        carRent = budget * 0.9;
    }
    console.log(carClass);
    console.log(`${car} - ${carRent.toFixed(2)}`);
}

carToGo (["450", "Summer"])