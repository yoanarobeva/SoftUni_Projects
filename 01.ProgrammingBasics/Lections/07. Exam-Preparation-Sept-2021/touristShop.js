function touristShop (input) {
    let index = 0;
    let budget = Number(input[index]);
    index++;
    let productName = input[index];
    index++
    let productPrice = Number(input[index]);

    let totalPrice = 0;
    let productCounter = 0;
    let leftMoney = 0;

    let isThereExpensiveProduct = false;

    while (productName !== "Stop") {
        productCounter++;

        if(productCounter % 3 === 0){
            productPrice = productPrice * 0.5;
        }
        totalPrice += productPrice;
        
        if (totalPrice > budget) {
            isThereExpensiveProduct = true;
            console.log(`You don't have enough money!`);
            console.log(`You need ${(totalPrice - budget).toFixed(2)} leva!`)
            break;
        } 
     
        index++;
        productName = input[index];
        index++;
        productPrice = Number(input[index]);

    }

    if (!isThereExpensiveProduct) {
        console.log(`You bought ${productCounter} products for ${totalPrice.toFixed(2)} leva.`)
    }
}

touristShop (["54",
    "Thermal underwear",
    "24",
    "Sunscreen",
    "45"
    
])