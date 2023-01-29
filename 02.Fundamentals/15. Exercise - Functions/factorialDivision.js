function factorialDivision(num1, num2) {
    function factorial(x) {
        let result = 1;
        for (let i = 0; i < x; i++) {
            result *= (x - i);
        }
        return result;
    }
    console.log((factorial(num1) / factorial(num2)).toFixed(2));
}

factorialDivision(5, 2);