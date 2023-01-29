function lowestPricesInCities(input) {
    let obj = {};

    for (let el of input) {
        let [town, product, price] = el.split(' | ');
        price = Number(price);

        if (obj.hasOwnProperty(product)) {
            if (obj[product].price > price) {
                obj[product] = {town, price};
            }
            
        } else {
            obj[product] = {town, price};
            
        }
        

    }

    let products = Object.keys(obj);

    products.forEach(x => console.log(`${x} -> ${obj[x].price} (${obj[x].town})`))
}

lowestPricesInCities(['Sample Town | Sample Product | 1000',
'Sample Town | Orange | 2',
'Sample Town | Peach | 1',
'Sofia | Orange | 3',
'Sofia | Peach | 2',
'New York | Sample Product | 1000.1',
'New York | Burger | 10']
)