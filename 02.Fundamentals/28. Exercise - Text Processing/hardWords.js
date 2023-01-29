function hardWords(input) {
    let string = input[0];
    let arr = input[1];
    let pattern = /_+/gm;
    let valid;
    
    while ((valid = pattern.exec(string)) !== null) {
        let currentBlankSpace = valid[0];

        for (let el of arr) {
            if (el.length === currentBlankSpace.length) {
                string = string.replace(currentBlankSpace, el);
            }
        }
    }

    console.log(string);
}

hardWords(['Hi, grandma! I\'m so ____ to write to you. ______ the winter vacation, so _______ things happened. My dad bought me a sled. Mom started a new job as a __________. My brother\'s ankle is ________, and now it bothers me even more. Every night Mom cooks ___ on your recipe because it is the most delicious. I hope this year Santa will _____ me a robot.',
['pie', 'bring', 'glad', 'During', 'amazing', 'pharmacist', 'sprained']])