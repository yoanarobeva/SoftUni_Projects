function basketballEquipment(input) {
    let annualTax = Number(input[0]);

    let shoesPrice = annualTax - annualTax * 0.4;
    let clothingPrice = shoesPrice - shoesPrice * 0.2;
    let ballprice = 1/4 * clothingPrice;
    let accessoriesPrice = 1/5 * ballprice;

    let sum = annualTax + shoesPrice + clothingPrice + ballprice + accessoriesPrice;

    console.log(sum);
}

basketballEquipment(["365 "]);