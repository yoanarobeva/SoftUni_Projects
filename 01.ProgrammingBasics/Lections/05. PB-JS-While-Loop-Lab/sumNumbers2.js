function sumNumbers (input) {
    let index = 0;
    let firstNumber = Number(input[index]);
    index++;
    let sum = 0;

    while (sum < firstNumber) {
        currentNumber = Number(input[index]);
        sum += currentNumber;
        index++; 
     
    }

    console.log(sum);
} 

sumNumbers(["100",
"10",
"20",
"30",
"40"])
