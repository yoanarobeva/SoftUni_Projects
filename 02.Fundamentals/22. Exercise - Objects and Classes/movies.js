function movies(arr) {
    let movieArr = [];

    for (let el of arr) {
        if (el.includes('addMovie')) {
            el = el.replace("addMovie ", "");
            movieArr.push({name:el});
        } else if (el.includes('directedBy')) {
            let [movie, director] = el.split(" directedBy ");
            movieArr.forEach(i => {
                if (i.name === movie) {
                    i.director = director;
                }
            })
            
        } else if (el.includes('onDate')) {
            let [movie, date] = el.split(" onDate ");
            movieArr.forEach(i => {
                if (i.name === movie) {
                    i.date = date;
                }
            })
        }
    }
    movieArr.forEach(i => {
        if (i.name && i.director && i.date) {
            console.log(JSON.stringify(i));
        }
    })
}

movies([
    'addMovie The Avengers',
    'addMovie Superman',
    'The Avengers directedBy Anthony Russo',
    'The Avengers onDate 30.07.2010',
    'Captain America onDate 30.07.2010',
    'Captain America directedBy Joe Russo'
    ]
    )