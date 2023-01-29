function trekkingMania (input) {
    let groupCount = Number(input[0]);
    let index = 1;
    let peopleCount = 0;

    let musalaCount = 0;
    let montblancCount = 0;
    let kilimandjaroCount = 0;
    let k2Count = 0;
    let everestCount = 0;

    for (let i = 1; i <= groupCount; i++) {
        let num = Number(input[index]);
        if (num <= 5) {
            musalaCount += num;
        } else if (num >= 6 && num <= 12) {
            montblancCount += num;
        } else if (num >= 13 && num <= 25) {
            kilimandjaroCount += num;
        } else if (num >= 26 && num <= 40) {
            k2Count += num;
        } else if (num >= 41) {
            everestCount += num;
        }
        index++;
        peopleCount += num;
    }
    console.log(`${(musalaCount / peopleCount * 100).toFixed(2)}%`);
    console.log(`${(montblancCount / peopleCount * 100).toFixed(2)}%`);
    console.log(`${(kilimandjaroCount / peopleCount * 100).toFixed(2)}%`);
    console.log(`${(k2Count / peopleCount * 100).toFixed(2)}%`);
    console.log(`${(everestCount / peopleCount * 100).toFixed(2)}%`);
}

trekkingMania(["5",
"25",
"41",
"31",
"250",
"6"])

