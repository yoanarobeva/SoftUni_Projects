function storeCatalogue(input) {
    let obj = {};

    for(let el of input) {
        let [product, price] = el.split(' : ');

        obj[product] = price;
    }

    let sortedKeys = Object.keys(obj).sort((a,b) => a.localeCompare(b));
    let firstPrinted = sortedKeys[0]
    console.log(firstPrinted[0]);
    console.log(`  ${firstPrinted}: ${obj[firstPrinted]}`);
    for (let i = 1; i < sortedKeys.length; i++) {

        if (sortedKeys[i][0] != sortedKeys[i-1][0]) {
            console.log(sortedKeys[i][0]);
            
        } 
        console.log(`  ${sortedKeys[i]}: ${obj[sortedKeys[i]]}`);
    }
    
}

storeCatalogue(['Appricot : 20.4',
'Fridge : 1500',
'TV : 1499',
'Deodorant : 10',
'Boiler : 300',
'Apple : 1.25',
'Anti-Bug Spray : 15',
'T-Shirt : 10']);

console.log('___________');

storeCatalogue(['Banana : 2',
"Rubic's Cube : 5",
'Raspberry P : 4999',
'Rolex : 100000',
'Rollon : 10',
'Rali Car : 2000000',
'Pesho : 0.000001',
'Barrel : 10'])