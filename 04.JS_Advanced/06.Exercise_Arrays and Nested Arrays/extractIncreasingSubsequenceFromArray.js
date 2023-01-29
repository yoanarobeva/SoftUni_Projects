function extractIncreasingSubsequenceFromArray(input) {
    let theBiggestNum = input[0];
    let result = [];
    result.push(theBiggestNum);

    for (let i = 1; i < input.length; i++) {
        if (input[i] >= result[result.length - 1]) {
            result.push(input[i]);
        } else {
            theBiggestNum = input[i];
        }
    }
    //console.log(result);
    return result;
}

extractIncreasingSubsequenceFromArray([1, 
    2, 
    3,
    4]
       
    )