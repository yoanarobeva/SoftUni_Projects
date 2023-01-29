function theImitationGame(input) {
    let encryptedWord = input.shift().split("");

    for (let line of input) {
        if (line === 'Decode') {
            break;
        }

        let commandArr = line.split("|");
        let command = commandArr.shift();

        if (command === 'Move') {
            let n = Number(commandArr[0]);
            for (let i = 0; i < n; i++) {
                let temp = encryptedWord.shift();
                encryptedWord.push(temp);
            }
        } else if (command === 'Insert') {
            let index = Number(commandArr[0]);
            let value = commandArr[1].split("");
            value.forEach(element => {
                encryptedWord.splice(index, 0, element)
                index++;
            });
            
        } else if (command === 'ChangeAll') {
            let substr = commandArr[0];
            let repl = commandArr[1];
            let text = encryptedWord.join("");

            while (text.includes(substr)) {
               text = text.replace(substr, repl);
            }
            encryptedWord = text.split("");
        }
    }
    console.log(`The decrypted message is: ${encryptedWord.join("")}`);
}

theImitationGame([
    'owyouh',
    'Move|2',
    'Move|3',
    'Insert|3|are',
    'Insert|9|?',
    'Decode'])