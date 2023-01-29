function transportPrice (input) {
    let n = Number(input[0]);
    let when = input[1];

    let sum = 0;

    switch(when) {
        case "day":
            if (n < 20) {
                sum = 0.7 + 0.79 * n;
            } else if (n < 100) {
                sum = 0.09 * n;
            } else if (n >= 100) {
                sum = 0.06 * n;
            }
        break;
        case "night":
            if (n < 20) {
                sum = 0.7 + 0.90 * n;
            } else if (n < 100) {
                sum = 0.09 * n;
            } else if (n >= 100) {
                sum = 0.06 * n;
            } 
        break;
    }
    console.log(sum.toFixed(2))
}

transportPrice(["5", "day"])