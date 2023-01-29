function maxNumber(array) {
    let topIntArr = [];
    

    for (let i = 0; i < array.length; i++) {
        let currentNum = array[i];
        let isBigger = false;
        for (let j = i + 1; j < array.length; j++) {
            let nextNum = array[j];
            if (currentNum <= nextNum) {
                isBigger = false;
                break;
            } else {
                isBigger = true;
            }
        }
        if (isBigger) {
            topIntArr.push(currentNum);
        }
    }
    topIntArr.push(array[array.length - 1])
    console.log(topIntArr.join(" "));
}

maxNumber([27, 19, 42, 2, 13, 45, 48]);