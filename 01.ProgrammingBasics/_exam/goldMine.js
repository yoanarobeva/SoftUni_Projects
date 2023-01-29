function goldMine (input) {
    let index = 0;
    let locationCount = Number(input[index]);
    index++;
    

    for (let loc = 0; loc < locationCount; loc++) {
        let expectedAvgGoldPerDay = Number(input[index]);
        index++;
        let daysAtCurrentLocation = Number(input[index]);
        index++;

        let allGoldPerDayPerLocation = 0;
        
        for (let days = 0; days < daysAtCurrentLocation; days++) {
            let goldPerDay = Number(input[index]);
            allGoldPerDayPerLocation += goldPerDay;
            index++;  
        }

        let AvgGoldPerDayPerLocation = allGoldPerDayPerLocation / daysAtCurrentLocation;
        let diff = expectedAvgGoldPerDay - AvgGoldPerDayPerLocation;

        if (AvgGoldPerDayPerLocation >= expectedAvgGoldPerDay) {
            console.log(`Good job! Average gold per day: ${AvgGoldPerDayPerLocation.toFixed(2)}.`);
        } else {
            console.log(`You need ${diff.toFixed(2)} gold.`);
        }
    }
}

goldMine (["1",
"5",
"3",
"10",
"1",
"3"])

