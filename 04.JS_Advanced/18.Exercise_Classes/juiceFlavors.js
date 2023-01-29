function juiceFlavors(input) {
    let flavoursMap = new Map();
    let resultMap = new Map();

    for (let el of input) {
        let [flavour, quantity] = el.split(' => ');
        quantity = Number(quantity);

        if (!flavoursMap.get(flavour)) {
            flavoursMap.set(flavour, quantity)
        } else {
            flavoursMap.set(flavour, flavoursMap.get(flavour) + quantity)
        }

        while (flavoursMap.get(flavour) >= 1000) {
            if (!resultMap.get(flavour)) {
                resultMap.set(flavour, 1)
            } else {
                resultMap.set(flavour, resultMap.get(flavour) + 1);
            }
            flavoursMap.set(flavour, flavoursMap.get(flavour) - 1000);
        }
    }

    resultMap.forEach((v,k) => console.log(`${k} => ${v}`));

}

juiceFlavors(['Orange => 2000',
'Peach => 1432',
'Banana => 450',
'Peach => 600',
'Strawberry => 549'])