function vetParking (input) {
    let dayCount = Number(input[0]);
    let hourCountPerDay = Number(input[1]);
    
    let totalSum  = 0;
    
    for (let day = 1; day <= dayCount; day++) {
        let sum = 0;
        for (let hour = 1; hour <= hourCountPerDay; hour++) {
            
            if (day % 2 === 0 && hour % 2 !== 0) {
                sum += 2.50;
            } else if (day % 2 !== 0 && hour % 2 === 0) {
                sum += 1.25;
            } else {
                sum += 1;
            }
        }
        console.log(`Day: ${day} - ${sum.toFixed(2)} leva`);
        totalSum += sum;
    }
    console.log(`Total: ${totalSum.toFixed(2)} leva`);
}

vetParking (["2", "5"])