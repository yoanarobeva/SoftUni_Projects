function biggerHalf(input) {
    input.sort((a, b) => a - b);
    let half = Math.trunc(input.length / 2)
    

    let result = input.slice(half);
    //console.log(result);
    return result;
}

biggerHalf([4, 7, 2, 5]);
console.log('_____');
biggerHalf([3, 19, 14, 7, 2, 19, 6]);