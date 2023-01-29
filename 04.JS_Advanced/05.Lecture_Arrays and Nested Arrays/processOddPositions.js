function processOddPositions(input) {
    let result = [];

    for (let i = 1; i < input.length; i+=2) {
        result.push(input[i]);
    }

    result.reverse();
    result = result.map(x => x * 2);

    console.log(result);
}
processOddPositions([10, 15, 20, 25]);
console.log('__________');
processOddPositions([3, 0, 10, 4, 7, 3])