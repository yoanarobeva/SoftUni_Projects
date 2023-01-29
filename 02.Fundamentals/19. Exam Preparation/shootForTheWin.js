function shootForTheWin(input) {
    let targetsArr = input.shift().split(" ").map(Number);
    let count = 0;

    for (let el of input) {
        if (el === 'End') {
            break;
        }

        let currentIndex = Number(el);
        let shottedTargetValue = 0;

        if (currentIndex < targetsArr.length && currentIndex >= 0) {
            if (targetsArr[currentIndex] !== -1) {
                shottedTargetValue = targetsArr[currentIndex];
                targetsArr.splice(currentIndex, 1, -1);
                count++;
            }

            for (let n = 0; n < targetsArr.length; n++) {
                let num = targetsArr[n];
                if (num !== -1) {
                    if (num > shottedTargetValue) {
                        num -= shottedTargetValue;
                    } else {
                        num = num + shottedTargetValue;
                    }
                    targetsArr[n] = num;
                }
            }
        }
    }

    console.log(`Shot targets: ${count} -> ${targetsArr.join(" ")}`);
}

shootForTheWin(["30 30 12 60 54 66",
"5",
"2",
"4",
"0",
"End"])

