function carFactory(obj) {
    let storage = {
        'Small engine': { power: 90, volume: 1800 },
        'Normal engine': { power: 120, volume: 2400 },
        'Monster engine': { power: 200, volume: 3500 }
    }

    let newCar = {
        'model': obj.model
    }

    for (let el in storage) {
        let power = storage[el].power;
        let volume = storage[el].volume;
        if (obj.power <= power) {
            newCar.engine = { power, volume };
            break;
        }
    }

    if (obj.carriage === 'hatchback') {
        newCar.carriage = { type: 'hatchback', color: obj.color };
    } else if (obj.carriage === 'coupe') {
        newCar.carriage = { type: 'coupe', color: obj.color };
    }

    if (obj.wheelsize % 2 === 0) {
        obj.wheelsize -= 1;
    }
    newCar.wheels = [obj.wheelsize, obj.wheelsize, obj.wheelsize, obj.wheelsize];

    return newCar;
}

carFactory({
    model: 'VW Golf II',
    power: 90,
    color: 'blue',
    carriage: 'hatchback',
    wheelsize: 14
});

console.log('____________');

carFactory({
    model: 'Opel Vectra',
    power: 110,
    color: 'grey',
    carriage: 'coupe',
    wheelsize: 17
});