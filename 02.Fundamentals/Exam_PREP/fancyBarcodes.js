function fancyBarcodes(input) {
    let n = Number(input.shift());
    let pattern = /(@#{1,})(?<word>[A-Z][A-Za-z0-9]{4,}[A-Z])(@#{1,})/gm
    let digits = new RegExp('\\d', 'g') 

    for (let i = 0; i < n; i++) {
        let currentWord;
        let barcode = input[i];
        let isValid = false;

        while ((currentWord = pattern.exec(barcode)) !== null) {
            let group = '';
            let currentDigit;
            isValid = true;
            
            if (!digits.test(currentWord[2])) {
                group = '00';
            }
            //console.log(digits.test(input[i]));
            while ((currentDigit = digits.exec(currentWord[0])) !== null) {
                group += currentDigit[0];
            }

            console.log(`Product group: ${group}`);
            
        }
        if(!isValid) {
            console.log('Invalid barcode');
        }
        
    }
}

fancyBarcodes(["3",
"@#FreshFisH@#",
"@###Brea0D@###",
"@##Che4s6E@##"]);