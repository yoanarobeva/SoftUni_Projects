function softUniBarIncome(input) {
    let pattern = /\%(?<name>[A-Z]{1}[a-z]+)%[^|$%.]*<(?<product>\w+)>[^|$%.]*\|(?<count>\d+)\|[^|$%.]*?(?<price>\d+\.*\d+)\$/gm

    input.pop();
    let allText = input.join(" ");
    let validLines
    let totalIncome = 0;

    while ((validLines = pattern.exec(allText)) !== null) {
        let [name, product, count, price] = Object.values(validLines.groups);
        let totalPrice = Number(count) * Number(price);
        console.log(`${name}: ${product} - ${totalPrice.toFixed(2)}`);
        totalIncome += totalPrice;
    }
    console.log(`Total income: ${totalIncome.toFixed(2)}`);
}

softUniBarIncome(['%George%<Croissant>|2|10.3$',
'%Peter%<Gum>|1|1.3$',
'%Maria%<Cola>|1|2.4$',
'end of shift'])