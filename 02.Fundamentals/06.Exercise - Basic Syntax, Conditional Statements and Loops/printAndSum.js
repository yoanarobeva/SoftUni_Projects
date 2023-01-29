function printAndSum (start, end) {
    let sum = 0;
    let row = "";

    for (let i = start; i <= end; i++) {
        sum += i;
        row += i + " "
    }
    console.log(row);
    console.log(`Sum: ${sum}`);
}

printAndSum (5, 10);
printAndSum (0, 26);
printAndSum (50, 60);