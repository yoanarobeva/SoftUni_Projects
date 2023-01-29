function emojiDetector(input) {
    let pattern = /(\:{2}|\*{2})(?<emoji>[A-Z][a-z]{2,})\1/gm
    let digits = /\d/gm;
    let valid;
    let emojiArr = [];
    let validCounter = 0;

    let thresholdArr = input[0].match(digits);
    let threshold = 1;
    thresholdArr.forEach(el => {
        threshold *= Number(el);
    })
    
    while ((valid = pattern.exec(input[0])) !== null) {
        validCounter++;
        let currentEmoji = valid.groups.emoji;
        currentEmoji = currentEmoji.split('');
        let sumOfLetters = 0;
        
        for (let letter of currentEmoji) {
            sumOfLetters += letter.charCodeAt();
        }

        if (sumOfLetters > threshold) {
            emojiArr.push(valid[0]);
        }
    }
    console.log(`Cool threshold: ${threshold}`);
    console.log(`${validCounter} emojis found in the text. The cool ones are:`);
    emojiArr.forEach(el => {
        console.log(el);
    })
}

emojiDetector(["In the Sofia Zoo there are 311 animals in total! ::Smiley:: This includes 3 **Tigers**, 1 ::Elephant:, 12 **Monk3ys**, a **Gorilla::, 5 ::fox:es: and 21 different types of :Snak::Es::. ::Mooning:: **Shy**"])