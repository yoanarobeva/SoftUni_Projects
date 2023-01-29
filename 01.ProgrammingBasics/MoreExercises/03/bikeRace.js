function bikeRace (input) {
    let juniorsCount = Number(input[0]);
    let seniorsCount = Number(input[1]);
    let traceType = input[2];

    let sum = 0;

    switch(traceType) {
        case "trail": sum = juniorsCount * 5.50 + seniorsCount * 7; break;
        case "cross-country": 
            sum = juniorsCount * 8 + seniorsCount * 9.50;
            let allAtendats = juniorsCount + seniorsCount;
            if (allAtendats >= 50) {
                sum = juniorsCount * 8 * 0.75 + seniorsCount * 9.50 * 0.75;
            } 
        break;
        case "downhill": sum = juniorsCount * 12.25 + seniorsCount * 13.75; break;
        case "road": sum = juniorsCount * 20 + seniorsCount * 21.50; break;
    }
    sum = sum * 0.95;

    console.log(sum.toFixed(2));
}

bikeRace(["30", "25", "cross-country"])