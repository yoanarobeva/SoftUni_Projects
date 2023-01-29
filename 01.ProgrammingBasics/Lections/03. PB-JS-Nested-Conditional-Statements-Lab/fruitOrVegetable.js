function fruitOrVegetable (input) {
    let fruitType = input[0];
    if (fruitType === "banana" || fruitType === "apple" ||
    fruitType === "kiwi" || fruitType === "cherry"
    || fruitType === "lemon" || fruitType === "grapes") {
        console.log("fruit");
    } else if (fruitType === "tomato" || fruitType === "cucumber"
    || fruitType === "pepper" || fruitType === "carrot") {
        console.log("vegetable")
    } else {
        console.log("unknown");
    }
}

fruitOrVegetable(["banana"])