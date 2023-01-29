function secretChat(input) {
    let concealedMessage = input.shift();

    for (let line of input) {
        let commandArr = line.split(":|:");
        let command = commandArr.shift();

        if (command === 'Reveal') {
            break;
        } else if (command === 'InsertSpace') {
            let indexOfInsert = Number(commandArr.shift());

            concealedMessage = concealedMessage.split("");
            concealedMessage.splice(indexOfInsert, 0, ' ');
            concealedMessage = concealedMessage.join("");
            console.log(concealedMessage);

        } else if (command === 'Reverse') {
            let substrOfReverse = commandArr.shift();
            let reversed = substrOfReverse.split("").reverse().join("");

            if (concealedMessage.includes(substrOfReverse)) {
                let index = concealedMessage.indexOf(substrOfReverse);
                concealedMessage = concealedMessage.split("");
                concealedMessage.splice(index, substrOfReverse.length);
                concealedMessage.push(reversed);
                concealedMessage = concealedMessage.join("");
                console.log(concealedMessage);
            } else {
                console.log('error');
            }

        } else if (command === 'ChangeAll') {
            let substrOfChange = commandArr[0];
            let replacement = commandArr[1];

            let regx = new RegExp(substrOfChange, 'g');

            concealedMessage = concealedMessage.replace(regx, replacement);
            console.log(concealedMessage);
        }
    }
    console.log(`You have a new text message: ${concealedMessage}`);
}

secretChat([
    'heVVodar!gniV',
    'ChangeAll:|:V:|:l',
    'Reverse:|:!gnil',
    'InsertSpace:|:5',
    'Reveal'
  ])