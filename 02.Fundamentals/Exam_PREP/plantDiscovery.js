function plantDiscovery(input) {
    let n = Number(input.shift());
    let plantsArr = [];

    for (let i = 0; i < n; i++) {
        let [plant, rarity] = input[i].split("<->");
        plantsArr.push({name: plant, rarity: Number(rarity), ratingSum: 0, rateCount: 0});
    }
    //console.table(plantsArr);
    for (let j = n; j < input.length; j++) {
        if (input[j] === 'Exhibition') {
            break;
        }
        let commandArr = input[j].split(" ");
        //console.log(commandArr);
        let command = commandArr[0];

        if (command === 'Rate:') {
            let plantOfRate = commandArr[1];
            let ratingOfRate = Number(commandArr[3]);
            let isTherePlant = false;

            for (let el of plantsArr) {
                if (el.name === plantOfRate) {
                    el.ratingSum += ratingOfRate;
                    el.rateCount++;
                    isTherePlant = true;
                }
            }

            if (!isTherePlant) {
                console.log('error');
            }

        } else if (command === 'Update:') {
            let plantOfUpdate = commandArr[1];
            let newRarityOfUpdate = Number(commandArr[3]);
            let isTherePlant = false;

            plantsArr.forEach(el => {
                if (el.name === plantOfUpdate) {
                    el.rarity = newRarityOfUpdate;
                    isTherePlant = true;
                } 
            })
            if (!isTherePlant) {
                console.log('error');
            }

        } else if (command === 'Reset:') {
            let plantOfReset = commandArr[1];
            let isTherePlant = false;

            plantsArr.forEach(el => {
                if (el.name === plantOfReset) {
                    el.rateCount = 0;
                    el.ratingSum = 0;
                    isTherePlant = true;
                }
            })
            if (!isTherePlant) {
                console.log('error');
            }
        }
    }
    console.log('Plants for the exhibition:');
    plantsArr.forEach(el => {
        let [name, rarity, rateSum, rateCount] = Object.values(el);
        let avgRate = 0;
        if (Number(rateSum) !== 0) {
            avgRate = Number(rateSum) / Number(rateCount);
        }
        console.log(`- ${name}; Rarity: ${rarity}; Rating: ${avgRate.toFixed(2)}`);
    })
}

plantDiscovery((["3",
"Arnoldii<->4",
"Woodii<->7",
"Welwitschia<->2",
"Rate: Woodii - 10",
"Rate: Welwitschia - 7",
"Rate: Arnoldii - 3",
"Rate: Woodii - 5",
"Update: Woodii - 5",
"Reset: Arnoldii",
"Exhibition"]))