function smallestTwoNumbers(input) {
    let result = [];

    while (result.length !== 2) {
        let smallestNum = input[0];
        for (let el of input) {
            if (el < smallestNum) {
                smallestNum = el;
            }
        }
        result.push(smallestNum);
        let index = input.indexOf(smallestNum);
        input.splice(index, 1);
    }

    console.log(result.join(' '));
}
smallestTwoNumbers([30, 15, 50, 5]);
console.log('________');
smallestTwoNumbers([3, 0, 10, 4, 7, 3])