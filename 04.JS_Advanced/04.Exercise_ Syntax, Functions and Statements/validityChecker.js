function validityChecker(x1, y1, x2, y2) {
    let distanceToFirstPoint = Math.sqrt(x1 ** 2 + y1 ** 2);
    let distanceToSecondPoint = Math.sqrt(y2 ** 2 + x2 ** 2);
    let distanceBetweenPoints = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);

    if (Number.isInteger(distanceToFirstPoint)) {
        console.log(`{${x1}, ${y1}} to {0, 0} is valid`);
    } else {
        console.log(`{${x1}, ${y1}} to {0, 0} is invalid`);
    }

    if (Number.isInteger(distanceToSecondPoint)) {
        console.log(`{${x2}, ${y2}} to {0, 0} is valid`);
    } else {
        console.log(`{${x2}, ${y2}} to {0, 0} is invalid`);
    }

    if (Number.isInteger(distanceBetweenPoints)) {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`);
    } else {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);
    }
}

validityChecker(3, 0, 0, 4);
console.log('______');
validityChecker(2, 1, 1, 1)