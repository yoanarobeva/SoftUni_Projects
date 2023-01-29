function lettersChangeNumbers(input) {
    let sumOfAll = 0;
    let numbers = input.split(' ');

    for (let number of numbers) {
        if (number === '') {
            continue;
        }
        number = number.split('');

        let firstLetter = number.shift();
        let lastLetter = number.pop();

        let operatedNumber = Number(number.join(""));

        if (firstLetter.charCodeAt() >= 65 && firstLetter.charCodeAt() <= 90) {
            let positionInAlphabet = firstLetter.charCodeAt() - 64;
            operatedNumber = operatedNumber / positionInAlphabet;
        } else {
            let positionInAlphabet = firstLetter.charCodeAt() - 96;
            operatedNumber = operatedNumber * positionInAlphabet;
        }

        if (lastLetter.charCodeAt() >= 65 && lastLetter.charCodeAt() <= 90) {
            let positionInAlphabet = lastLetter.charCodeAt() - 64;
            operatedNumber = operatedNumber - positionInAlphabet;
        } else {
            let positionInAlphabet = lastLetter.charCodeAt() - 96;
            operatedNumber = operatedNumber + positionInAlphabet;
        }
        sumOfAll += operatedNumber;
    }
    console.log(sumOfAll.toFixed(2));
}

lettersChangeNumbers('a1A')