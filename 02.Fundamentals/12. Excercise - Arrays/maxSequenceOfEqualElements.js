function maxSequenceOfEqualElements (array) {
    let maxSeq = [];
    for (let i = 0; i < array.length; i++) {
        let currentSeq = [];

        for (let j = i; j < array.length; j++) {
            if (array[i] === array[j]) {
                currentSeq.push(array[j]);
            } else {
                break;
            }
        }
        if (currentSeq.length > maxSeq.length) {
            maxSeq = currentSeq;
        }
    }
    console.log(maxSeq.join(" "));
}

maxSequenceOfEqualElements([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]) 