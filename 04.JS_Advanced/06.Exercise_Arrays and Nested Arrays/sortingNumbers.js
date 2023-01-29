function sortingNumbers(input) {
    let result = [];

    while (input.length > 0) {
        if (input.length === 1) {
            result.push(input[0]);
            break;
        }
        let tempMin = Math.min(...input);
        let indexMin = input.indexOf(tempMin);
        input.splice(indexMin, 1);
        let tempMax = Math.max(...input);
        let indexMax = input.indexOf(tempMax);
        input.splice(indexMax, 1);

        result.push(tempMin);
        result.push(tempMax);
    }

    //console.log(result);
    return result;
}
sortingNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56, 77])