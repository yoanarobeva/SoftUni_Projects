function heartDelivery(input) {
    let arr = input.shift().split("@").map(Number);
    let path = 0;

    for (let el of input) {
        if (el === 'Love!') {
            break;
        }

        let commandArr = el.split(' ');
        let jump = Number(commandArr[1]);
        path += jump;
    
        if (path > arr.length - 1) {
            path = 0;
        }

        if (arr[path] === 0) {
            console.log(`Place ${path} already had Valentine's day.`);
            continue;
        } else {
            let num = arr[path] - 2;
            arr[path] = num;
        }

        if (arr[path] === 0) {
            console.log(`Place ${path} has Valentine's day.`)
        } 
    }
    console.log(`Cupid's last position was ${path}.`);
    let isThereAnythingExcept0 = false;
    let failCount = 0;
    for (let el2 of arr) {
        if (el2 !== 0) {
            isThereAnythingExcept0 = true;
            failCount++
        }
    }
    if (!isThereAnythingExcept0) {
        console.log("Mission was successful.");
    } else {
        console.log(`Cupid has failed ${failCount} places.`);
    }
}

heartDelivery(["2@4@2",
"Jump 2",
"Jump 2",
"Jump 8",
"Jump 3",
"Jump 1",
"Love!"])

