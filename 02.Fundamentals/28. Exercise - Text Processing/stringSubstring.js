function stringSubstring(word, text) {
    let textArr = text.toLowerCase().split(" ");
    for (let el of textArr) {
        if (el === word) {
            return console.log(word);
        } 
    }
    console.log(`${word} not found!`);
}

stringSubstring('python',
'JavaScript is the best programming language')