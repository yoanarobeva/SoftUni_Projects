function oddOccurrences(input) {
    let map = new Map();

    let wordsArr = input.split(" ");

    for (let word of wordsArr) {
        word = word.toLowerCase()
        if (!map.has(word)) {
            map.set(word, 1) 
        } else {
            map.set(word, map.get(word) + 1);
        }
    }

    let filtered = Array.from(map).filter(a => {
        let [key, value] = a;
        return map.get(key) % 2 !== 0
    })

    //console.table(filtered)
    let buff = "";
    for (let [key, value] of filtered) {
        buff += key + " ";
    }
    
    console.log(buff); 
}

oddOccurrences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#')