function pets (input) {
    let days = Number(input[0]);
    let foodKG = Number(input[1]);
    let dogFoodPerDay = Number(input[2]);
    let catFoodPerDay = Number(input[3]);
    let turtleFoodPerDay = Number(input[4]) / 1000;

    let dogFood = dogFoodPerDay * days;
    let catFood = catFoodPerDay * days;
    let turtleFood = turtleFoodPerDay * days;
    let sum = dogFood + catFood + turtleFood;

    let diff = Math.abs(foodKG - sum);

    if (sum <= foodKG) {
        console.log(`${Math.floor(diff)} kilos of food left.`);
    } else {
        console.log(`${Math.ceil(diff)} more kilos of food are needed.`);
    }
}

pets(["2", "10", "1", "1", "1200"])