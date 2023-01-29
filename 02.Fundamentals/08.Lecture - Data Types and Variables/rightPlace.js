function rightPlace(string1, char, string2) {

    let charSave = "";

    for (let i = 0; i < string1.length; i++) {
        let currentChar = string1[i];

        if (currentChar === "_") {
            charSave += char;
        } else {
            charSave += currentChar;
        }
    }
    if (charSave === string2) {
        console.log("Matched"); 
    } else {
        console.log("Not Matched")
    }

}

rightPlace('Str_ng', 'I', 'Strong')
rightPlace('Str_ng', 'i', 'String')