function add(n) {
    let sum = 0;

    function add2(n2) {
        sum += n2;
        return add2;
    }

    add2.toString = () => {return sum};
    return add2(n);
}

console.log(add(1)(6)(-3).toString())