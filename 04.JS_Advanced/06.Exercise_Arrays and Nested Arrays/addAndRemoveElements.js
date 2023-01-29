function addAndRemoveElements(input) {
    let result = [];
    let number = 1;

    for (let command of input) { 
        if (command === 'add') {
            result.push(number);
        } else if (command === 'remove') {
            result.pop();
        }
        number++;
    }
    if (result.length === 0) {
        console.log('Empty');
    } else {
        console.log(result.join('\n'));
    } 
}

addAndRemoveElements(['remove', 
'remove', 
'remove']
)