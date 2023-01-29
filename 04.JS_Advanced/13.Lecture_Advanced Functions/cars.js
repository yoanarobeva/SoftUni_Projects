function cars(input) {
    let carsObj = {};

    let commandObj = {
        create: (name, inherit, parentName) => {
            carsObj[name] = {};
            if (inherit === 'inherit') {
                Object.setPrototypeOf(carsObj[name], carsObj[parentName]);
            }
        },
        set: (name, key, value) => {
            carsObj[name][key] = value;
        },
        print: (name) => {
            let arr = [];
            for (const key in carsObj[name]) {
                arr.push(`${key}:${carsObj[name][key]}`);
            }
            console.log(arr.join(','));
        }
    }
    
    for (let el of input) {
        let commandArr = el.split(" ");
        let command = commandArr.shift();
        let [n, k, v] = commandArr;

        commandObj[command](n, k, v);
    }
}

cars(['create c1',
'create c2 inherit c1',
'set c1 color red',
'set c2 model new',
'print c1',
'print c2']);