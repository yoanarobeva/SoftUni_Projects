function energyBooster(input) {
    let fruit = input[0];
    let setSize = input[1];
    let setCount = Number(input[2]);

    let price = 0;

    switch(fruit) {
        case "Watermelon": 
            if (setSize === "small") {
                price = setCount * 2 * 56;
            } else {
                price = setCount * 5 * 28.70;
            }
        break;
        case "Mango":
            if (setSize === "small") {
                price = setCount * 2 * 36.66;
            } else {
                price = setCount * 5 * 19.60;
            }    
        break;
        case "Pineapple": 
            if (setSize === "small") {
                price = setCount * 2 * 42.1;
            } else {
                price = setCount * 5 * 24.80;
            }
        break;
        case "Raspberry": 
            if (setSize === "small") {
                price = setCount * 2 * 20;
            } else {
                price = setCount * 5 * 15.20;
            }
        break;
    }

    if (price >= 400 && price <= 1000) {
        price = price * 0.85;
    } else if (price > 1000) {
        price = price * 0.5;
    }

    console.log(`${price.toFixed(2)} lv.`)
}

energyBooster(["Watermelon",
"big",
"4"])

