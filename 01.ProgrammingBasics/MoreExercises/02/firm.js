function firm (input) {
    let neededHours = Number(input[0]);
    let deadlineDays = Number(input[1]);
    let workers = Number(input[2]);

    let workedHoursByFirm = deadlineDays * 0.9 * 8;
    let additionalTime = workers * 2 * deadlineDays;
    let workedHours = Math.floor(workedHoursByFirm + additionalTime);
    diff = Math.abs(workedHours - neededHours);

    if (neededHours <= workedHours) {
        console.log(`Yes!${diff} hours left.`);
    } else {
        console.log(`Not enough time!${diff} hours needed.`)
    }
}

firm(["90", "7", "3"])