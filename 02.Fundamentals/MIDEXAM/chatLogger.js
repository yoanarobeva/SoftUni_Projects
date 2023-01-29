function chatLogger(input) {
    let chatArr = [];

    for (let el of input) {
      
        let commandArr = el.split(" ");
        let command = commandArr.shift();

        if (command === 'Chat') {
            let messageChat = commandArr[0];
            chatArr.push(messageChat);
        } else if (command === 'Delete') {
            let messageDelete = commandArr[0];
            if (chatArr.includes(messageDelete)) {
                let indexDel = chatArr.indexOf(messageDelete);
                chatArr.splice(indexDel, 1);
            }
        } else if (command === 'Edit') {
            let messageEdit = commandArr[0];
            let newMessage = commandArr[1];

            if (chatArr.includes(messageEdit)) {
                let indexEdit = chatArr.indexOf(messageEdit);
                chatArr[indexEdit] = newMessage;
            }
        } else if (command === 'Pin') {
            let messagePin = commandArr[0];
            if (chatArr.includes(messagePin)) {
                let indexPin = chatArr.indexOf(messagePin);
                chatArr.splice(indexPin, 1);
                chatArr.push(messagePin);
            }
        } else if (command === 'Spam') {
           for (let el2 of commandArr) {
            chatArr.push(el2);
           }
        } else if (command === 'end') {
            break;
        }
    }
    console.log(chatArr.join("\n"));
}

chatLogger(["Chat John",
"Spam Let's go to the zoo",
"Edit zoo cinema",
"Chat tonight",
"Pin John",
"end"])


