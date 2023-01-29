function sorting(arr) {
    let sortedArr = arr.sort((a, b) => a - b);
    // console.log(sortedArr);
    let newArr = []
    for (let i = 0; i < sortedArr.length / 2; i++) {
        let lastIndex = sortedArr.length - i - 1;
        newArr.push(sortedArr[lastIndex]);
        newArr.push(sortedArr[i])
    }

    if (sortedArr.length % 2 === 1) {
        newArr.pop();
    }
    console.log(newArr.join(" "))
}

sorting([34, 2, 32, 45, 690, 6, 32, 7, 19, 47, 80]);