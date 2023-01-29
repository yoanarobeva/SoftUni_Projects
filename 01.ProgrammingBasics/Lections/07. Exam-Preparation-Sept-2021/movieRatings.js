function movieRatings (input) {
    let index = 0;
    let movieCount = Number(input[index]);
    index++;
    let name = input[index];
    index++;
    let rating = Number(input[index]);

    let maxRate = 0;
    let maxRateMovieName = "";

    let minRate = Number.MAX_SAFE_INTEGER;
    let minRateMovieName = "";

    let avgRateSum = 0;

    for (let i = 0; i < movieCount; i++) {
        if (rating > maxRate) {
            maxRate = rating;
            maxRateMovieName = name;
        } else if (rating < minRate) {
            minRate = rating;
            minRateMovieName = name;
        }
        avgRateSum += rating;
        index++;
        name = input[index];
        index++;
        rating = Number(input[index]);
    }
    let avgRate = avgRateSum / movieCount;

    console.log(`${maxRateMovieName} is with highest rating: ${maxRate.toFixed(1)}`);
    console.log(`${minRateMovieName} is with lowest rating: ${minRate.toFixed(1)}`);
    console.log(`Average rating: ${avgRate.toFixed(1)}`);
}

movieRatings(["3",
    "Interstellar",
    "8.5",
    "Dangal",
    "8.3",
    "Green Book",
    "8.2"
    ])