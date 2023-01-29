function pascalCaseSplitter(input) {
    let lettersArr = input.split("");
    let resultArr = [];
    let currentWord = lettersArr[0];

    for (let i = 1; i < lettersArr.length; i++) {
        let letter = lettersArr[i];
        if (letter.charCodeAt() < 65 || letter.charCodeAt() > 90) {
            currentWord += letter;
        } else {
            resultArr.push(currentWord);
            currentWord = lettersArr[i];
        }
    }
    resultArr.push(currentWord);
    console.log(resultArr.join(", "));
}

pascalCaseSplitter('SplitMeIfYouCanHaHaYouCantOrYouCan')