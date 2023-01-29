function amazingNumbers (num) {
    let numToString = String(num);
    let sum = 0;

    for (let i = 0; i < numToString.length; i++) {
        let currentChar = numToString[i];
        sum += Number(currentChar);
    }

    let sumToString = String(sum);
    let isAmazing = false;

    for (let j = 0; j < sumToString.length; j++) {
        let currentSumChar = sumToString[j];

        if(currentSumChar == "9") {
            isAmazing = true;
            break;
        }
    }

    if (isAmazing) {
        console.log(`${num} Amazing? True`)
    } else {
        console.log(`${num} Amazing? False`)
    }
} 

amazingNumbers(1233);
amazingNumbers(999);