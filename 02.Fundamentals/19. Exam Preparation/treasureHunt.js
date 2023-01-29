function treasureHunt(input) {
    let chestState = input.shift().split("|");
    let averageGain = 0;
    let sumOfLengths = 0;
    let countOfItems = 0;

    for (let el of input) {
        let elArr = el.split(" ");
        let command = elArr.shift();

        if (command === 'Yohoho!') {
            break;
        }

        switch (command) {
            case 'Loot':
                for (let item of elArr) {
                    if (!chestState.includes(item)) {
                        chestState.unshift(item);
                    }
                }
            break;
            case 'Drop': 
                if (Number(elArr[0]) < chestState.length  && Number(elArr[0]) >= 0)  {
                    let index = Number(elArr[0]);
                    let item = chestState.splice(index, 1);
                    chestState.push(item[0]);
                }
            break;
            case 'Steal': 
                let stolenItems = []
                for (let i = 0; i < Number(elArr[0]); i++) {
                    if (chestState.length === 0) {
                        break;
                    } 
                    stolenItems.unshift(chestState.pop());
                }
                console.log(stolenItems.join(", "));
            break;
        }
    }
    for (let el of chestState) {
        sumOfLengths += el.length;
        countOfItems++;
    }
    averageGain = sumOfLengths / countOfItems;
    if (chestState.length === 0) {
        console.log("Failed treasure hunt.");
    } else {
        console.log(`Average treasure gain: ${averageGain.toFixed(2)} pirate credits.`);
    }
}

treasureHunt(["Diamonds|Silver|Shotgun|Gold",
"Loot Silver Medals Coal",
"Drop -1",
"Drop 1",
"Steal 6",
"Yohoho!"])
