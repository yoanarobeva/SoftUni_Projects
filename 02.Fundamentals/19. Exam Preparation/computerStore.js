function computerStore(input) {
    let totalSum = 0;
    let totalSumWithTax = 0;
    let customer = input.pop();

    for (let num of input) {
        if (Number(num) < 0) {
            console.log('Invalid price!');
        } else {
            totalSum += Number(num);
            totalSumWithTax += Number(num) * 1.2;
        }
    }
    let taxes = totalSumWithTax - totalSum;
    let total = totalSumWithTax;

    if (customer === 'special') {
        total = total * 0.9;
    }

    if (totalSum === 0) {
        console.log('Invalid order!');
    } else {
        console.log("Congratulations you've just bought a new computer!");
        console.log(`Price without taxes: ${totalSum.toFixed(2)}$`);
        console.log(`Taxes: ${taxes.toFixed(2)}$`);
        console.log("-----------");
        console.log(`Total price: ${total.toFixed(2)}$`);
    }
}

computerStore([
    'regular'
])


