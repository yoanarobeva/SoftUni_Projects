function aggregateElements(input) {

    console.log(sum(input));
    console.log(inverseSum(input));
    console.log(concat(input));

    function sum(array1) {
        let sumAll = 0;
        for(let el of array1) {
            sumAll += el;
        }
        return sumAll;
    }

    function inverseSum(array2) {
        let inverseSumAll = 0;
        for (let el of array2) {
            let inverseEl = 1 / el;
            inverseSumAll += inverseEl
        }
        return inverseSumAll;
    }

    function concat(array3) {
        let resultString = '';
        for (let el of array3) {
            resultString += el;
        }
        return resultString;
    }
}

aggregateElements([1, 2, 3]);
console.log('______');
aggregateElements([2, 4, 8, 16])