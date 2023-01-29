function multiplicationTable (input) {
    let n = Number(input[0]);
    let resultNumber = 0;

    for (let i = 1; i <= 10; i++) {
        resultNumber = i * n;
        console.log(`${i} * ${n} = ${resultNumber}`);
    }
}

multiplicationTable(["5"]);