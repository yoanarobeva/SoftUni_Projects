function modernTimesOfHashTag(input) {
    let textArr = input.split(" ");
    let resultArr = [];
    

    for (let word of textArr) {
        
        if (word[0] === "#" && word.length > 1) {
            
            let isDigit = false;
            for (let i = 1; i < word.length; i++) {
                let letter = word[i].toLowerCase();
                if (letter.charCodeAt() < 97 || letter.charCodeAt() > 122) {
                    isDigit = true;
                }
            }
            if (!isDigit) {
                resultArr.push(word.slice(1));
            }
        }
    }

    console.log(resultArr.join("\n"));
}

modernTimesOfHashTag('Nowadays everyone uses # to tag a #special word in #socialMedia')