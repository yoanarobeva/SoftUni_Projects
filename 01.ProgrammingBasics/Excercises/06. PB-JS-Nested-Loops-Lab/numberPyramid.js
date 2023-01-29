function numberPyramid (input) {
    let n = Number(input[0]);
    let rowString = ""
    let current = 1;
    let isBigger = false;

    for (let row = 1; row <= n; row++) {
        for (let col = 1; col <= row; col++) {
           if (current > n) {
               isBigger = true;
               break;
           }
           rowString += current + " ";
           current++;
        }
        console.log(rowString);
        rowString = "";
        
        if (isBigger) {
            break;
        }
    }
}

numberPyramid(["1"])