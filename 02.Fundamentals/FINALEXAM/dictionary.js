function dictionary(input) {
    let dictionary = new Map();

    let pairs = input.shift().split(' | ');
    for (let pair of pairs) {
        let [word, definition] = pair.split(': ');
        if (!dictionary.has(word)) {
            dictionary.set(word, []);
        }
        dictionary.get(word).push(definition);
    }
    //console.table(dictionary);

    let command = input.pop();
    
    if (command === 'Hand Over') {
        let keys = Array.from(dictionary.keys());
        console.log(keys.join(" "));
    } else if (command === 'Test') {
        let testedWordsArr = input.shift().split(' | ');
        for (let word of testedWordsArr) {
            if (dictionary.has(word)) {
                console.log(`${word}:`);
                dictionary.get(word).forEach(el => {
                    console.log(` -${el}`);
                })
            }
        }
    }
}

dictionary(["care: worry, anxiety, or concern | care: a state of mind in which one is troubled | face: the front part of the head, from the forehead to the chin",
"care | kitchen | flower",
"Test"])

