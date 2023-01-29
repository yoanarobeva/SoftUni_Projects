function orders(product, quantity) {
    let pricePerProduct = 0;

    // •	coffee - 1.50 water - 1.00 coke - 1.40 snacks - 2.00


    switch (product) {
        case "coffee": pricePerProduct = 1.50 * quantity; break;
        case "water": pricePerProduct = 1.00 * quantity; break;
        case "coke": pricePerProduct = 1.40 * quantity; break;
        case "snacks": pricePerProduct = 2.00 * quantity; break;
    }
    return pricePerProduct.toFixed(2);
}

let total = orders("water", 5);
console.log(total);