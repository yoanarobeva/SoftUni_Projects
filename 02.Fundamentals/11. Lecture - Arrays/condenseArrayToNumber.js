function condenseArrayToNumber (array) {
    let condensedArr = [];

    while (array.length > 1) {
        let condensedArr = [];
        for (let i = 0; i < array.length-1; i++) {
            condensedArr[i] = array[i] + array[i+1];
        }
        
        array = condensedArr;
    }
    console.log(array.join());
}

condenseArrayToNumber([2,10,3])