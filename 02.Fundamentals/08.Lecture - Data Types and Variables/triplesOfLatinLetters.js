function triplesOfLatinLetters (num) {
    

    for (let i = 0; i < num; i++) {
        let firstLetter = "";
        let secondLetter = "";
        let thirdLetter = "";

        for (let j = 0; j < num; j++) {
            for (let k = 0; k < num; k++) {
                firstLetter = String.fromCharCode(97+i);
                secondLetter = String.fromCharCode(97+j);
                thirdLetter = String.fromCharCode(97+k);
                
                console.log(firstLetter + secondLetter + thirdLetter);
            }
        }
        
    }
}

triplesOfLatinLetters(2);