function heroicInventory(input) {
    let heroes = [];
    
    for (let el of input) {
        let [hero, level, items] = el.split(" / ");
        items = items ? items = items.split(', '): [];
        level = Number(level);
        let obj = {
            name: hero,
            level,
            items
        }
        heroes.push(obj);
    }

    return JSON.stringify(heroes);
}

let firstInput = heroicInventory(['Isacc / 25 / Apple, GravityGun',
'Derek / 12 / BarrelVest, DestructionSword',
'Hes / 1 / Desolator, Sentinel, Antara']);
console.log(firstInput);

console.log('_____________');

let secondInput = heroicInventory(['Jake / 1000 / Gauss, HolidayGrenade']);
console.log(secondInput);