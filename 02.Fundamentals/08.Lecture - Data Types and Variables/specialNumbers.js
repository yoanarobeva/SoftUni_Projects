function specialNumbers(num) {

    for (let i = 1; i <= num; i++) {
        let isSpecial = false;
        let currentNum = String(i);
        let sumOfDigits = 0

        for (let j = 0; j < currentNum.length; j++) {
            sumOfDigits += Number(currentNum[j]);
        }

        if (sumOfDigits === 5 || sumOfDigits === 7 || sumOfDigits === 11) {
            console.log(`${i} -> True`);
        } else {
            console.log(`${i} -> False`);
        }
    }
}

specialNumbers(20);