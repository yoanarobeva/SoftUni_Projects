function palindromeIntegers(arr) {
    for (let i = 0; i < arr.length; i++) {
        let currentNum = String(arr[i]);
        let reversed = String(arr[i]).split('').reverse().join('');

        if (currentNum === reversed) {
            console.log("true");
        } else {
            console.log("false")
        }
    }
}

palindromeIntegers([123,323,421,121])