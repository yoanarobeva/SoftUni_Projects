function mountainRun(input) {
    let worldRecord = Number(input[0]);
    let distance = Number(input[1]);
    let timePerM = Number(input[2]);

    let georgiTimeWithoutDelay = distance * timePerM;
    let delay = Math.floor(distance / 50) * 30;
    let georgiTime = georgiTimeWithoutDelay + delay;

    if (worldRecord > georgiTime) {
        console.log(`Yes! The new record is ${georgiTime.toFixed(2)} seconds.`);
    } else {
        console.log(`No! He was ${(georgiTime - worldRecord).toFixed(2)} seconds slower.`)
    }

}
mountainRun (["5554.36", "1340", "3.23"])