function addAndSubtract (array) {
    let newArray = [];
    let newArraySum = 0;
    let arraySum = 0;

    for(let i = 0; i < array.length; i++) {
        let currentNumber = array[i];
        arraySum += currentNumber;
        if (currentNumber % 2 === 0) {
            newArray.push(currentNumber + i);
        } else {
            newArray.push(currentNumber - i);
        }
        newArraySum += newArray[i];
    }
    console.log(newArray);
    console.log(arraySum);
    console.log(newArraySum);
}

addAndSubtract([5, 15, 23, 56, 35]);