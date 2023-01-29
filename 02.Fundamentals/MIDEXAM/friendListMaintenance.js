function friendListMaintenance(input) {
    let friendsArr = input.shift().split(", ");
    let blacklistedCounter = 0;
    let lostNamesCounter = 0;

    for (let el of input) {
       
        let commandArr = el.split(" ");
        let command = commandArr.shift();
        
        if (command === 'Blacklist') {
            let name = commandArr[0];
            if (friendsArr.includes(name)) {
                let indexName = friendsArr.indexOf(name);
                friendsArr[indexName] = 'Blacklisted';
                console.log(`${name} was blacklisted.`)
                blacklistedCounter++;
            } else {
                console.log(`${name} was not found.`);
            }

        } else if (command === 'Error') {
            let indexErr = Number(commandArr[0]);
            let nameAtIndex = friendsArr[indexErr];
            if ((indexErr >= 0 && indexErr < friendsArr.length) &&
            (nameAtIndex != 'Blacklisted' && nameAtIndex != 'Lost') ) {
                friendsArr[indexErr] = 'Lost';
                console.log(`${nameAtIndex} was lost due to an error.`);
                lostNamesCounter++;
            }

        } else if (command === 'Change') {
            let indexChange = Number(commandArr[0]);
            let newName = commandArr[1];

            if (indexChange >= 0 && indexChange < friendsArr.length) {
                let temp = friendsArr[indexChange];
                friendsArr[indexChange] = newName;

                console.log(`${temp} changed his username to ${newName}.`);
            }
        } else {
            break;
        }
    }
    console.log(`Blacklisted names: ${blacklistedCounter}`);
    console.log(`Lost names: ${lostNamesCounter}`);
    console.log(friendsArr.join(" "));
}

friendListMaintenance(["Mike, John, Eddie, William",
"Blacklist Maya",
"Error 1",
"Change 4 George",
"Report"])


