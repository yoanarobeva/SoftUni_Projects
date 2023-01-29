function careOfPuppy (input) {
    let index = 0;
    let food = Number(input[index]) * 1000;
    index++;
    let command = input[index];

    let totalEatedFood = 0;
    
    while (command !== "Adopted") {
        let currentFood = Number(input[index]);
        index++;
        totalEatedFood += currentFood;
        command = input[index];
    }

    if (totalEatedFood <= food) {
        console.log (`Food is enough! Leftovers: ${food - totalEatedFood} grams.`);
    } else {
        console.log (`Food is not enough. You need ${totalEatedFood - food} grams more.`);
    }
}

careOfPuppy(["4",
"130",
"345",
"400",
"180",
"230",
"120",
"Adopted"])
