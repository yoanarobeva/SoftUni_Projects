function encodeAndDecodeMessages() {
    let inputField = document.getElementsByTagName('textarea')[0];
    let outputField = document.getElementsByTagName('textarea')[1];

    document.getElementById('main').addEventListener('click', onClick);

    function onClick(event) {

        if (event.target.textContent === 'Encode and send it' && event.target.tagName === 'BUTTON') {
            let inputText = inputField.value;
            let decodedText = '';

            for (let letter of inputText) {
                let decodedLetter = String.fromCharCode(letter.charCodeAt() + 1);
                decodedText += decodedLetter;
            }

            outputField.value = decodedText;
            inputField.value = '';
        } else if (event.target.textContent === 'Decode and read it'&& event.target.tagName === 'BUTTON') {
            let outputText = outputField.value;
            let encodedText = '';

            for (let letter of outputText) {
                let encodedLetter = String.fromCharCode(letter.charCodeAt() - 1);
                encodedText += encodedLetter;
            }

            outputField.value = encodedText;
        } 
    }
}