function decryptingCommands(input) {
    let message = input.shift();

    for (let line of input) {
        if (line === 'Finish') {
            break;
        }

        let commandArr = line.split(' ');
        let command = commandArr.shift();

        if (command === 'Replace') {
            let currentChar = commandArr.shift();
            let newChar = commandArr.shift();

            let rgx = new RegExp(currentChar, 'g')
            if (message.includes(currentChar)) {
                message = message.replace(rgx, newChar);
            }
            console.log(message);

        } else if (command === 'Cut') {
            let startIndexCut = Number(commandArr.shift());
            let endIndexCut = Number(commandArr.shift());

            if (startIndexCut >= 0 && startIndexCut < message.length && endIndexCut >= 0 && endIndexCut < message.length && startIndexCut <= endIndexCut) {
                let endString = message.slice(endIndexCut + 1);
                let startString = message.slice(0, startIndexCut);
                message = startString + endString;

                console.log(message);
            } else {
                console.log("Invalid indices!");
            }

        } else if (command === 'Make') {
            let commandTwo = commandArr.shift();

            if (commandTwo === 'Upper') {
                message = message.toUpperCase();
            } else if (commandTwo === 'Lower') {
                message = message.toLowerCase();
            }
            console.log(message);

        } else if (command === 'Check') {
            let string = commandArr.shift();

            if (message.includes(string)) {
                console.log(`Message contains ${string}`);
            } else {
                console.log(`Message doesn't contain ${string}`);
            }
            
        } else if (command === 'Sum') {
            let startIndexSum = Number(commandArr.shift());
            let endIndexSum = Number(commandArr.shift());

            if (startIndexSum >= 0 && startIndexSum < message.length && endIndexSum >= 0 && endIndexSum < message.length && startIndexSum <= endIndexSum) {
                let sub = message.substring(startIndexSum, endIndexSum + 1);
                sub = sub.split('');
                let sumASCII = 0;

                sub.forEach(el => {
                    sumASCII += el.charCodeAt();
                })
                console.log(sumASCII);
            } else {
                console.log("Invalid indices!");
            }
        }
    }
}

decryptingCommands(["ILikeSoftUni",
"Replace I We",
"Make Upper",
"Check SoftUni",
"Sum 1 4",
"Cut 1 4",
"Finish"])

