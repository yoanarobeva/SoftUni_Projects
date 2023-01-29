function houseParty(arr) {
    let guestList = [];

    for (let el of arr) {
        let commandArr = el.split(" ");
        let name = commandArr[0];

        if (commandArr.length === 3 && !guestList.includes(name)) {
            guestList.push(name);
        } else if (commandArr.length === 3 && guestList.includes(name)) {
            console.log(`${name} is already in the list!`);
        } else if (commandArr.length === 4 && guestList.includes(name)) {
            let index = guestList.indexOf(name);
            guestList.splice(index, 1);
        } else {
            console.log(`${name} is not in the list!`);
        }
    }

    console.log(guestList.join("\n"));
}

    


houseParty(['Allie is going!',
'George is going!',
'John is not going!',
'George is not going!']
);
console.log('__________');
houseParty(['Tom is going!',
'Annie is going!',
'Tom is going!',
'Garry is going!',
'Jerry is going!']
);