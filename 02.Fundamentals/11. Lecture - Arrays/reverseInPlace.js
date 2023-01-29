function reverseInPlace (array) {
    let newArray = [];
    
    for (let el = 0; el < array.length; el++) {
        newArray.push(array[el]);
    }

    for (let i = 0; i < newArray.length/2; i++) {
        let bufferEl = newArray[i];
        newArray[i] = newArray[newArray.length - 1 - i]
        newArray[newArray.length - 1 -i] = bufferEl;

    }
    console.log(newArray.join(" "));
}

reverseInPlace(['a', 'b', 'c', 'd', 'e'])