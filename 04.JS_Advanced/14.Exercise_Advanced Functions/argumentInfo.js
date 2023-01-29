function argumentInfo() {
    let typesObj = {};

    let input = [...arguments];
    input.forEach(x => {
        let type = typeof x;
        console.log(`${type}: ${x}`)
        if (!typesObj[type]) {
            typesObj[type] = 0;
        }
        typesObj[type]++;
    });

    let types = Array.from(Object.entries(typesObj));
    types.sort(([keyA, valueA], [keyB, valueB]) => valueB - valueA);
    types.forEach(x => console.log(`${x[0]} = ${x[1]}`));
}

argumentInfo({ name: 'bob'}, 3.333, 9.999);