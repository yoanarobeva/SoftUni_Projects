function validate() {
    let inputField = document.getElementById('email');

    inputField.addEventListener('change', checkValidation);

    function checkValidation(event) {
        let inputText = inputField.value;
        console.log(inputText);
        let pattern = /[a-z]+@[a-z]+.[a-z]+/gm;

        if (!pattern.test(inputText)) {
            inputField.classList.add('error');
        } else {
            inputField.classList.remove('error');
        } 
    }
}