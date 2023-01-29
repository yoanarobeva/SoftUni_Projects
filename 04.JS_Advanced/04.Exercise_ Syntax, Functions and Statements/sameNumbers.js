function sameNumbers(num) {
    let numString = String(num);
    let currentDigit = numString[0];
    let isSame = true;
    let sum = Number(currentDigit);
    for (let i = 1; i < numString.length; i++) {
        if (currentDigit !== numString[i]) {
            isSame = false;
        }
        sum += Number(numString[i]);
    }

    console.log(isSame);
    console.log(sum);
}

sameNumbers(2222222);
console.log('_____');
sameNumbers(1234);