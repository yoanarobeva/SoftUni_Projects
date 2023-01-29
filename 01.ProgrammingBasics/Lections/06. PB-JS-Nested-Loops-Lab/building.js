function building (input) {
    let floors = Number(input[0]);
    let apartments = Number(input[1]);
    let row = "";

    for (let i = floors; i > 0; i--) {
        for (let j = 0; j < apartments; j++) {
            if (i === floors) {
                row = row + "L" + i + j + " ";
            } else if (i % 2 === 0) {
                row = row + "O" + i + j + " ";
            } else if (i % 2 !== 0) {
                row = row + "A" + i + j + " ";
            }
        }
        console.log(row);
        row = ""
    }
    
}

building(["4", "4"])



