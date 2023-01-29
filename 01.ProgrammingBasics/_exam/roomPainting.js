function roomPainting (input) {
    let paintBuckets = Number(input[0]);
    let wallpaperRolls = Number(input[1]);
    let glovePricePerCount = Number(input[2]);
    let brushPricePerCount = Number(input[3]);

    let paintBucketsPrice = paintBuckets * 21.50;
    let wallpaperRollsPrice = wallpaperRolls * 5.20;
    let gloveCount = Math.ceil(wallpaperRolls * 0.35);
    let glovePrice = gloveCount * glovePricePerCount;
    let brushCount = Math.floor(paintBuckets * 0.48);
    let brushPrice = brushCount * brushPricePerCount;

    let sum = paintBucketsPrice + wallpaperRollsPrice + glovePrice + brushPrice;
    let deliveryPrice = sum / 15;

    console.log(`This delivery will cost ${deliveryPrice.toFixed(2)} lv.`);
}

roomPainting (["10", "8", "2.2", "5"])