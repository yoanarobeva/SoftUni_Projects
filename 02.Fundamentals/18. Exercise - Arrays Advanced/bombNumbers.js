function bombNumbers(arr, bomb) {
    let bombNumber = bomb[0];
    let bombPower = bomb[1];

    while (arr.includes(bombNumber)) {
        let indexRight = arr.indexOf(bombNumber);
        let indexLeft = 0
        if (indexRight > bombPower) {
            indexLeft = indexRight - bombPower;
            arr.splice(indexRight, bombPower + 1);
            arr.splice(indexLeft, bombPower);
            
        } else {
            arr.splice(indexRight, bombPower + 1);
            arr.splice(indexLeft, indexRight);
            
        } 
    }
    let sum = 0;
    for (let num of arr) {
        sum += num;
    }
    console.log(sum);
}

bombNumbers([1, 2, 2, 4, 2, 2, 2, 9], [4, 2]);
console.log("________________");
bombNumbers([1, 2, 2, 4, 2, 7, 8, 2, 2, 9], [4, 4]);
console.log("________________");
bombNumbers([1, 4, 4, 2, 8, 9, 1], [9, 3]);
console.log("________________");
bombNumbers([1, 7, 7, 1, 2, 3], [7, 1]);
console.log("________________");
bombNumbers([1, 1, 2, 1, 1, 1, 2, 1, 1, 1], [2, 1]);
