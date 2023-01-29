function towns(arr) {

    arr.forEach(i => {
        let currentTown = {}
        let [town, latitude, longitude] = i.split(" | ");

        currentTown.town = town;
        currentTown.latitude = Number(latitude).toFixed(2);
        currentTown.longitude = Number(longitude).toFixed(2);
       
       console.log(currentTown);
    })
}

towns(['Sofia | 42.696552 | 23.32601',
    'Beijing | 39.913818 | 116.363625']);