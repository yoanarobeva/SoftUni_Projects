function meetings(input) {
    let meetingsObj = {};

    for (let line of input) {
        let [day, name] = line.split(" ");
        if (!meetingsObj.hasOwnProperty(day)) {
            meetingsObj[day] = name;
            console.log(`Scheduled for ${day}`);
        } else {
            console.log(`Conflict on ${day}!`);
        }
    }

    for (let [day, name] of Object.entries(meetingsObj)) {
        console.log(`${day} -> ${name}`);
    }
}

meetings(['Monday Peter',
'Wednesday Bill',
'Monday Tim',
'Friday Tim'])