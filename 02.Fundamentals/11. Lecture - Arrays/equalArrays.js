function equalArrays(arr1, arr2) {
    let areEqual = true;
    let sum = 0;

    for (let i = 0; i < arr1.length; i++) {
        sum += Number(arr1[i]);
        if (arr1[i] !== arr2[i]) {
            console.log( `Arrays are not identical. Found difference at ${i} index`)
            areEqual = false
            break;
        } 
        
    }
    if(areEqual) {
        console.log(`Arrays are identical. Sum: ${sum}`)
    }
}

equalArrays(['1','2','3','4','5'], ['1','2','4','4','5'])