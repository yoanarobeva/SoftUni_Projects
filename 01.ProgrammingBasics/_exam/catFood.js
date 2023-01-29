function catFood (input) {
    let index = 0;
    let catCount = Number(input[index]);
    index++;
    let currentCatFood = Number(input[index]);

    let smallCatsCounter = 0;
    let bigCatsCounter = 0;
    let giantCatsCounter = 0;
    
    let allFoodGrams = 0;

    for (let i = 1; i <= catCount; i++) {
        if (currentCatFood >= 100 && currentCatFood < 200) {
            smallCatsCounter++;
        } else if (currentCatFood >= 200 && currentCatFood < 300) {
            bigCatsCounter++;
        } else if (currentCatFood >= 300 && currentCatFood < 400) {
            giantCatsCounter++;
        }
        allFoodGrams += currentCatFood;

        index++;
        currentCatFood = Number(input[index]);
    }

    let allFoodKG = allFoodGrams / 1000;
    let price = allFoodKG * 12.45;

    console.log(`Group 1: ${smallCatsCounter} cats.`);
    console.log(`Group 2: ${bigCatsCounter} cats.`);
    console.log(`Group 3: ${giantCatsCounter} cats.`);
    console.log(`Price for food per day: ${price.toFixed(2)} lv.`);
}

catFood(["7",
"100",
"200",
"342",
"300",
"234",
"123",
"212"])


