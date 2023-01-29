function sumPrimeNonPrime (input) {
    let index = 0;
    let currentNumber = input[index];
    let sumPrime = 0;
    let sumNonPrime = 0;

    while (currentNumber !== "stop") {
        currentNumber = Number(input[index]);
        
        if (currentNumber < 0) {
            console.log(`Number is negative.`);
            index++
            currentNumber = input[index];
            continue;
        }

        if (currentNumber === 1) {
            sumPrime += currentNumber;
            index++
            currentNumber = input[index];
            continue;
        }
        let isNonPrime = false;

        for(let i = 2; i < currentNumber; i++) {
            if (currentNumber % i === 0) {
                isNonPrime = true;
                break;
            }
        }

        if (isNonPrime) {
            sumNonPrime += currentNumber;
        } else {
            sumPrime += currentNumber;
        }

        index++
        currentNumber = input[index];
    }
    
    console.log(`Sum of all prime numbers is: ${sumPrime}`);
    console.log(`Sum of all non prime numbers is: ${sumNonPrime}`);
}

sumPrimeNonPrime(["30",
"83",
"33",
"-1",
"20",
"stop"])

