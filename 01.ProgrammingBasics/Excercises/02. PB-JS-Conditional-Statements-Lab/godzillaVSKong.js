function godzillaVSKong (input) {
    let budget = Number(input[0]);
    let actorCount = Number(input[1]);
    let clothingPricePerActor = Number(input[2]);

    let decorPrice = budget * 0.1;
    let clothingPrice = actorCount * clothingPricePerActor;
    
    if (actorCount >= 150) {
        clothingPrice = clothingPrice * 0.9;
    }

    let sum = clothingPrice + decorPrice;
    let diff = Math.abs(sum - budget).toFixed(2);

    if (sum > budget) {
        console.log("Not enough money!");
        console.log(`Wingard needs ${diff} leva more.`);
    } else {
        console.log("Action!");
        console.log(`Wingard starts filming with ${diff} leva left.`)
    }
}

godzillaVSKong(["15437.62",
"186",
"57.99"])

