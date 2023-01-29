function christmasGifts (input) {
    let index = 0;
    let command = input[index];

    let kidCounter = 0;
    let adultCounter = 0;

    while (command !== "Christmas") {
        let currentAge = Number(input[index]);

        if (currentAge <= 16) {
            kidCounter++;
        } else {
            adultCounter++;
        }

        index++;
        command = input[index];
    }

    let sumToys = kidCounter * 5;
    let sumSweaters = adultCounter * 15;

    console.log(`Number of adults: ${adultCounter}`);
    console.log(`Number of kids: ${kidCounter}`);
    console.log(`Money for toys: ${sumToys}`);
    console.log(`Money for sweaters: ${sumSweaters}`);
}

christmasGifts(["18",
"20",
"48",
"45",
"56",
"37",
"12",
"14",
"Christmas"])


