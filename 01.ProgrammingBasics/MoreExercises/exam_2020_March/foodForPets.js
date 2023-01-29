function foodForPets (input) {
    let index = 0;
    let days = Number(input[index]);
    index++;
    let foodQTY = Number(input[index]);
    index++;
    let dogCurrentFood = Number(input[index]);
    index++;
    let catCurrentFood = Number(input[index]);

    let dogFood = 0;
    let catFood = 0;
    let dayCounter = 0;
    let buiscitsQTY = 0;

    for (let i = 1; i <= days; i++) {
        dogFood += dogCurrentFood;
        catFood += catCurrentFood;
        dayCounter++;

        if (dayCounter % 3 === 0) {
            buiscitsQTY += (dogCurrentFood + catCurrentFood) * 0.10;
        }
        index++;
        dogCurrentFood = Number(input[index]);
        index++;
        catCurrentFood = Number(input[index]);

    }
    let percentFood = (dogFood + catFood) / foodQTY * 100;
    let percentFoodDog = dogFood / (dogFood + catFood) * 100;
    let percentFoodCat = catFood / (dogFood + catFood) * 100;

    console.log(`Total eaten biscuits: ${Math.round(buiscitsQTY)}gr.`);
    console.log(`${percentFood.toFixed(2)}% of the food has been eaten.`);
    console.log(`${percentFoodDog.toFixed(2)}% eaten from the dog.`);
    console.log(`${percentFoodCat.toFixed(2)}% eaten from the cat.`);
}
foodForPets(["3",
"500",
"100",
"30",
"110",
"25",
"120",
"35"])

