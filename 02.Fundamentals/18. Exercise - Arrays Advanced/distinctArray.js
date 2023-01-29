function distinctArray(arr) {
    let resultedArr = [];

    for(let el of arr) {
        if (!resultedArr.includes(el)) {
            resultedArr.push(el);
        }
    }

    console.log(resultedArr.join(" "));
}

distinctArray([1, 2, 3, 4]);
console.log('_______________________')
distinctArray([7, 8, 9, 7, 2, 3, 4, 1, 2]);
console.log('_______________________')
distinctArray([20, 8, 12, 13, 4, 4, 8, 5]);
console.log('_______________________')