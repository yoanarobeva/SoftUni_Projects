function birthdayParty (input) {
    let rent = Number(input[0]);

    let cakePrice = rent * 0.20;
    let drinksPrice = cakePrice * 0.55;
    let animatorPrice = rent / 3;

    let budget = rent + cakePrice + drinksPrice + animatorPrice;

    console.log(budget.toFixed(1));
}

birthdayParty (["3720"])