function dungeonestDark (array) {
    let initialHealth = 100;
    let initialCoins = 0;
    let amIDead = false;
    
    let roomArray = array[0].split("|");
    
    for (let r = 0; r < roomArray.length; r++) {

        let currentRoomArr = roomArray[r].split(" ");
        let itemOrMonster = currentRoomArr[0];
        let number = Number(currentRoomArr[1]);

        switch (itemOrMonster) {
            case "potion" :
                if (initialHealth < 100) {
                    initialHealth += number;
                    if (initialHealth > 100) {
                        let diff = number - (initialHealth - 100); 
                        initialHealth = 100;
                        console.log(`You healed for ${diff} hp.`)
                    } else {
                        console.log(`You healed for ${number} hp.`);
                    }
                }
                console.log(`Current health: ${initialHealth} hp.`);    
            break;
            case "chest" : 
                initialCoins += number; 
                console.log(`You found ${number} coins.`)
            break;
            default: 
                initialHealth -= number;
                if (initialHealth > 0) {
                    console.log(`You slayed ${itemOrMonster}.`);
                } else {
                   console.log(`You died! Killed by ${itemOrMonster}.` );
                   amIDead = true;
                }
            break;
        }

        if (amIDead) {
            console.log(`Best room: ${r+1}`)
            break;
        }
    }
    
    if (!amIDead) {
        console.log("You've made it!");
        console.log(`Coins: ${initialCoins}`);
        console.log(`Health: ${initialHealth}`);
    }
}

dungeonestDark(["cat 10|potion 30|orc 10|chest 10|snake 25|chest 110"])