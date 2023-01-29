function evenAndOddSubtraction(array) {
    let sumOfEven = 0;
    let sumOfOdd = 0;
    
    for(let i = 0; i < array.length; i++) {
        let currentNumber = array[i];

        if (currentNumber % 2 === 0) {
            sumOfEven += currentNumber;
        } else {
            sumOfOdd += currentNumber;
        }
    }
    console.log(sumOfEven - sumOfOdd);
}

evenAndOddSubtraction([3,5,7,9]);