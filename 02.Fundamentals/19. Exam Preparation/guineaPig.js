function guineaPig(input) {
    let foodQuantity = Number(input[0])*1000;
    let hay = Number(input[1])*1000;
    let cover = Number(input[2])*1000;

    let weight = Number(input[3])*1000;
    let flag = false;

    for (let i = 1; i <= 30; i++) {
        foodQuantity -= 300;

        if (i % 2 === 0) {
            hay = hay - 0.05 * foodQuantity;
        }

        if (i % 3 === 0) {
            cover = cover - 1/3 * weight;
        }

        if (foodQuantity <= 0 || hay <= 0 || cover <= 0) {
            console.log("Merry must go to the pet store!");
            flag = true;
            break;
        }
    }
    let foodGr = foodQuantity / 1000;
    let hayGR = hay / 1000;
    let coverGr = cover / 1000;

    if (!flag) {
        console.log(`Everything is fine! Puppy is happy! Food: ${foodGr.toFixed(2)}, Hay: ${hayGR.toFixed(2)}, Cover: ${coverGr.toFixed(2)}.`)
    }

}

guineaPig(["10", 
"5", 
"5.2", 
"1"]);
