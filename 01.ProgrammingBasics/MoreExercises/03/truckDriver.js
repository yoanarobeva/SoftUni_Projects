function truckDriver (input) {
    let season = input[0];
    let kmPerMonth = Number(input[1]);

    let moneyPerMonth = 0;

    if (kmPerMonth <= 5000) {
        switch (season) {
            case "Spring": 
            case "Autumn": moneyPerMonth = kmPerMonth * 0.75; break;
            case "Summer": moneyPerMonth = kmPerMonth * 0.9; break;
            case "Winter": moneyPerMonth = kmPerMonth * 1.05 ;break;
        }
    } else  if (kmPerMonth > 5000 && kmPerMonth <= 10000) {
        switch (season) {
            case "Spring": 
            case "Autumn": moneyPerMonth = kmPerMonth * 0.95; break;
            case "Summer": moneyPerMonth = kmPerMonth * 1.10; break;
            case "Winter": moneyPerMonth = kmPerMonth * 1.25; break;
        }
    } else  if (kmPerMonth > 10000 && kmPerMonth <= 20000) {
       moneyPerMonth = kmPerMonth * 1.45;
    }

    moneyPerMonth = moneyPerMonth * 0.9;

    console.log ((4 * moneyPerMonth).toFixed(2));
}

truckDriver(["Summer", "3455"])