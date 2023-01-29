function passwordValidator(string) {

    let digitCounter = 0;
    let isDigitsAndLettersOnly = true;
    let isValid = true;

    if (string.length > 10 || string.length < 6) {
        console.log("Password must be between 6 and 10 characters");
        isValid = false;
    }

    for (let i = 0; i < string.length; i++) {
        let current = string[i];

        if(!((current.charCodeAt(0) >= 48 && current.charCodeAt(0) <= 57) || 
            (current.charCodeAt(0) >= 65 && current.charCodeAt(0) <= 90) || 
             (current.charCodeAt(0) >= 97 && current.charCodeAt(0) <= 122)) ) {
                isDigitsAndLettersOnly = false;
        }

        if (current.charCodeAt(0) >= 48 && current.charCodeAt(0) <= 57) {
            digitCounter++;
        }

    }
    if (!isDigitsAndLettersOnly) {
        console.log("Password must consist only of letters and digits");
        isValid = false;
    }

    if (digitCounter < 2) {
        console.log("Password must have at least 2 digits");
        isValid = false;
    } 
    
    if (isValid) {
        console.log("Password is valid");
    }
 
}
passwordValidator('logIn');
console.log("-------------");
passwordValidator('MyPass123');
console.log("-------------");
passwordValidator('Pa$s$s');
console.log("-------------");
passwordValidator('14265555');
