function addBags (input) {
    let luggagePriceOver20KG = Number(input[0]);
    let luggageKG = Number(input[1]);
    let daysTillFlight = Number(input[2]);
    let luggageBags = Number(input[3]);

    let luggagePrice = 0;

    if (luggageKG < 10) {
        luggagePrice = luggagePriceOver20KG * 0.20;
    } else if (luggageKG >= 10 && luggageKG <= 20) {
        luggagePrice = luggagePriceOver20KG * 0.5;
    } else if (luggageKG > 20) {
        luggagePrice = luggagePriceOver20KG;
    }

    if (daysTillFlight > 30) {
        luggagePrice = luggagePrice * 1.1;
    } else if (daysTillFlight <= 30 && daysTillFlight >= 7) {
        luggagePrice = luggagePrice * 1.15;
    } else if (daysTillFlight < 7) {
        luggagePrice = luggagePrice * 1.4;
    }

    let total = luggageBags * luggagePrice;

    console.log(`The total price of bags is: ${total.toFixed(2)} lv.`);
}

addBags (["25.50", "5", "36", "6"])