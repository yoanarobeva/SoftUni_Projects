function processOddNumbers(arr) {
    let oddNums = arr.filter((x, i) => i % 2 === 1);
    let doubledNums = oddNums.map(x => x * 2);
    let reversedNums = doubledNums.reverse();

    console.log(reversedNums.join(" "));
}

processOddNumbers([10, 15, 20, 25]);