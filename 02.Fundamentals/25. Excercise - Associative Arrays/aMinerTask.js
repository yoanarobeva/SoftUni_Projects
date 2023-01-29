function aMinerTask(input) {
    let resource = {};

    for (let i = 0; i < input.length; i+=2) {
        let name = input[i];
        let currentQuantity = Number(input[i + 1]);

        if (!resource.hasOwnProperty(name)) {
            resource[name] = currentQuantity;
        } else {
            resource[name] += currentQuantity;
        }
    }

    for (let [name, quantity] of Object.entries(resource)) {
        console.log(`${name} -> ${quantity}`);
    }
}

aMinerTask([
    'Gold',
    '155',
    'Silver',
    '10',
    'Copper',
    '17'
    ])