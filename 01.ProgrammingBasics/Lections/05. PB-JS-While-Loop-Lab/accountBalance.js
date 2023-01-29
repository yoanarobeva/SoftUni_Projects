function accountBalance (input) {
    let index = 0;
    let currentMoney = input[index];

    let sum = 0;
    let isOperationValid = true;

    while (true) {
        if (currentMoney == "NoMoreMoney") {
            break;
        } else if (Number(currentMoney) < 0) {
            console.log ("Invalid operation!");
            isOperationValid = false;
            break;
        }
        console.log(`Increase: ${Number(currentMoney).toFixed(2)}`);
        sum += Number(currentMoney);
        index++
        currentMoney = input[index];  
    }
   
 console.log(`Total: ${sum.toFixed(2)}`);

}

accountBalance(["120",
"45.55",
"-150"])



