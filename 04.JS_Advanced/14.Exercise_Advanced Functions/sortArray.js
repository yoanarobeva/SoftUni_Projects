function sortArray(arr, order) {
    let sorted = [];
    if (order === 'asc') {
        sorted = arr.sort((a,b) => a - b);
    } else {
        sorted = arr.sort((a,b) => b - a);
    }

    return sorted;
}

console.log(sortArray([14, 7, 17, 6, 8], 'asc'));

console.log(sortArray([14, 7, 17, 6, 8], 'desc'));