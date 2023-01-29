function specialNumbers (input) {
    let n = Number(input[0]);

    let specialNumbers = "";

    for (let i = 1111; i <= 9999; i++) {
        let currentSpecialNumber = `${i}`;
        let counter = 0;
        for(j = 0; j < 4; j++){
            let currentDigit = Number(currentSpecialNumber.charAt(j))
            
            if (n % currentDigit === 0){
                counter++;
            } 

            if (counter === 4) {
                specialNumbers += currentSpecialNumber + " ";
            }
        }
    }
    console.log(specialNumbers);
}

specialNumbers(["16"])