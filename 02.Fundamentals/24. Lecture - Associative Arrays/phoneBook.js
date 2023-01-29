function phoneBook(input) {
    let phones = {};

    for (let line of input) {
        let [name, phoneNumber] = line.split(" ");
        phones[name] = phoneNumber; 
    }

    for (let [name, number] of Object.entries(phones)) {
        console.log(`${name} -> ${number}`);
    }
}

phoneBook(['Tim 0834212554',
'Peter 0877547887',
'Bill 0896543112',
'Tim 0876566344'])