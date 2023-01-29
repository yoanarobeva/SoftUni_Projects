function replaceRepeatingChars(input) {
    let resultArr = [];
    let lettersArr = input.split("");

    for (let i = 0; i < lettersArr.length; i++) {
        if (lettersArr[i] !== lettersArr[i + 1]) {
            resultArr.push(lettersArr[i]);
        }
    }

    console.log(resultArr.join(""));
}

replaceRepeatingChars('qqqwerqwecccwd');