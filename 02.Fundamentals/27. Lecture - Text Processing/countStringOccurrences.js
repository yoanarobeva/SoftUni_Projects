function countStringOccurrences(text, wantedWord) {
    let textArr = text.split(" ");
    let counter = 0;

    for (let i = 0; i < textArr.length; i++) {
        if (textArr[i].toLowerCase() === wantedWord) {
            counter++;
        }
    }

    console.log(counter);
}

countStringOccurrences('This is a word and it also is a sentence',
'is')