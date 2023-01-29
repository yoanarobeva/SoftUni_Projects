function movingTarget(input) {
    let targetsArr = input.shift().split(" ").map(Number);

    for (let el of input) {
        let commandArr = el.split(" ");
        let command = commandArr.shift();
        commandArr = commandArr.map(Number);

        if (command === "End") {
            break;
        }

        switch (command) {
            case 'Shoot': 
                let indexShoot = commandArr[0];
                let powerShoot = commandArr[1];

                if (indexShoot >= 0 && indexShoot < targetsArr.length) {
                    let temp = targetsArr[indexShoot];

                    if (temp <= powerShoot) {
                        targetsArr.splice(indexShoot, 1);
                    } else {
                        temp = temp - powerShoot;
                        targetsArr[indexShoot] = temp;
                    }
                }
            break;
            case 'Add': 
                let indexAdd = commandArr[0];
                let valueAdd = commandArr[1];

                if (indexAdd >= 0 && indexAdd < targetsArr.length) {
                    targetsArr.splice(indexAdd, 0, valueAdd);
                } else {
                    console.log("Invalid placement!");
                }
            break;
            case 'Strike': 
                let indexStr = commandArr[0];
                let radiusStr = commandArr[1];

                if (indexStr - radiusStr >= 0 && indexStr + radiusStr < targetsArr.length) {
                    targetsArr.splice(indexStr - radiusStr, radiusStr + radiusStr + 1);
                } else {
                    
                    console.log("Strike missed!");
                }
            break;
        }
    }

    console.log(targetsArr.join("|"))
}

movingTarget(["52 74 23 44 96 110",
"Shoot 5 10",
"Shoot 1 80",
"Strike 2 1",
"Add 22 3",
"End"])

