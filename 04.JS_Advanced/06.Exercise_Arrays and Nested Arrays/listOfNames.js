function listOfNames(input) {
    input.sort((a, b) => a.localeCompare(b))
    let counter = 1;
    input.forEach(x => {
        console.log(`${counter}.${x}`);
        counter++;
    })
}

listOfNames(["John", "Bob", "Christina", "Ema"]);