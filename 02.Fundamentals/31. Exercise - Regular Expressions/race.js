function race(input) {
    let racersArr = input.shift().split(", ");
    let patternName = /[A-Za-z]/gm;
    let patternDist = /\d/gm;
    let raceInfo = {};

    racersArr.forEach(el => {
        raceInfo[el] = 0;
    })

    for (let el of input) {
        if (el === 'end of race') {
            break;
        }
        
        let currentName = el.match(patternName).join("");

        if (raceInfo.hasOwnProperty(currentName)) {
            let currentDistanceArr = el.match(patternDist);
            let currentDistance = 0;
            for (let x of currentDistanceArr) {
                currentDistance += Number(x);
            }
            
            let distance = raceInfo[currentName];
            raceInfo[currentName] = distance + currentDistance;
        }
    }

    let sortedArr = Object.entries(raceInfo).sort(([nameA, valueA], [nameB, valueB]) => valueB - valueA).slice(0,3);
    //console.table(sortedArr)
    console.log(`1st place: ${sortedArr[0][0]}`);
    console.log(`2nd place: ${sortedArr[1][0]}`);
    console.log(`3rd place: ${sortedArr[2][0]}`);
}

race(['George, Peter, Bill, Tom',
'G4e@55or%6g6!68e!!@ ',
'R1@!3a$y4456@',
'B5@i@#123ll',
'G@e54o$r6ge#',
'7P%et^#e5346r',
'T$o553m&6',
'end of race'])