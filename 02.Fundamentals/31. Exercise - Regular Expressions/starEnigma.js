function starEnigma(input) {
    let n = Number(input.shift());
    let pattern = /@(?<plant>[A-Za-z]+)[^@\-!:>]*:(?<population>[0-9]+)[^@\-!:>]*!(?<attackType>[AD])![^@\-!:>]*->(?<soldierCount>[0-9]+)/gm;
    let attackedPlanets = [];
    let destroyedPlanets = [];

    for (let i = 0; i < n; i++) {
        let arr = input[i].toLowerCase().split('');
        let starCounter = 0;

        for (let letter of arr) {
            if (letter === 's' || letter === 't' || letter === 'a' || letter === 'r') {
                starCounter++;
            }
        }

        let codeArr = input[i].split('');
        let result = [];

        codeArr.forEach(el => {
            let newElCode = el.charCodeAt() - starCounter
            result.push(String.fromCharCode(newElCode));
        })
        
        result = result.join('');

        let valid;

        while ((valid = pattern.exec(result)) !== null) {
            if (valid.groups.attackType === 'A') {
                attackedPlanets.push(valid.groups.plant);
            } else if (valid.groups.attackType === 'D') {
                destroyedPlanets.push(valid.groups.plant);
            }

        }
    }

    attackedPlanets.sort((a,b) => a.localeCompare(b));
    destroyedPlanets.sort((a,b) => a.localeCompare(b))
    console.log(`Attacked planets: ${attackedPlanets.length}`);
    attackedPlanets.forEach(el => {
        console.log(`-> ${el}`);
    });
    console.log(`Destroyed planets: ${destroyedPlanets.length}`);
    destroyedPlanets.forEach(el => {
        console.log(`-> ${el}`);
    })   
}

starEnigma(['2',
'STCDoghudd4=63333$D$0A53333',
'EHfsytsnhf?8555&I&2C9555SR'])