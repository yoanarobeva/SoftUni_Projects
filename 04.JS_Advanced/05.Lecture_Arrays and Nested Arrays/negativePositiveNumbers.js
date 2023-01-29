function negativePositiveNumbers(input) {
    let result = [];

    for (let el of input) {
        if (el < 0) {
            result.unshift(el);
        } else {
            result.push(el);
        }
    }

    console.log(result.join('\n'));
}

negativePositiveNumbers([7, -2, 8, 9]);
console.log('______');
negativePositiveNumbers([3, -2, 0, -1])