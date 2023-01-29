function adAstra(input) {
    let pattern = /([\|#])(?<name>[A-Za-z\s]+)\1(?<expire>\d{2}\/\d{2}\/\d{2})\1(?<cal>\d+)\1/gm;
    let valid;
    let productsArr = [];
    let allCal = 0;
    while ((valid = pattern.exec(input)) !== null) {
        productsArr.push(Object.values(valid.groups));
        allCal += Number(valid.groups.cal);
    }
    let days = Math.floor(allCal / 2000);
    console.log(`You have food to last you for: ${days} days!`);
    productsArr.forEach(el => {
        let [name, date, cal] = el;
        console.log(`Item: ${name}, Best before: ${date}, Nutrition: ${cal}`);
    })
}

adAstra([
    '#Bread#19/03/21#4000#|Invalid|03/03.20||Apples|08/10/20|200||Carrots|06/08/20|500||Not right|6.8.20|5|'
    ])