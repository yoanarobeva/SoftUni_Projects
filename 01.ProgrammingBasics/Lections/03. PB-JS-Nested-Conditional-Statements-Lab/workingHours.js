function workingHours (input) {
    let workingHour = Number(input[0]);
    let dayOfTheWeek = input[1];

    if (dayOfTheWeek === "Monday" || dayOfTheWeek === "Tuesday" || dayOfTheWeek === "Wednesday"
    || dayOfTheWeek === "Thursday" || dayOfTheWeek === "Friday" || dayOfTheWeek === "Saturday") {
        if (workingHour >= 10 && workingHour < 18) {
            console.log("open");
        } else {
            console.log("closed")
        }
    } else {
        console.log("closed");
    }
}
workingHours(["11",
"Sunday"])


