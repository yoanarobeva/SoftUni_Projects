function activationKeys(input) {
    let code = input.shift();

    for (let el of input) {
        let commandArr = el.split('>>>');
        let command = commandArr.shift();

        if (command === 'Generate') {
            break;
        } else if (command === 'Contains') {
            let substr = commandArr.shift();

            if (code.includes(substr)) {
                console.log(`${code} contains ${substr}`);
            } else {
                console.log("Substring not found!");
            }

        } else if (command === 'Flip') {
            let upOrLow = commandArr.shift();
            let startIndexFlip = Number(commandArr.shift());
            let endIndexFlip = Number(commandArr.shift());

            code = code.split('');
            for (let i = startIndexFlip; i < endIndexFlip; i++) {
                if (upOrLow === 'Upper') {
                    code[i] = code[i].toUpperCase();
                } else if (upOrLow === 'Lower') {
                    code[i] = code[i].toLowerCase();
                }
            }
            code = code.join('');
            console.log(code);
        } else if (command === 'Slice') {
            let startIndexSlice = Number(commandArr.shift());
            let endIndexSlice = Number(commandArr.shift());

            let end = code.slice(endIndexSlice);
            let start = code.slice(0, startIndexSlice)

            code = start + end;
            console.log(code);
        }
    }
    console.log(`Your activation key is: ${code}`);
}

activationKeys((["abcdefghijklmnopqrstuvwxyz",
    "Slice>>>2>>>6",
    "Flip>>>Upper>>>3>>>14",
    "Flip>>>Lower>>>5>>>7",
    "Contains>>>def",
    "Contains>>>deF",
    "Generate"]))