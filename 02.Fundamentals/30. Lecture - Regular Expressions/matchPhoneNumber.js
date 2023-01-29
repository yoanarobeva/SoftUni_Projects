function matchPhoneNumber(input) {
    let pattern = /\+359([ -])2\1\d{3}\1\d{4}\b/gm;
    let validPhonesArr = [];
    let currentPhone;

    while ((currentPhone = pattern.exec(input[0])) !== null) {
        validPhonesArr.push(currentPhone[0]);
    }

    console.log(validPhonesArr.join(", "));
}

matchPhoneNumber(['+359 2 222 2222,359-2-222-2222, +359/2/222/2222, +359-2 222 2222 +359 2-222-2222, +359-2-222-222, +359-2-222-22222 +359-2-222-2222'])