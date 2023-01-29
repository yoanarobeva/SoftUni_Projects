function maxNumber (input) {
    let index = 0;
    let currentNumber = input[index];
    let maxNumber = Number.MIN_SAFE_INTEGER;

    while (currentNumber !== "Stop") {
        currentNumber = Number(input[index]);

        if (currentNumber > maxNumber) {
            maxNumber = currentNumber;
        }

        index++
        currentNumber = input[index];
    }

    console.log(maxNumber);
}

maxNumber(["-10",
"20",
"-30",
"Stop"])

