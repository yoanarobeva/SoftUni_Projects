function pirates(input) {
    let targetedCities = new Map();
    let commandsStartIndex;
    
    for (let line of input) {
        if (line === 'Sail') {
            commandsStartIndex = input.indexOf(line);
            break;
        }
        let citiesArr = line.split("||");
        let city = citiesArr.shift();
        let population = Number(citiesArr.shift());
        let gold = Number(citiesArr.shift());

        if (!targetedCities.has(city)) {
            targetedCities.set(city, {population, gold});
        } else {
            let newPopulation = targetedCities.get(city).population + population;
            let newGold = targetedCities.get(city).gold + gold;
            targetedCities.get(city).population = newPopulation;
            targetedCities.get(city).gold = newGold
        }
    }
    //console.table(targetedCities);
    //console.log(commandsStartIndex)

    for (let i = commandsStartIndex + 1; i < input.length; i++) {
        let commandArr = input[i].split('=>');
        let command = commandArr.shift();
        let currentCity = commandArr.shift();

        if (command === 'End') {
            break;
            
        } else if (command === 'Plunder') {
            let people = Number(commandArr.shift());
            let gold = Number(commandArr.shift());

            console.log(`${currentCity} plundered! ${gold} gold stolen, ${people} citizens killed.`);

            targetedCities.get(currentCity).population -= people;
            targetedCities.get(currentCity).gold -= gold;

            if (targetedCities.get(currentCity).population <= 0 || targetedCities.get(currentCity).gold <= 0) {
                targetedCities.delete(currentCity);
                console.log(`${currentCity} has been wiped off the map!`);
            }
        } else if (command === 'Prosper') {
            let goldProsper = Number(commandArr.shift());
            if (goldProsper >= 0) {
                targetedCities.get(currentCity).gold += goldProsper;
                console.log(`${goldProsper} gold added to the city treasury. ${currentCity} now has ${targetedCities.get(currentCity).gold} gold.`);
            } else {
                console.log("Gold added cannot be a negative number!");
            }
        }
    }
    if (targetedCities.size > 0) {
        console.log(`Ahoy, Captain! There are ${targetedCities.size} wealthy settlements to go to:`);
        let citiesArr = Array.from(targetedCities.keys());
       
        for (let city of citiesArr) {
            console.log(`${city} -> Population: ${targetedCities.get(city).population} citizens, Gold: ${targetedCities.get(city).gold} kg`);
        }
    } else {
        console.log(`Ahoy, Captain! All targets have been plundered and destroyed!`);
    }
}

pirates(["Tortuga||345000||1250",
"Santo Domingo||240000||630",
"Havana||410000||1100",
"Sail",
"Plunder=>Tortuga=>75000=>380",
"Prosper=>Santo Domingo=>180",
"End"])