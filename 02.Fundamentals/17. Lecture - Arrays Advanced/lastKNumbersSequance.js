function lastKNumbersSequance(n, k) {
    let result = [1];

    for (let i = 0; i < n - 1; i++) {
        let sum = 0;
        for (let num of result.slice(-k)) {
            sum += num;
        }
        result.push(sum);
    }
    console.log(result.join(" "));
}

lastKNumbersSequance(6, 3);