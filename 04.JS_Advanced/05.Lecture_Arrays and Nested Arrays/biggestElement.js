function biggestElement(input) {
    let theBiggest = input[0][0];

    for (let i = 0; i < input.length; i++) {
        for (let j = 0; j < input[i].length; j++){
            let currentNum = input[i][j];
            if (currentNum > theBiggest) {
                theBiggest = currentNum;
            }
        }
    }

    console.log(theBiggest);
    //return theBiggest;
}

biggestElement([[20, 50, 10], [8, 33, 145]]);
console.log('__________');
biggestElement([[3, 5, 7, 12],[-1, 4, 33, 2],[8, 3, 0, 4]])