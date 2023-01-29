function pcStore(input) {
    let processorPriceDollars = Number(input[0]);
    let videoPriceDollars = Number(input[1]);
    let ramPriceDollars = Number(input[2]);
    let ramCount = Number(input[3]);
    let percentDiscount = Number(input[4]);

    let processorPriceBGN = processorPriceDollars * 1.57;
    let videoPriceBGN = videoPriceDollars * 1.57;
    let ramPriceBGN = ramPriceDollars * 1.57 * ramCount;

    let processorPriceBGNDiscounted = processorPriceBGN - processorPriceBGN * percentDiscount;
    let videoPriceBGNDiscounted = videoPriceBGN - videoPriceBGN * percentDiscount;

    let sum = processorPriceBGNDiscounted + videoPriceBGNDiscounted + ramPriceBGN;

    console.log(`Money needed - ${sum.toFixed(2)} leva.`)

}

pcStore(["500",
"200",
"80",
"2",
"0.05"])
