function lunchBreak (input) {
    let seriesName = input[0];
    let time = Number(input[1]);
    let breakTime = Number(input[2]);

    let lunchTime = 1/8 * breakTime;
    let relaxTime = 1/4 * breakTime;
    let timeToWatch = breakTime - lunchTime - relaxTime;

    let diff = Math.ceil(Math.abs(timeToWatch - time));

    if (timeToWatch >= time) {
        console.log(`You have enough time to watch ${seriesName} and left with ${diff} minutes free time.`);
    } else {
        console.log(`You don't have enough time to watch ${seriesName}, you need ${diff} more minutes.`);
    }
}

lunchBreak (["Teen Wolf",
"48",
"60"])

