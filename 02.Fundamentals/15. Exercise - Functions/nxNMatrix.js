function nxNMatrix(n) {
    for(let i = 0; i < n; i++) {
        let rowArr = [];

        for(let j = 0; j < n; j++) {
            rowArr.push(n);
        }
        console.log(rowArr.join(" "));
    } 
}
nxNMatrix(3);