function vegetableMarket (input) {
    let vegatablesKGPrice = Number(input[0]);
    let fruitsKGPrice = Number(input[1]);
    let kgVegatables = Number(input[2]);
    let kgFruits = Number(input[3]);
    
    let priceVegatables = vegatablesKGPrice * kgVegatables;
    let priceFruits = fruitsKGPrice * kgFruits;

    let priceInEuros = (priceFruits + priceVegatables) / 1.94;

    console.log(priceInEuros.toFixed(2));
}

