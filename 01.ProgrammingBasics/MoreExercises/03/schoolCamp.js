function schoolCamp(input) {
    let season = input[0];
    let groupType = input[1];
    let studentCount = Number(input[2]);
    let nightCount = Number(input[3]);

    let price = 0;
    let sportType = "";

    if (groupType === "girls") {
        switch (season) {
            case "Winter": price = nightCount * studentCount * 9.60; sportType = "Gymnastics"; break;
            case "Spring": price = nightCount * studentCount * 7.20; sportType = "Athletics"; break;
            case "Summer": price = nightCount * studentCount * 15; sportType = "Volleyball"; break;
        }
    } else if (groupType === "boys") {
        switch (season) {
            case "Winter": price = nightCount * studentCount * 9.60; sportType = "Judo"; break;
            case "Spring": price = nightCount * studentCount * 7.20; sportType = "Tennis"; break;
            case "Summer": price = nightCount * studentCount * 15; sportType = "Football"; break;
        }
    } else if (groupType === "mixed") {
        switch (season) {
            case "Winter": price = nightCount * studentCount * 10; sportType = "Ski"; break;
            case "Spring": price = nightCount * studentCount * 9.50; sportType = "Cycling"; break;
            case "Summer": price = nightCount * studentCount * 20; sportType = "Swimming"; break;
        }
    }

    if (studentCount >= 10 && studentCount < 20) {
        price = price * 0.95;
    } else if (studentCount >= 20 && studentCount < 50) {
        price = price * 0.85;
    } else if (studentCount >= 50) {
        price = price * 0.5;
    }

    console.log(`${sportType} ${price.toFixed(2)} lv.`)
}   

schoolCamp (["Spring", "girls", "20", "7"])