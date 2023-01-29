function blackFlag(input) {
    let days = Number(input[0]);
    let plunderForADay = Number(input[1]);
    let expectedPlunderAtTheEnd = Number(input[2]);
    let totalPlunder = 0;

    for (let i = 1; i <= days; i++) {
        totalPlunder += plunderForADay;

        if (i % 3 === 0) {
            totalPlunder += 0.5 * plunderForADay;
        }

        if (i % 5 === 0) {
            totalPlunder = totalPlunder * 0.7;
        }
    }

    let percent = totalPlunder / expectedPlunderAtTheEnd * 100;

    if (totalPlunder >= expectedPlunderAtTheEnd) {
        console.log(`Ahoy! ${totalPlunder.toFixed(2)} plunder gained.`)
    } else {
        console.log(`Collected only ${percent.toFixed(2)}% of the plunder.`);
    }
}

blackFlag(["10",
"20",
"380"])

