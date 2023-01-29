function magicMatrices(input) {
    let isMagical = true;
    let sum = input[0].reduce((a, b) => a + b)

    for (let row = 0; row < input.length; row++) {
        let sumOfRows = 0;
        let sumOfCol = 0;

        for (let col = 0; col < input.length; col++) {
            sumOfRows += input[row][col];
            sumOfCol += input[col][row];  
        }
        if (sumOfRows !== sumOfCol || sumOfRows !== sum || sumOfCol !== sum) {
            isMagical = false;
        }
    }

    console.log(isMagical);
}

magicMatrices([
    [4, 5, 6],
    [6, 5, 4],
    [5, 5, 5]]
)
console.log('___________');
magicMatrices([
    [11, 32, 45],
    [21, 0, 1],
    [21, 1, 1]]
)
console.log('___________');
magicMatrices([
    [1, 0, 0],
    [0, 0, 1],
    [0, 1, 0]]
)