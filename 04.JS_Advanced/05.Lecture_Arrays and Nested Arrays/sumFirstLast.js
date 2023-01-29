function sumFirstLast(input) {
    let first = input.shift();
    let last = input.pop();

    let result = Number(first) + Number(last);

    return result;
    //console.log(result);
}

sumFirstLast(['20', '30', '40']);
console.log('______');
sumFirstLast(['5', '10']);