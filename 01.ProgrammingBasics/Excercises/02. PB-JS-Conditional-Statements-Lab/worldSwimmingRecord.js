function worldSwimmingRecord (input) {
    let worldRecord = Number(input[0]);
    let distance = Number(input[1]);
    let timePerMeter = Number(input[2]);

    let time = distance * timePerMeter;
    let waterResistance = Math.floor(distance / 15) * 12.5;
    let timeIvan = (time + waterResistance).toFixed(2);
    let diff = Math.abs(timeIvan - worldRecord).toFixed(2);

    if (timeIvan < worldRecord) {
        console.log(`Yes, he succeeded! The new world record is ${timeIvan} seconds.`);
    } else {
        console.log(`No, he failed! He was ${diff} seconds slower.`);
    }
}

worldSwimmingRecord (["55555.67","3017","5.03"]);

