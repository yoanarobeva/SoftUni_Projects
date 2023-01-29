function sumFirstAndLast(arr) {
    let firstEl = arr.shift();
    let lastEl = arr.pop();

    console.log(Number(firstEl) + Number(lastEl));
}

sumFirstAndLast(['20', '30', '40']);