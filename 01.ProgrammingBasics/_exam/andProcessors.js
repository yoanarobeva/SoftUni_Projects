function andProcessors(input) {
    let processorsCountToBeProduced = Number(input[0]);
    let workersCount = Number(input[1]);
    let workingDays = Number(input[2]);

    let allWorkersTime = workingDays * workersCount * 8;
    let allPosibleProcessorsProduced = Math.floor(allWorkersTime / 3);

    let allProducedProcessorsPrice = allPosibleProcessorsProduced * 110.10;
    let expectedProfit = processorsCountToBeProduced * 110.10;

    let diff = Math.abs(allProducedProcessorsPrice - expectedProfit);

    if (allPosibleProcessorsProduced >= processorsCountToBeProduced) {
        console.log(`Profit: -> ${diff.toFixed(2)} BGN`);
    } else {
        console.log(`Losses: -> ${diff.toFixed(2)} BGN`)
    }
}

andProcessors (["150",
"7",
"18"])

