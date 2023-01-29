function heroesOfCodeAndLogicVII(input) {
    let n = Number(input.shift());
    let heroes = new Map();

    for (let i = 0; i < n; i++) {
        let hero = input[i].split(' ');
        let name = hero[0];
        let hitPoints = Number(hero[1]);
        let manaPoints = Number(hero[2]);

        if(hitPoints <= 100 && manaPoints <= 200) {
            heroes.set(name, {hitPoints, manaPoints});
        }
    }
    
    for (let j = n; j < input.length; j++) {
        let commandArr = input[j].split(' - ');
        let command = commandArr.shift();
        let heroName = commandArr.shift();
        
        if (command === 'End') {
            break;
        } 
        
        if (command === 'CastSpell') {
            let mPNeeded = Number(commandArr.shift());
            let spellName = commandArr.shift();

            if (heroes.get(heroName).manaPoints >= mPNeeded) {
                heroes.get(heroName).manaPoints -= mPNeeded;
                console.log(`${heroName} has successfully cast ${spellName} and now has ${heroes.get(heroName).manaPoints} MP!`);
            } else {
                console.log(`${heroName} does not have enough MP to cast ${spellName}!`);
            }

        } else if (command === 'TakeDamage') {
            let damage = Number(commandArr.shift());
            let attacker = commandArr.shift();
            heroes.get(heroName).hitPoints -= damage;
            if (heroes.get(heroName).hitPoints > 0) {
                console.log(`${heroName} was hit for ${damage} HP by ${attacker} and now has ${heroes.get(heroName).hitPoints} HP left!`);
            } else {
                console.log(`${heroName} has been killed by ${attacker}!`);
                heroes.delete(heroName);
            }

        } else if (command === 'Recharge') {
            let amount = Number(commandArr.shift());
            heroes.get(heroName).manaPoints += amount;

            if (heroes.get(heroName).manaPoints > 200) {
                amount = 200 - (heroes.get(heroName).manaPoints - amount);
                heroes.get(heroName).manaPoints = 200;
            }
            console.log(`${heroName} recharged for ${amount} MP!`);

        } else if (command === 'Heal') {
            let amountHeal = Number(commandArr.shift());
            heroes.get(heroName).hitPoints += amountHeal;

            if (heroes.get(heroName).hitPoints > 100) {
                amountHeal = 100 - (heroes.get(heroName).hitPoints - amountHeal);
                heroes.get(heroName).hitPoints = 100;
            }
            console.log(`${heroName} healed for ${amountHeal} HP!`);
        } 
    }
   
    let keys = Array.from(heroes.keys());
    keys.forEach(el => {
        console.log(el);
        console.log(`HP: ${heroes.get(el).hitPoints}`);
        console.log(`MP: ${heroes.get(el).manaPoints}`);
    })
}

heroesOfCodeAndLogicVII(['4',
    'Adela 90 150',
    'SirMullich 70 40',
    'Ivor 1 111',
    'Tyris 94 61',
    'Heal - SirMullich - 50',
    'Recharge - Adela - 100',
    'CastSpell - Tyris - 1000 - Fireball',
    'TakeDamage - Tyris - 99 - Fireball',
    'TakeDamage - Ivor - 3 - Mosquito',
    'End'])