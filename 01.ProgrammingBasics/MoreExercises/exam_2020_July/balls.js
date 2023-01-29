function balls (input) {
    let index = 0;
    let n = Number(input[index]);
    index++;
    let currentBallColor = input[index];

    let points = 0;
    let redBallCounter = 0;
    let orangeBallCounter = 0;
    let yellowBallCounter = 0;
    let whiteBallCounter = 0;
    let otherBallCounter = 0;
    let divideCounter = 0;

    for (let i = 1; i < input.length; i++) {
        currentBallColor = input[index];

        switch (currentBallColor) {
            case "red": points += 5; redBallCounter++; break;
            case "orange": points += 10; orangeBallCounter++; break;
            case "yellow": points += 15; yellowBallCounter++; break;
            case "white": points += 20; whiteBallCounter++; break;
            case "black": points = Math.floor(points / 2); divideCounter++; break;
            default: otherBallCounter++; break;
        }
        index++;
    }
    console.log(`Total points: ${points}`);
    console.log(`Red balls: ${redBallCounter}`);
    console.log(`Orange balls: ${orangeBallCounter}`);
    console.log(`Yellow balls: ${yellowBallCounter}`);
    console.log(`White balls: ${whiteBallCounter}`);
    console.log(`Other colors picked: ${otherBallCounter}`);
    console.log(`Divides from black balls: ${divideCounter}`);
}

balls (["3",
    "white",
    "black",
    "pink"
    ])