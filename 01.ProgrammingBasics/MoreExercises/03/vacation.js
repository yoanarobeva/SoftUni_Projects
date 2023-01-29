function vacation (input) {
    let budget = Number(input[0]);
    let season = input[1];

    let price = 0;
    let location = "";
    let roomType = "";

    if (budget <= 1000) {
        roomType = "Camp";
        if (season === "Summer") {
            location = "Alaska";
            price = budget * 0.65;
        } else if (season === "Winter") {
            location = "Morocco";
            price = budget * 0.45;
        }
    } else if (budget > 1000 && budget <= 3000) {
        roomType = "Hut"
        if (season === "Summer") {
            location = "Alaska";
            price = budget * 0.8;
        } else if (season === "Winter") {
            location = "Morocco";
            price = budget * 0.60;
        }
    } else if (budget > 3000) {
        roomType = "Hotel"
        price = budget * 0.9;

        if (season === "Summer") {
            location = "Alaska";
        } else if (season === "Winter") {
            location = "Morocco";
        }
    }
    console.log(`${location} - ${roomType} - ${price.toFixed(2)}`)
}

vacation (["800", "Summer"])