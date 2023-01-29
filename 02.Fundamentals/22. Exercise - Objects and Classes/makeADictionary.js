function makeADictionary(arr) {

    let dictionary = {};

    for (let el of arr) {
        el = JSON.parse(el);
        dictionary = Object.assign(dictionary, el);
    }

    let sorted = Object.keys(dictionary);
    sorted.sort((a, b) => a.localeCompare(b));

    sorted.forEach(i => {
        console.log(`Term: ${i} => Definition: ${dictionary[i]}`);
    })
}

makeADictionary([
    '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
    '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
    '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
    '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
    '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}'
    ])