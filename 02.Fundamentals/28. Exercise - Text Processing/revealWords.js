function revealWords(wantedWords, text) {
    let wantedWordsArr = wantedWords.split(", ");
    let textArr = text.split(" ");
    for (let word of wantedWordsArr) {
        for (let el of textArr) {
            if (word.length === el.length && el[0] === "*" ) {
                let index = textArr.indexOf(el);
                textArr[index] = word;
            }
        }
    }
    console.log(textArr.join(" "));
}

revealWords('great',
'softuni is ***** place for learning new programming languages')