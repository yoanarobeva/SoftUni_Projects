function sumNumbers (input) {
    let index = 0;
    let firstNumber = Number(input[index]);
    index++;
    let sum = 0;

    while (true) {
        currentNumber = Number(input[index]);
        sum += currentNumber;
        index++; 
        if (sum >= firstNumber) {
            break;
        }  
    }

    console.log(sum);
} 

sumNumbers(["100",
"10",
"20",
"30",
"40"])
