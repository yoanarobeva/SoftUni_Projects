function arenaTier(input) {
    let gladiators = {};

    for (let line of input) {
        if (line === 'Ave Cesar') {
            break;
        }

        let currentGladiator = line.split(' -> ');

        if (currentGladiator.length === 1) {
            let [firstGladiator, secondGladiator] = line.split(" vs ");

            if (gladiators[firstGladiator] && gladiators[secondGladiator]) {
                if (gladiators[firstGladiator] === gladiators[secondGladiator]) {
                    let firstGladiatorSkills = Object.values(gladiators[firstGladiator][technique]).forEach(el => {
                        firstGladiatorSkills += Number(el); 
                    })
                    let secondGladiatorSkill = Object.values(gladiators[secondGladiator][technique]).forEach(el => {
                        secondGladiatorSkill += Number(el);
                    })

                    if (firstGladiatorSkills > secondGladiatorSkill) {
                        gladiators[secondGladiator] = undefined;
                        console.log(`${firstGladiator} wins vs ${secondGladiator} /common technique: "${gladiators[firstGladiator]}". ${secondGladiator} is demoted.`);
                    } else if (secondGladiatorSkill > firstGladiatorSkills) {
                        gladiators[firstGladiator] = undefined;
                        console.log(`${secondGladiator} wins vs ${firstGladiator} /common technique: "${gladiators[secondGladiator]}". ${firstGladiator} is demoted.`);
                    }
                } else {
                    console.log(`${secondGladiator} and ${firstGladiator} don't have a common technique, so the duel isn't valid.`);
                }
            }
        }

        let gladiator = currentGladiator.shift();
        let technique = currentGladiator.shift();
        let skill = Number(currentGladiator.shift());

        if (!gladiators.hasOwnProperty(gladiator)) {
            gladiators[gladiator] = {};
        }

        if (!gladiators[gladiator].hasOwnProperty(technique)) {
            gladiators[gladiator][technique] = skill;
        } else {
            if (gladiators[gladiator][technique] < skill) {
                gladiators[gladiator][technique] = skill;
            }
        }  
    }

    console.table(gladiators)
}

arenaTier([
    'Peter -> Duck -> 400',
    'Julius -> Shield -> 150',
    'Gladius -> Heal -> 200',
    'Gladius -> Support -> 250',
    'Gladius -> Shield -> 250',
    'Peter vs Gladius',
    'Gladius vs Julius',
    'Gladius vs Maximilian',
    'Ave Cesar'
    ]);