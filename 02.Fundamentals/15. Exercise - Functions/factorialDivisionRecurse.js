function factorialDivisionRecurse(num1, num2) {

    function factorial(x) {
        if (x == 0) {
            return 1;
        } else {
            return x * factorial(x-1);
        }
    }
    console.log((factorial(num1) / factorial(num2)).toFixed(2));
}
factorialDivisionRecurse(6, 2);
