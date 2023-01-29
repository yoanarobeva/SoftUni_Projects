function cookingMasterclass(input) {
    let budget = Number(input[0]);
    let studentsCount = Number(input[1]);
    let flourPrice = Number(input[2]);
    let eggPrice = Number(input[3]);
    let apronPrice = Number(input[4]);

    let freeFlour = Math.floor(studentsCount / 5);
    let allFlour = (studentsCount - freeFlour) * flourPrice;
    let allEgg = eggPrice * 10 * studentsCount;
    let additionalAprons = studentsCount * 0.2;
    if (additionalAprons % 1 != 0) {
        additionalAprons = Math.trunc(additionalAprons) + 1;
    }
    let allApron = (studentsCount + additionalAprons) * apronPrice;

    let sumTotal = allFlour + allEgg + allApron;
    let diff = sumTotal - budget;

    if(sumTotal <= budget) {
        console.log(`Items purchased for ${sumTotal.toFixed(2)}$.`);
    } else {
        console.log(`${diff.toFixed(2)}$ more needed.`);
    }
}

cookingMasterclass([100,
    25,
    4.0,
    1.0,
    6.0])
    
    