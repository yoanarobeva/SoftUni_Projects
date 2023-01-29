function sleepyTomCat (input) {
    let holidays = Number(input[0]);

    let workdaysMin = (365 - holidays) * 63;
    let holidaysMin = holidays * 127;

    let playTime = workdaysMin + holidaysMin;
    let diff = Math.abs(30000 - playTime);
    let h = Math.trunc(diff / 60);
    let m = diff % 60;

    if (playTime > 30000) {
        console.log("Tom will run away");
        console.log(`${h} hours and ${m} minutes more for play`)
    } else {
        console.log("Tom sleeps well");
        console.log(`${h} hours and ${m} minutes less for play`)
    }
}

sleepyTomCat(["20"])