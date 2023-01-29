function searchForANumber(arr1, arr2) {

    let firstNum = arr2[0];
    let secondNum = arr2[1];
    let thirdNum = arr2[2];

    let counter = 0;

    let manipulatedArr = arr1.slice(0, firstNum);
    manipulatedArr.splice(0, secondNum);

    for (let el of manipulatedArr) {
        if (thirdNum === el) {
            counter++;
        }
    }
    
    console.log(`Number ${thirdNum} occurs ${counter} times.`);
}

searchForANumber([5, 2, 3, 4, 1, 6], [5, 2, 3]);
searchForANumber([7, 1, 5, 8, 2, 7], [3, 1, 5]);