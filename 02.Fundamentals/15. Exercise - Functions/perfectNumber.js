function perfectNumber(n) {
    let sumOfDivisors = 1;
    for(let i = 2; i < n; i++) {
        if(n % i === 0) {
            sumOfDivisors += i;
        }
    }
    if (sumOfDivisors === n) {
        console.log("We have a perfect number!");
    } else {
        console.log("It's not so perfect.")
    }
}

perfectNumber(6);
console.log("-----");
perfectNumber(28);
console.log("-----");
perfectNumber(1236498)