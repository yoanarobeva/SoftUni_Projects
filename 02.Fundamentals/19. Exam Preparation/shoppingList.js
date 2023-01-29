function shoppingList(input) {
    let initialArr = input.shift().split("!");

    for(let el of input) {

        if (el === "Go Shopping!") {
            break;
        }

        let commandArr = el.split(" ");
        let command = commandArr.shift();

        switch (command) {
            case 'Urgent':
                if (!initialArr.includes(commandArr[0])) {
                    initialArr.unshift(commandArr[0]);
                }
            break;
            case 'Unnecessary': 
                if (initialArr.includes(commandArr[0])) {
                    let index = initialArr.indexOf(commandArr[0]);
                    initialArr.splice(index, 1);
                }
            break;
            case 'Correct': 
                let oldItem = commandArr[0];
                let newItem = commandArr[1];

                if (initialArr.includes(oldItem)) {
                    let indexCorr = initialArr.indexOf(oldItem);
                    initialArr.splice(indexCorr, 1, newItem);
                }
            break;
            case 'Rearrange': 
                if (initialArr.includes(commandArr[0])) {
                    let indexRearr = initialArr.indexOf(commandArr[0]);
                    let temp = initialArr.splice(indexRearr, 1);
                    initialArr.push(temp[0]);
                }
            break;
        }
    }
    console.log(initialArr.join(", "));
}

shoppingList(["Milk!Pepper!Salt!Water!Banana",
"Unnecessary Banana",
"Correct Pepper Onion",
"Rearrange Milk",
"Correct Tomatoes Potatoes",
"Go Shopping!"])
