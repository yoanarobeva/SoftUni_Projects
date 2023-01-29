function employees(arr) {
    
    let persons = []

    arr.forEach((person, number) => {
        let employeeObj = {};
        employeeObj.person = person;
        employeeObj.number = person.length;
        persons.push(employeeObj);
    })
    persons.forEach(i => console.log(`Name: ${i.person} -- Personal Number: ${i.number}`));
}

employees([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
    ])