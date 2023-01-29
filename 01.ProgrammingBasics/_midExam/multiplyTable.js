function multiplyTable (input) {
    let n = input[0];

    let x1 = Number(n.charAt(2));
    let x2 = Number(n.charAt(1));
    let x3 = Number(n.charAt(0));

    for (let y1 = 1; y1 <= x1; y1++) {
        for (let y2 = 1; y2 <= x2; y2++) {
            for (let y3 = 1; y3 <= x3; y3++) {
                console.log(`${y1} * ${y2} * ${y3} = ${y1 * y2 * y3};`);
            }
        }
    }

}

multiplyTable(["222"])