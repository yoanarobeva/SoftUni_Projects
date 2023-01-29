function bonusScore (input) {
    let num = Number (input[0]);
    let bonus = 0;
    let addBonus = 0;

    if (num <= 100) {
        bonus = 5
    } else if (num > 1000) {
        bonus = num * 0.1;
    } else {
        bonus = num * 0.2;
    }
    
    if (num % 2 === 0) {
        addBonus = 1;
    } else if (num % 10 === 5) {
        addBonus = 2;
    }

    console.log(bonus + addBonus);
    console.log(num + bonus + addBonus);
        
}

bonusScore(["20"]);