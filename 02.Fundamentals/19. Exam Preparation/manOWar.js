function manOWar(input) {
    let pirateShipArr = input.shift().split(">").map(Number);
    let warshipArr = input.shift().split(">").map(Number);
    let maxHealthCap = Number(input.shift());

    let isThereWinner = false;

    for (let el of input) {
        if (el === 'Retire') {
            break;
        }
        let commandArr = el.split(" ");
        let command = commandArr.shift();

        let index = Number(commandArr[0]);

        switch (command) {
            case 'Fire': 
                let damage = Number(commandArr[1]);

                if (index >= 0 && index < warshipArr.length) {
                    let currentSection = warshipArr[index];
                    let currentHealth = currentSection - damage;
                    
                    if (currentHealth <= 0) {
                        console.log('You won! The enemy ship has sunken.');
                        isThereWinner = true;
                    } else {
                        warshipArr[index] = currentHealth;
                    }
                }
            break;
            case 'Defend': 
                let endIndex = Number(commandArr[1]);
                let damageDefend = Number(commandArr[2]);

                if(endIndex - index <= 0) {
                    continue;
                }

                if (index >= 0 && index < pirateShipArr.length &&
                endIndex >= 0 && endIndex < pirateShipArr.length) {
                        for (let i = index; i <= endIndex; i++) {
                            let temp = pirateShipArr[i] - damageDefend;
                            if (temp <= 0) {
                                console.log('You lost! The pirate ship has sunken.')
                                isThereWinner = true;
                                break;
                            } else {
                                pirateShipArr[i] = temp;
                            }
                        }
                }
            break;
            case 'Repair': 
                let health = Number(commandArr[1]);
                if (index < 0 || index >= pirateShipArr.length) {
                    continue;
                }
                let repair = pirateShipArr[index] + health;
                if (repair > maxHealthCap) {
                    repair = maxHealthCap;
                }
                pirateShipArr[index] = repair;
            break;
            case 'Status': 
                let repairCounter = 0;
                for (let section of pirateShipArr) {
                    if (section < 0.2 * maxHealthCap) {
                        repairCounter++;
                    }
                }
                console.log(`${repairCounter} sections need repair.`);
            break;
        }

        if (isThereWinner) {
            break;
        }
    }

    if (!isThereWinner) {
        let pirateShipSum = 0;
        let warshipSum = 0;
        for (let el of pirateShipArr) {
            pirateShipSum += Number(el);
        }
        for (let el2 of warshipArr) {
            warshipSum += Number(el2);
        }
        console.log(`Pirate ship status: ${pirateShipSum}`);
        console.log(`Warship status: ${warshipSum}`);
    }

}

manOWar([
"1>1",
"1>1",
"3",
"Status",
"Defend 0 1 1",
"Fire 0 1",
"Status",
"Retire"])

