function sortAnArrayBy2Criteria(input) {
    let sortedFirs = input.sort((a, b) => a.localeCompare(b));
    let sortedSecond = input.sort((a, b) => a.length - b.length);

    console.log(sortedSecond.join('\n'));
}

sortAnArrayBy2Criteria(['alpha', 'beta', 'gamma']);
console.log('_______');
sortAnArrayBy2Criteria(['Isacc', 'Theodor', 'Jack', 'Harrison', 'George']);
console.log('_______');
sortAnArrayBy2Criteria(['test', 'Deny', 'omen', 'Default']);
