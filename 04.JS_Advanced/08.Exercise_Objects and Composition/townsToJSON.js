function townsToJSON(input) {
    let arr = [];
    input.shift();

    for (let el of input) {
        let splitted = el.split('|')
        let town = splitted[1].trim();
        let latitude = Number(Number(splitted[2].trim()).toFixed(2));
        let longitude = Number(Number(splitted[3].trim()).toFixed(2));
        
        let obj = {
            Town: town, 
            Latitude: latitude, 
            Longitude: longitude
        };

        arr.push(obj);
    }

    console.log(JSON.stringify(arr));
}

townsToJSON(['| Town | Latitude | Longitude |',
'| Sofia | 42.696552 | 23.32601 |',
'| Beijing | 39.913818 | 116.363625 |']);

console.log('___________');

townsToJSON(['| Town | Latitude | Longitude |',
'| Veliko Turnovo | 43.0757 | 25.6172 |',
'| Monatevideo | 34.50 | 56.11 |']);