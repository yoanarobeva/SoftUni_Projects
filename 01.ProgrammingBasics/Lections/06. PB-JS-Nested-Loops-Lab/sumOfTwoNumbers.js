function sumOfTwoNumbers (input) {
    let startInterval = Number(input[0]);
    let endInterval = Number(input[1]);
    let magicNumber = Number(input[2]);

    let counter = 0;
    let isThereCombination = false;

    for (let i = startInterval; i <= endInterval; i++) {
        for (let j = startInterval; j <= endInterval; j++) {
            let sum = i + j;
            counter++;

            if(isThereCombination) {
                break;
            }

            if (sum === magicNumber) {
                console.log(`Combination N:${counter} (${i} + ${j} = ${magicNumber})`);
                isThereCombination = true;
                break;
            }
        }
    }
    if (!isThereCombination) {
        console.log(`${counter} combinations - neither equals ${magicNumber}`);
    }
}

sumOfTwoNumbers(["23",
"24",
"20"])

