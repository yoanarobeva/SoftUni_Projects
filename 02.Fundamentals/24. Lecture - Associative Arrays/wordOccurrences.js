function wordOccurrences(input) {
    let map = new Map();

    for (let el of input) {
        if (map.has(el)) {
            map.set(el, map.get(el) + 1)
        } else {
            map.set(el, 1);
        }
    }

    let wordsArr = Array.from(map.entries()).sort(([keyA, valueA], [keyB, valueB]) => valueB - valueA);

    for (let [word, num] of wordsArr) {
        console.log(`${word} -> ${num} times`);
    }

}

wordOccurrences(["Here", "is", "the", "first", "sentence", "Here", "is", "another", "sentence", "And", "finally", "the", "third", "sentence"])