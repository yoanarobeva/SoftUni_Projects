function suitcasesLoad (input) {
    let index = 0;
    let space = Number(input[index]);
    index++;
    let command = input[index];

    let bagCounter = 0;
    let leftSpace = space;

    let isFull = false;

    while (command !== "End") {
        let currentBag = Number(input[index]);

        if (leftSpace <= 0) {
            console.log(`No more space!`);
            console.log(`Statistic: ${bagCounter-1} suitcases loaded.`);
            isFull = true;
            break;
        }
        
        bagCounter++;
        if (bagCounter % 3 === 0) {
            currentBag = currentBag * 1.1;
        }

        leftSpace -= currentBag;
        index++;
        command = input[index];   
    }

    if(!isFull) {
        console.log(`Congratulations! All suitcases are loaded!`);
        console.log(`Statistic: ${bagCounter} suitcases loaded.`);
    }
}

suitcasesLoad(["700.5",
"180",
"340.6",
"126",
"220"])


