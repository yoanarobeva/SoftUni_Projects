function travelTime(input) {
    let travelList = {};

    for (let el of input) {
        let currentDestination = el.split(" > ");
        let country = currentDestination.shift();
        let city = currentDestination.shift();
        let cost = Number(currentDestination.shift());

        if (!travelList.hasOwnProperty(country)) {
            travelList[country] = {};
        }

        if (!travelList[country].hasOwnProperty(city)) {
            travelList[country][city] = cost;
        } else {
            if (travelList[country][city] > cost) {
                travelList[country][city] = cost;
            }
        }
    }

    let sorted = Object.keys(travelList).sort((a,b) => a.localeCompare(b));

    sorted.forEach(el => {
        let townTravelArr = [];
        let sortedCosts = Object.entries(travelList[el]).sort(([keyA, costA],[keyB, costB]) => costA - costB);
        sortedCosts.forEach(el => {
            townTravelArr.push(`${el[0]} -> ${el[1]}`);
        })
        console.log(`${el} -> ${townTravelArr.join(' ')}`);
    })
}

travelTime([
    "Bulgaria > Sofia > 500",
    "Bulgaria > Sopot > 800",
    "France > Paris > 2000",
    "Albania > Tirana > 1000",
    "Bulgaria > Sofia > 200"
])