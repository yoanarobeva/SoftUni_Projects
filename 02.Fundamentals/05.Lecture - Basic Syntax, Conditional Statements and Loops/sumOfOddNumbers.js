function sumOfOddNumbers(n) {
    let sum = 0;
    let counter = 0;

    for (let j = 1; j <= 100; j++) {
        if (counter >= n) {
            break;
        }
        if (j % 2 !== 0) {
            console.log(j);
            sum += j;
            counter++;
        }
    }
    console.log(`Sum: ${sum}`);
}

sumOfOddNumbers(3);
