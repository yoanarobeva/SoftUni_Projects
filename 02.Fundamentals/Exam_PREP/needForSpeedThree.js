function needForSpeedThree(input) {
    let cars = [];
    let n = Number(input.shift());

    for (let i = 0; i < n; i++) {
        let [car, mileage, fuel] = input[i].split('|');
        cars.push({car, mileage, fuel}); 
    }

    for (let j = n; j < input.length; j++) {
        let commandArr = input[j].split(" : ");
        let command = commandArr.shift();
        let currentCar = commandArr.shift();

        if (command === 'Stop') {
            break;

        } else if (command === 'Drive') {

            let dist = Number(commandArr.shift());
            let fuelDrive = Number(commandArr.shift());
            
            for (let i = 0; i < cars.length; i++) {
                if (cars[i].car === currentCar) {
                    if (cars[i].fuel < fuelDrive) {
                        console.log("Not enough fuel to make that ride");
                    } else {
                        cars[i].mileage = Number(cars[i].mileage) + dist;
                        cars[i].fuel = Number(cars[i].fuel) - fuelDrive;
                        console.log(`${currentCar} driven for ${dist} kilometers. ${fuelDrive} liters of fuel consumed.`);
                    }

                    if (cars[i].mileage >= 100000) {
                        cars.splice(i, 1);
                        console.log(`Time to sell the ${currentCar}!`);
                    }
                    break;
                }
            }

        } else if (command === 'Refuel') {
            let fuelRefuel = Number(commandArr.shift());

            for (let i = 0; i < cars.length; i++) {

                if (cars[i].car === currentCar) {

                    if (cars[i].fuel < 75) {

                        if ((Number(cars[i].fuel) + fuelRefuel) < 75) {
                            cars[i].fuel = Number(cars[i].fuel) + fuelRefuel;
                            console.log(`${currentCar} refueled with ${fuelRefuel} liters`);
                        } else {
                            let diff = 75 - Number(cars[i].fuel);
                            cars[i].fuel = Number(cars[i].fuel) + diff;
                            console.log(`${currentCar} refueled with ${diff} liters`);
                        }
                    }
                    break;
                }
            }

        } else if (command === 'Revert') {
            let kilometers = Number(commandArr.shift());

            for (let i = 0; i < cars.length; i++) {

                if (cars[i].car === currentCar) {
                    if ((Number(cars[i].mileage) - kilometers) > 10000) {
                        cars[i].mileage = Number(cars[i].mileage) - kilometers;
                        console.log(`${currentCar} mileage decreased by ${kilometers} kilometers`);
                    } else {
                        cars[i].mileage = 10000;
                    }
                    break;
                }
            }
        }
    }
    cars.forEach(el => {
        console.log(`${el.car} -> Mileage: ${el.mileage} kms, Fuel in the tank: ${el.fuel} lt.`);
    })
}

needForSpeedThree([
    '4',
    'Lamborghini Veneno|11111|74',
    'Bugatti Veyron|12345|67',
    'Koenigsegg CCXR|67890|12',
    'Aston Martin Valkryie|99900|50',
    'Drive : Koenigsegg CCXR : 382 : 82',
    'Drive : Aston Martin Valkryie : 99 : 23',
    'Drive : Aston Martin Valkryie : 2 : 1',
    'Refuel : Lamborghini Veneno : 40',
    'Revert : Bugatti Veyron : 2000',
    'Stop'
  ])