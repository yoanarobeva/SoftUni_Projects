function fishland (input) {
    let skumriaPriceKG = Number(input[0]);
    let cacaPriceKG = Number(input[1]);
    let palamudKG = Number(input[2]);
    let safridKG = Number(input[3]);
    let midiKG = Number(input[4]);

    let palamudPriceKG = skumriaPriceKG * 1.6;
    let safridPriceKG = cacaPriceKG * 1.8;

    let midi = midiKG * 7.50;
    let palamud = palamudKG * palamudPriceKG;
    let safrid = safridKG * safridPriceKG;

    let sum = midi + palamud + safrid;

    console.log(sum.toFixed(2));
}