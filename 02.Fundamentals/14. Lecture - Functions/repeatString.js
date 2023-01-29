function repeatString(string, num) {
    let resultString = "";
    for (let i = 0; i < num; i++) {
        resultString += string;
    }
    return resultString;   
}
let result = repeatString("abc", 3);;
    console.log (result);