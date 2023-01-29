function partyTime(input) {
    let guestsArr = [];
    let vipsArr = [];
    let isParty = false;

    for (let el of input) {

        if (el === 'PARTY') {
            isParty = true;
            continue;
        }

        if (!isParty) {
            let firstSymbol = el[0];
            
            if (isNaN(firstSymbol)) {
                guestsArr.push(el);
            } else {
                vipsArr.push(el);
            }
        } else {
            let firstSymbol = el[0];
            
            if (isNaN(firstSymbol)) {
                let index = guestsArr.indexOf(el);
                guestsArr.splice(index, 1);
            } else {
                let index = vipsArr.indexOf(el);
                vipsArr.splice(index, 1);
            }
        }
    }

    console.log(vipsArr.length + guestsArr.length);
    console.log(vipsArr.join("\n"));
    console.log(guestsArr.join("\n"));
}

partyTime(['m8rfQBvl',
'fc1oZCE0',
'UgffRkOn',
'7ugX7bm0',
'9CQBGUeJ',
'2FQZT3uC',
'dziNz78I',
'mdSGyQCJ',
'LjcVpmDL',
'fPXNHpm1',
'HTTbwRmM',
'B5yTkMQi',
'8N0FThqG',
'xys2FYzn',
'MDzcM9ZK',
'PARTY',
'2FQZT3uC',
'dziNz78I',
'mdSGyQCJ',
'LjcVpmDL',
'fPXNHpm1',
'HTTbwRmM',
'B5yTkMQi',
'8N0FThqG',
'm8rfQBvl',
'fc1oZCE0',
'UgffRkOn',
'7ugX7bm0',
'9CQBGUeJ'
]

)