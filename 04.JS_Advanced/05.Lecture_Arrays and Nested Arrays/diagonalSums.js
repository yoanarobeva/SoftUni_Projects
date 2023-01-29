function diagonalSums(input) {
    let mainDiagonalSum = 0
    let secondDiagonalSum = 0

    for (let i = 0; i < input.length; i++) {
        let currentMain = input[i][i];
        let currentSecond = input[i][input.length - 1 - i];

        mainDiagonalSum += currentMain;
        secondDiagonalSum += currentSecond;
    }

    console.log(`${mainDiagonalSum} ${secondDiagonalSum}`);
}

diagonalSums([[20, 40],
              [10, 60]]);
console.log('__________');
diagonalSums([[3, 5, 17],
              [-1, 7, 14],
              [1, -8, 89]]);