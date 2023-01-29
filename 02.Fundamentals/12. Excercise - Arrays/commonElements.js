function commonElements (arr1, arr2) {
    for (let i of arr1) {
        for (let j of arr2) {
            if (i === j) {
                console.log(j);
            }
        }
    }
}

commonElements(['S', 'o', 'f', 't', 'U', 'n', 'i', ' '],
['s', 'o', 'c', 'i', 'a', 'l']
)