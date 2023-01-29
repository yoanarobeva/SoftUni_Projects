function townPopulation(input) {
    let obj = {};
    for (let el of input) {
        let [town, population] = el.split(' <-> ');
        if (!obj.hasOwnProperty(town)) {
            obj[town] = Number(population);
        } else {
            obj[town] += Number(population);
        }
    }

    let towns = Object.keys(obj);
    towns.forEach(x => console.log(`${x} : ${obj[x]}`))
}

townPopulation([
    'Sofia <-> 1200000',
    'Montana <-> 20000',
    'New York <-> 10000000',
    'Washington <-> 2345000',
    'Las Vegas <-> 1000000'
])