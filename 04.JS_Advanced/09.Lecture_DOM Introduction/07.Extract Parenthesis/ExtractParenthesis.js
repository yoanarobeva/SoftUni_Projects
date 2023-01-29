function extract(id) {
    let text = document.getElementById(id).textContent;
    let pattern = /\((?<word>[a-zA-Z\s]+)\)/gm
    let matches = text.match(pattern);
    let result = [];
    
    for (let word of matches) {
        let wordFiltered = word.slice(1, word.length-1);
        result.push(wordFiltered)
    }

    let finalWords = result.join('; ');

    return finalWords;
}