function signCheck(num1, num2, num3) {
    let negativeCounter = 0;

    isPositive(num1);
    isPositive(num2);
    isPositive(num3);

    function isPositive(x) {
        if (x < 0) {
            negativeCounter++;
        }
    } 

    switch (negativeCounter) {
        case 3:
        case 1: console.log("Negative"); break;
        case 0:
        case 2: console.log("Positive"); break;
    }
}

signCheck( 5, 12, -15);
signCheck(-6, -12, 14);