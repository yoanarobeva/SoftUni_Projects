function equalSumsEvenOddPosition (input) {
    let x = input[0];
    let y = input[1];

    let diff = Number(y) - Number(x);
    let row = ""

    let current = x;
    let isFound = false;

    
    for (j = x; j <= y; j++) {
        
        let evenPositionSum = Number(current[1]) + Number(current[3]) + Number(current[5]);
        let oddPositionSum = Number(current[0]) + Number(current[2]) + Number(current[4]);
        if (evenPositionSum === oddPositionSum) {
            row = row + current + " ";  
        }
        current++;
        if (current > y){
            isFound = true;
            break;
        }
        current = current.toString();   
    }
    console.log(row);
    
}

equalSumsEvenOddPosition(["123456",
"124000"])

