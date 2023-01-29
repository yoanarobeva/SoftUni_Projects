function inventory(input) {
    let collectArr = input.shift().split(", ");

    for(let el of input) {

        if (el === 'Craft!') {
            break;
        }
        let commandArr = el.split(" - ");
        let command = commandArr.shift();
        let item = commandArr[0];

        switch (command) {
            case 'Collect': 
                if(!collectArr.includes(item)) {
                    collectArr.push(item);
                }
            break;
            case 'Drop': 
                if(collectArr.includes(item)) {
                    let index = collectArr.indexOf(item);
                    collectArr.splice(index, 1);
                }
            break;
            case 'Combine Items': 
                let itemArr = item.split(":");
                let oldItem = itemArr[0];
                let newItem = itemArr[1];

                if(collectArr.includes(oldItem)) {
                    let indexOld = collectArr.indexOf(oldItem);
                    collectArr.splice(indexOld + 1, 0, newItem);
                }
            break;
            case 'Renew': 
                if (collectArr.includes(item)) {
                    let indexRe = collectArr.indexOf(item);
                    let temp = collectArr[indexRe];
                    collectArr.splice(indexRe, 1);
                    collectArr.push(temp);
                }
            break;
        }
    }
    console.log(collectArr.join(", "));
}

inventory([
    'Iron, Sword',
    'Drop - Bronze',
    'Combine Items - Sword:Bow',
    'Renew - Iron',
    'Craft!'
  ]
  )
  