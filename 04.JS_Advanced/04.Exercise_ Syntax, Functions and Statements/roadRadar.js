function roadRadar(speed, zone) {
    isHigher = false;
    let diff = 0;
    let speedLimit = 0;
    switch (zone) {
        case 'motorway': 
            if (speed > 130) {
                isHigher = true;
            }
            diff = Math.abs(speed - 130);
            speedLimit = 130;
        break;
        case 'interstate': 
            if (speed > 90) {
                isHigher = true;
            }
            diff = Math.abs(speed - 90);
            speedLimit = 90;

        break;
        case 'city': 
            if (speed > 50) {
                isHigher = true;
            }
            diff = Math.abs(speed - 50);
            speedLimit = 50;

        break;
        case 'residential': 
            if (speed > 20) {
                isHigher = true;
            }
            diff = Math.abs(speed - 20);
            speedLimit = 20;

        break;
    }
    let status = '';

    if (isHigher) {
        if (diff <= 20) {
            status = 'speeding';
        } else if (diff <= 40) {
            status = 'excessive speeding';
        } else {
            status = 'reckless driving'
        }

        console.log(`The speed is ${diff} km/h faster than the allowed speed of ${speedLimit} - ${status}`);
    } else {
        console.log(`Driving ${speed} km/h in a ${speedLimit} zone`);
    }

}

roadRadar(40, 'city');
console.log('_____');
roadRadar(21, 'residential');
console.log('_____');
roadRadar(120, 'interstate');
console.log('_____');
roadRadar(200, 'motorway');