function grandpaStavri (input) {
    let index = 0;
    let dayCount = Number(input[index]);
    index++;
    let currentLiters = Number(input[index]);
    index++;
    let currentDegrees = Number(input[index]);

    let rakiaLiters = 0;
    let rakiaDegreesSum = 0;
    let rakiaDegrees = 0;

    for (let i = 1; i <= dayCount; i++) {
        rakiaLiters += currentLiters;
        rakiaDegreesSum += currentDegrees * currentLiters;
        index++;
        currentLiters = Number(input[index]);
        index++;
        currentDegrees = Number(input[index]);
    }

    rakiaDegrees = rakiaDegreesSum / rakiaLiters;

    console.log(`Liter: ${rakiaLiters.toFixed(2)}`);
    console.log(`Degrees: ${rakiaDegrees.toFixed(2)}`);

    if (rakiaDegrees < 38) {
        console.log("Not good, you should baking!");
    } else if (rakiaDegrees >= 38 && rakiaDegrees <= 42) {
        console.log("Super!");
    } else if (rakiaDegrees > 42) {
        console.log ("Dilution with distilled water!")
    }

}

grandpaStavri(["2",
"200",
"43",
"200",
"40"])



