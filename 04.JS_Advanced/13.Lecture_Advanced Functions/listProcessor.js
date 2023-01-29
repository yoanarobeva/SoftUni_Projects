function listProcessor(input) {
    let collection = [];
   
    let obj = {
        add: (string) => collection.push(string),
        remove: (string) => {
            while (collection.includes(string)) {
                let index = collection.indexOf(string);
                collection.splice(index, 1);
            }
            return collection;
        },
        print: () => console.log(collection.join(","))
    }

    input.forEach(x => {
        let [command, str] = x.split(' ');
        return obj[command](str);
    })
}

listProcessor(['add pesho', 'add george', 'add peter', 'remove peter','print'])