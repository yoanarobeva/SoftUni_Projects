function catalogue(input) {
    let products = new Map();

    for (let el of input) {
        let [name, price] = el.split(' : ');
        price = Number(price);

        products.set(name, price);
    }

    let sortedProducts = Array.from(products.entries()).sort(([keyA, valueA], [keyB, valueB]) => keyA.localeCompare(keyB));
    console.log(sortedProducts[0][0][0]);
    console.log(`  ${sortedProducts[0][0]}: ${sortedProducts[0][1]}`);

    for (let i = 1; i < sortedProducts.length; i++) {
        let [name, value] = sortedProducts[i];
        let [previousName, previousValue] = sortedProducts[i - 1];

        if (name[0] === previousName[0]) {
            console.log(`  ${name}: ${value}`);
        } else if (name[0] !== previousName[0]) {
            console.log(name[0]);
            console.log(`  ${name}: ${value}`);
        }
    }
}

catalogue([
    'Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10'
    ]);