function uniquePINCodes (input) {
    let x1 = Number(input[0]);
    let x2 = Number(input[1]);
    let x3 = Number(input[2]);

    for (let first = 2; first <= x1; first++) {
        for (let second = 2; second <= x2; second++) {
            for (let third = 2; third <= x3; third++) {

                if (first % 2 !== 0) {
                    continue;
                }
        
                for (let i = 0; i < second; i++) {
                    if (second % i === 0) {
                        continue;
                    }
                }
                if (third % 2 !== 0) {
                    continue;
                }

                console.log(`${first} ${second} ${third}`);  
            }
        }  
    }
}

uniquePINCodes(["3", "5", "5"])