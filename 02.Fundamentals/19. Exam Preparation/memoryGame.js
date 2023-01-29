function memoryGame(input) {
    let elementsArr = input.shift().split(" ");
    let turnsCounter = 0;

    for (let i = 0; i < input.length - 1; i++) {
        let currentCommandArr = input[i].split(" ")
        turnsCounter++;

        let index1 = Number(currentCommandArr[0]);
        let index2 = Number(currentCommandArr[1]);

        if (index1 === index2 || index1 > (elementsArr.length - 1) || index2 > (elementsArr.length - 1) 
            || index1 < 0 || index2 < 0 ) {
            let middleIndex = elementsArr.length / 2;
            elementsArr.splice(middleIndex, 0, `-${turnsCounter}a`, `-${turnsCounter}a`);
            console.log("Invalid input! Adding additional elements to the board");
        } else if (elementsArr[index1] === elementsArr[index2]) {
            let element = elementsArr.splice(index1, 1);
            let index = elementsArr.indexOf(element[0]);
            elementsArr.splice(index, 1);
            console.log(`Congrats! You have found matching elements - ${element}!`);
        } else {
            console.log("Try again!");
        }

        if (elementsArr.length === 0) {
            break;
        }
    }

    if (elementsArr.length > 0) {
        console.log("Sorry you lose :(");
        console.log(elementsArr.join(" "))
    } else {
        console.log(`You have won in ${turnsCounter} turns!`)
    }
}

memoryGame( [
    "1 1 2 2 3 3 4 4 5 5", 
    "1 0",
    "-1 0",
    "1 0", 
    "1 0", 
    "1 0", 
    "end"
    ]
    )