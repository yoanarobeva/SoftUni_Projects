function furniture(input) {
    let allText = input.join(" ");
    let pattern = />>(?<object>[A-z]+)<<(?<price>\d+\.\d+|\d+)!(?<quantity>\d+)/g;
    let moneySpent = 0;
    let objectsArr = [];
    let validObj;

    while ((validObj = pattern.exec(allText)) !== null) {
        let [name, price, quantity] = Object.values(validObj.groups);
        objectsArr.push(name);
        moneySpent += (Number(price) * Number(quantity));
    }

    console.log('Bought furniture:');
    if (objectsArr.length > 0) {
        console.log(objectsArr.join('\n'));
    }
    console.log(`Total money spend: ${moneySpent.toFixed(2)}`);

}

furniture(['>Invalid<<!4',
'>Invalid<<!2',
'>Invalid<<!5',
'Purchase']
)