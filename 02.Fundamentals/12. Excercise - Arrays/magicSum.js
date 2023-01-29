function magicSum(array, n) {
    let finalArr = [];
    let pair = "";

    for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array.length; j++) {
            if (array[i] + array[j] === n) {
                pair = `${array[i]} ${array[j]}`
                finalArr.push(pair);
            }
        }
    }
    console.log(finalArr.join("\n"));
}
magicSum([1, 2, 3, 4, 5, 6], 6)
