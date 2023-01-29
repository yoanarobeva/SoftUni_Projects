function excursionCalculator (input) {
    let peopleCount = Number(input[0]);
    let season = input[1];

    let price = 0;

    if (peopleCount <= 5) {
        switch (season) {
            case "spring": price = peopleCount * 50; break;
            case "summer": price = peopleCount * 48.50 * 0.85; break;
            case "autumn": price = peopleCount * 60; break;
            case "winter": price = peopleCount * 86 * 1.08; break;
        }
    } else if (peopleCount > 5) {
        switch (season) {
            case "spring": price = peopleCount * 48; break;
            case "summer": price = peopleCount * 45 * 0.85; break;
            case "autumn": price = peopleCount * 49.5; break;
            case "winter": price = peopleCount * 85 * 1.08; break;
        }
    }

    console.log(`${price.toFixed(2)} leva.`);
}

excursionCalculator (["20",
"winter"])



