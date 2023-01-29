function newHouse (input) {
    let flowersType = input[0];
    let flowerCount = Number(input[1]);
    let budget = Number(input[2]);

    let sum = 0;

    switch (flowersType) {
        case "Roses": 
            sum = flowerCount * 5; 
            if (flowerCount > 80) {
                sum = sum * 0.90;
            }
            break;
        case "Dahlias": 
            sum = flowerCount * 3.80;
            if (flowerCount > 90) {
                sum = sum * 0.85;
            }
            break;
        case "Tulips": 
            sum = flowerCount * 2.80; 
            if (flowerCount > 80) {
                sum = sum * 0.85;
            }
            break;
        case "Narcissus": 
            sum = flowerCount * 3; 
            if (flowerCount < 120) {
                sum = sum * 1.15;
            }
            break;
        case "Gladiolus": 
            sum = flowerCount * 2.50; 
            if (flowerCount < 80) {
                sum = sum * 1.2;
            }
            break;
    }

    let diff = Math.abs(budget - sum).toFixed(2);

    if (budget >= sum) {
        console.log(`Hey, you have a great garden with ${flowerCount} ${flowersType} and ${diff} leva left.`)
    } else {
        console.log(`Not enough money, you need ${diff} leva more.`)
    }
}

newHouse(["Narcissus",
"119",
"360"])


