function arrayRotation (array, n) {
    let newArray = [];

    for (let i of array) {
        newArray.push(i);
    }
   
    for (let j = 0; j < n; j++) {
        let currentValue = newArray[0];
        newArray.shift();
        newArray.push(currentValue);
    }
    console.log(newArray.join(" "));
}

arrayRotation([2, 4, 15, 31], 5)