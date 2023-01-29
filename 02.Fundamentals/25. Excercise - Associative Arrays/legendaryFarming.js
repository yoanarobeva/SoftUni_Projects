function legendaryFarming(input) {
    let items = new Map();
    items.set('shards', 0);
    items.set('fragments', 0);
    items.set('motes', 0);

    let junk = new Map();
    input = input.split(' ');

    for (let i = 1; i < input.length; i+=2) {
        let currentItem = input[i].toLowerCase();
        let quantity = Number(input[i-1]);

        if (currentItem === 'shards' || currentItem === 'fragments' || currentItem === 'motes') {
            items.set(currentItem, items.get(currentItem) + quantity);
            
        } else {
            if (!junk.has(currentItem)) {
                junk.set(currentItem, quantity);
            } else {
                junk.set(currentItem, junk.get(currentItem) + quantity);
            }
        }

        if (items.get(currentItem) >= 250) {
            switch (currentItem) {
                case 'shards': console.log('Shadowmourne obtained!'); break;
                case 'fragments': console.log('Valanyr obtained!'); break;
                case 'motes': console.log('Dragonwrath obtained!'); break;
            }
            items.set(currentItem, items.get(currentItem) - 250);
            break;
        }
    }
    let sortedItems = Array.from(items.entries()).sort(([keyA, valueA], [keyB, valueB]) => {
        if (valueA !== valueB) {
            return valueB - valueA;
        } else {
            return keyA.localeCompare(keyB);
        }
    })
    sortedItems.forEach(el => {
        console.log(`${el[0]}: ${el[1]}`);
    })

    let sortedJunk = Array.from(junk.entries()).sort(([keyA, valueA], [keyB, valueB]) => keyA.localeCompare(keyB));
    sortedJunk.forEach(el => console.log(`${el[0]}: ${el[1]}`));
}

legendaryFarming('123 silver 6 shards 8 shards 5 motes 9 fangs 75 motes 103 MOTES 8 Shards 86 Motes 7 stones 19 silver')