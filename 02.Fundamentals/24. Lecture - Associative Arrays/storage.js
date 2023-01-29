function storage(input) {
    let map = new Map();

    for (let line of input) {
        let [product, quantity] = line.split(" ");
        quantity = Number(quantity);
        if (map.has(product)) {
            let oldQuantity = Number(map.get(product));
            quantity += oldQuantity; 
        }
        map.set(product, quantity);
    }

    for (let el of map) {
        console.log(`${el[0]} -> ${el[1]}`);
    }
}

storage(['tomatoes 10',
'coffee 5',
'olives 100',
'coffee 40'])