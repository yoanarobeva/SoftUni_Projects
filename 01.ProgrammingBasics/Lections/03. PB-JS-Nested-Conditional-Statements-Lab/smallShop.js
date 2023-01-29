function smallShop(input) {
    let productType = input[0];
    let city = input[1];
    let quantity = input[2];

    let price = 0

    switch (productType) {
        case "coffee":
            switch (city) {
                case "Sofia": price = quantity * 0.5; break;
                case "Plovdiv": price = quantity * 0.4; break;
                case "Varna": price = quantity * 0.45; break;
            }
        break;
        case "water":
            switch (city) {
                case "Sofia": price = quantity * 0.8; break;
                case "Plovdiv": price = quantity * 0.7; break;
                case "Varna": price = quantity * 0.7; break;
            }
        break;
        case "beer":
            switch (city) {
                case "Sofia": price = quantity * 1.20; break;
                case "Plovdiv": price = quantity * 1.15; break;
                case "Varna": price = quantity * 1.10; break;
            }
        break;
        case "sweets":
            switch (city) {
                case "Sofia": price = quantity * 1.45; break;
                case "Plovdiv": price = quantity * 1.30; break;
                case "Varna": price = quantity * 1.35; break;
            }
        break;
        case "peanuts":
            switch (city) {
                case "Sofia": price = quantity * 1.60; break;
                case "Plovdiv": price = quantity * 1.50; break;
                case "Varna": price = quantity * 1.55; break;
            }
        break;

        console.log(price);
            
    }
    console.log(price);
}

smallShop(["peanuts",
"Plovdiv",
"1"])
