function autoEngineeringCompany(input) {
    let cars = new Map();

    for (let el of input) {
        let [brand, model, production] = el.split(' | ');
        production = Number(production);

        if (!cars.has(brand)) {
            cars.set(brand, new Map());
            cars.get(brand).set(model, production);
        } else {
            if (!cars.get(brand).has(model)) {
                cars.get(brand).set(model, production);
            } else {
                cars.get(brand).set(model, cars.get(brand).get(model) + production);
            }
        }
    }

    let carsArr = Array.from(cars);
    carsArr.forEach(([k,v]) => {
        console.log(k);
        let modelsArr = Array.from(v);
        modelsArr.forEach(([k2,v2]) => {
            console.log(`###${k2} -> ${v2}`);
        })
    })
    
}

autoEngineeringCompany(['Audi | Q7 | 1000',
'Audi | Q6 | 100',
'BMW | X5 | 1000',
'BMW | X6 | 100',
'Citroen | C4 | 123',
'Volga | GAZ-24 | 1000000',
'Lada | Niva | 1000000',
'Lada | Jigula | 1000000',
'Citroen | C4 | 22',
'Citroen | C5 | 10'])