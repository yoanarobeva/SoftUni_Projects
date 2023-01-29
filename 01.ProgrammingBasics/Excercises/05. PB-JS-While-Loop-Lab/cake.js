function cake (input) {
    let index = 0;
    let width = Number(input[index]);
    index++;
    let length = Number(input[index]);
    index++;
    let allCakePieces = width*length;
    let currentPieces = input[index];

    let sumPieces = 0;
    let diff = 0;
    let isCakeFinished = false;

    while (currentPieces !== "STOP") {
        
        sumPieces += Number(currentPieces);

        if (sumPieces > allCakePieces) {
            diff = Math.abs(allCakePieces - sumPieces);
            console.log(`No more cake left! You need ${diff} pieces more.`);
            isCakeFinished = true
            break;
        }
        index++;
        currentPieces = input[index];
    }

    if (!isCakeFinished) {
        diff = allCakePieces - sumPieces;
        console.log(`${diff} pieces are left.`)
    }
}

cake(["10",
"2",
"2",
"4",
"6",
"STOP"
])
