function thePianist(input) {
    let n = Number(input.shift());
    let collection = [];

    for (let i = 0; i < n; i++) {
        let [piece, composer, key] = input[i-i].split("|");
        collection.push({piece, composer, key});
        input.shift();
    }
    //console.table(collection);

    for (let line of input) {
        let commandArr = line.split('|');
        let command = commandArr.shift();
        let piece = commandArr.shift();

        if (command === 'Stop') {
            break;
        } else if (command === 'Add') {
            let isTherePiece2 = false;

            for (let el of collection) {
               
                if (el.piece === piece) {
                    isTherePiece2 = true;
                } 
            }
            
            if (isTherePiece2) {
                console.log(`${piece} is already in the collection!`);
            } else {
                let composer = commandArr.shift();
                let key = commandArr.shift();
                let newPiece = {piece, composer, key};
                collection.push(newPiece);
                console.log(`${piece} by ${composer} in ${key} added to the collection!`);
            }

        } else if (command === 'Remove') {
            let isTherePiece = false;
            let index1;

            for (let i = 0; i < collection.length; i++) {

                if (collection[i].piece === piece) {
                    isTherePiece = true;
                    index1 = i;
                } 
            }

            if(isTherePiece) {
                collection.splice(index1, 1);
                console.log(`Successfully removed ${piece}!`);
            } else {
                console.log(`Invalid operation! ${piece} does not exist in the collection.`);
            }

        } else if (command === 'ChangeKey') {
            let newKey = commandArr.shift();
            let isTherePiece3 = false;
            let index;

            for (let i = 0; i < collection.length; i++) {
                
                if (collection[i].piece === piece) {
                    isTherePiece3 = true;
                    index = i;
                }
            }

            if (isTherePiece3) {
                collection[index].key = newKey;
                console.log(`Changed the key of ${piece} to ${newKey}!`);
            } else {
                console.log(`Invalid operation! ${piece} does not exist in the collection.`);
            }
        }
    }

    collection.forEach(el => {
        let [piece, composer, key] = Object.values(el);
        console.log(`${piece} -> Composer: ${composer}, Key: ${key}`);
    })
}

thePianist([
    '3',
    'Fur Elise|Beethoven|A Minor',
    'Moonlight Sonata|Beethoven|C# Minor',
    'Clair de Lune|Debussy|C# Minor',
    'Add|Sonata No.2|Chopin|B Minor',
    'Add|Hungarian Rhapsody No.2|Liszt|C# Minor',
    'Add|Fur Elise|Beethoven|C# Minor',
    'Remove|Clair de Lune',
    'ChangeKey|Moonlight Sonata|C# Major',
    'Stop'  
  ])