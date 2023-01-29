function inventory(arr) {
    let register = [];

    for (let el of arr) {
        let [name, level, items] = el.split(" / ");
        level = Number(level);

        register.push({heroName: name, level: level, items: items});
    }

    register.sort((a,b) => {
           return a.level - b.level;
        })

    register.forEach(i => {
        console.log(`Hero: ${i.heroName}`);
        console.log(`level => ${i.level}`);
        console.log(`items => ${i.items}`);
    })
}

inventory([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
    ])