function wordTracker(input) {
    let map = new Map();
    let wantedWords = input.shift().split(" ");

    for (let word of wantedWords) {
        map.set(word, 0);
    }

    for (let el of input) {
        if (map.has(el)) {
            map.set(el, map.get(el) + 1)
        }
    }

    let sorted = Array.from(map).sort((a,b) => b[1] - a[1]);

    for (let [key, value] of sorted) {
        console.log(`${key} - ${value}`);
    }

}

wordTracker([
    'this sentence', 
    'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurrences', 'of', 'the', 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task'
    ]
    )