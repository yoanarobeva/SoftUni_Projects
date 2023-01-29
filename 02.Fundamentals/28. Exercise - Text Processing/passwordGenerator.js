function passwordGenerator(input) {
    let stringOne = input[0];
    let stringTwo = input[1];
    let word = input[2];
    let i = 0;

    let string = stringOne + stringTwo;
    string = string.toLowerCase();

    for (let letter of string) {
        if (letter === 'a' || letter === 'e' || letter === 'i' || letter === 'o' || letter === 'u') {
            let replacement = word[i].toUpperCase();
            string = string.replace(letter, replacement)
            i++;
            if (i === word.length) {
                i = 0;
            }
        }
    }
    let reversed = string.split("").reverse().join("");
    console.log(`Your generated password is ${reversed}`);
}

passwordGenerator([
    'ilovepizza', 'ihatevegetables',
    'orange'
    ]);