function changeBureau (input) {
    let bitcointCount = Number(input[0]);
    let chinaCount = Number(input[1]);
    let comission = Number(input[2]);

    let bitcoinPrice = bitcointCount * 1168;
    let chinaPrice = chinaCount * 0.15 * 1.76;
    let sumBGN = bitcoinPrice + chinaPrice;
    let sumEuro = sumBGN / 1.95;

    let sum = sumEuro - sumEuro * comission / 100;

    console.log(sum.toFixed(2));
}

changeBureau(["20", "5678", "2.4"])