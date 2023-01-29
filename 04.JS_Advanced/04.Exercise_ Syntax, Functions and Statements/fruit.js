function fruit(type, weightGr, priceKg) {
    let weightKg = weightGr / 1000;
    let money = weightKg * priceKg;

    console.log(`I need $${money.toFixed(2)} to buy ${weightKg.toFixed(2)} kilograms ${type}.`);
}

fruit('orange', 2500, 1.80);
console.log('_____');
fruit('apple', 1563, 2.35)