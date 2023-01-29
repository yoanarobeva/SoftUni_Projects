function minNumber (input) {
    let index = 0;
    let currentNumber = input[index];
    let min = Number.MAX_SAFE_INTEGER;

    while (currentNumber !== "Stop") {
        currentNumber = Number(input[index]);

        if (currentNumber < min) {
            min = currentNumber;
        }

        index++
        currentNumber = input[index];
    }

    console.log(min);
}

minNumber(["100",
"99",
"80",
"70",
"Stop"])

