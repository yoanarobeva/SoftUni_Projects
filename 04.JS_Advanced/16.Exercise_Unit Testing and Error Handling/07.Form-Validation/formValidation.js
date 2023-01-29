function validate() {
    let isCompanyCheckbox = document.getElementById('company');
    let companyInfo = document.getElementById('companyInfo');
    let submitBtn = document.getElementById('submit');
    let companyNumber = document.getElementById('companyNumber');
    let validText = document.getElementById('valid');

    isCompanyCheckbox.addEventListener('change', (e) => {
        if (isCompanyCheckbox.checked) {
            companyInfo.style.display = 'block';
        } else {
            companyInfo.style.display = 'none';
        }  
    })

    submitBtn.addEventListener('click', onSubmitClick)

    function onSubmitClick(event) {
        let usernameField = document.getElementById('username');
        let emailField = document.getElementById('email');
        let passwordField = document.getElementById('password');
        let confirmPasswordField = document.getElementById('confirm-password');
        event.preventDefault();

        let usernameValidator = /^[A-Za-z0-9]{3,20}$/;
        let emailValidator = /^[^@.]+@[^@]*\.[^@]*$/;
        let passwordValidator = /^[\w]{5,15}$/;
        let isAllValid = []
        
        let usernameFieldInput = usernameField.value;
        if (usernameValidator.test(usernameFieldInput)) {
            usernameField.style.border = 'none';
            isAllValid.push(true)
        } else {
            usernameField.style.borderColor = 'red';
            isAllValid.push(false)
        }
    
        let emailFieldInput = emailField.value;
        if (emailValidator.test(emailFieldInput)) {
            emailField.style.border = 'none';
            isAllValid.push(true)
        } else {
            emailField.style.borderColor = 'red';
            isAllValid.push(false)
        }
    
        if (passwordValidator.exec(passwordField.value) !== null && passwordValidator.exec(confirmPasswordField.value) !== null && passwordField.value === confirmPasswordField.value) {
            passwordField.style.borderColor = ''
            confirmPasswordField.style.borderCOlor = ''
            isAllValid.push(true)
        } else {
            passwordField.style.borderColor = 'red'
            confirmPasswordField.style.borderColor = 'red'
            isAllValid.push(false)
        }

        if (isCompanyCheckbox.checked) {
            if (companyNumber.value < 1000 || companyNumber.value > 9999) {
                companyNumber.style.borderColor = 'red'
                isAllValid.push(false)
            } else {
                companyNumber.style.border = 'none'
                isAllValid.push(true)
            }
        }

        if (!isAllValid.includes(false)) {
            validText.style.display = 'block'
        } else {
            validText.style.display = 'none'
        }
    }
}
