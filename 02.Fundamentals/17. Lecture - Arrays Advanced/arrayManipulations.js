function arrayManipulations(arr) {
    let arrOfNums = arr.shift().split(" ").map(Number);
  
    for (let el of arr) {
        let commandArr = el.split(" ");
        let command = commandArr[0];

        switch (command) {
            case 'Add': arrOfNums.push(commandArr[1]); break;
            case 'Remove': arrOfNums = arrOfNums.filter(x => x !== Number(commandArr[1])); break;
            case 'RemoveAt': arrOfNums.splice(commandArr[1], 1); break;
            case 'Insert': arrOfNums.splice(commandArr[2], 0, commandArr[1]); break;
        }
    }
    console.log(arrOfNums.join(" "));
}

arrayManipulations(['4 19 2 53 6 43',
'Add 3',
'Remove 2',
'RemoveAt 1',
'Insert 8 3']
)