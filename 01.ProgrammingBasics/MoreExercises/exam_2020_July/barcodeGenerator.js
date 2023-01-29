function barcodeGenerator (input) {
    let start = input[0];
    let end = input[1];

    let barcode = "";
    
    for (let x1 = Number(start.charAt(0)); x1 <= Number(end.charAt(0)); x1++) {
        for (let x2 = Number(start.charAt(1)); x2 <= Number(end.charAt(1)); x2++) {
            for (let x3 = Number(start.charAt(2)); x3 <= Number(end.charAt(2)); x3++) {
                for (let x4 = Number(start.charAt(3)); x4 <= Number(end.charAt(3)); x4++) {
                    if (x1 % 2 !== 0 && x2 % 2 !== 0 && x3 % 2 !== 0 && x4 % 2 !== 0) {

                        barcode = barcode + x1 + x2 + x3 + x4 + " ";
                    }
                }
            }
        }
    }
    console.log(barcode);
}

barcodeGenerator(["2345",
"6789"])
