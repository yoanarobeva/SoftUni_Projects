function train(arr) {
    let wagonArr = arr.shift().split(" ").map(Number);
    let maxCapacity = Number(arr.shift());

    for (let command of arr) {
        let commandArr = command.split(" ");
        if (commandArr[0] === 'Add') {
            wagonArr.push(Number(commandArr[1]));
        } else {

            for(let i = 0; i < wagonArr.length; i++) {
                if (wagonArr[i] + Number(commandArr[0]) <= maxCapacity) {
                    wagonArr[i] = wagonArr[i] + Number(commandArr[0]);
                    break;
                }
            }
        }
    }

    console.log(wagonArr.join(" "));
}

train(['32 54 21 12 4 0 23',
'75',
'Add 10',
'Add 0',
'30',
'10',
'75']
)