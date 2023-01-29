function addressBook(input) {
    let bookObj = {};

    for (let line of input) {
        let [name, address] = line.split(":");
        bookObj[name] = address;
    }

    let sortedNames = Object.keys(bookObj).sort((a,b) => a.localeCompare(b));

    for (let name of sortedNames) {
        console.log(`${name} -> ${bookObj[name]}`);
    }
}

addressBook(['Tim:Doe Crossing',
'Bill:Nelson Place',
'Peter:Carlyle Ave',
'Bill:Ornery Rd'])