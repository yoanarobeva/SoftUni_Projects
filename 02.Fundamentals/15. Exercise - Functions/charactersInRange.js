function charactersInRange(char1, char2) {
    let result = [];
    let start = Math.min(char1.charCodeAt(0), char2.charCodeAt(0));
    let end = Math.max(char1.charCodeAt(0), char2.charCodeAt(0));

    for (let i = start + 1; i < end; i++) {
        let currentDigit = String.fromCharCode(i);
        result.push(currentDigit);
    }
    console.log(result.join(" "));
}

charactersInRange('a', 'd');