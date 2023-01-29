function timeToWalk(stepsNum, footprintM, speedKmH ) {
    let distM = stepsNum * footprintM;
    let breaks = Math.trunc(distM / 500);
    let timeForBreaksInSec = breaks * 60;
    let distKm = distM / 1000;

    let timeH = distKm / speedKmH;
    let timeSec = timeH * 60 * 60 + timeForBreaksInSec;
    
    let hours = Math.trunc(timeSec / 3600);
    let minutes = Math.trunc((timeSec % 3600) / 60);
    let seconds = timeSec % 60;

    if (hours < 10) {
        if (minutes < 10) {
            console.log(`0${hours}:0${minutes}:${seconds.toFixed()}`);
        } else {
            console.log(`0${hours}:${minutes}:${seconds.toFixed()}`);
        }
    } else {
        console.log(`${hours}:${minutes}:${seconds.toFixed()}`);
    }    
}

timeToWalk(4000, 0.60, 5);
console.log('______');
timeToWalk(2564, 0.70, 5.5);