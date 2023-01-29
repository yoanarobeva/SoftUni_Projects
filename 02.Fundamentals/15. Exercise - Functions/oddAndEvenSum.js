function oddAndEvenSum(num) {
    let charArr = String(num).split("");
    let evenSum = 0;
    let oddSum = 0;
    
    for(let i = 0; i < charArr.length; i++) {
        let currentDigit = Number(charArr[i]);
        if (currentDigit % 2 === 0) {
            evenSum += currentDigit;
        } else {
            oddSum += currentDigit;
        }
    }
    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);
}

oddAndEvenSum(1000435)