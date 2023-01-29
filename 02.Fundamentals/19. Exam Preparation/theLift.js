function theLift(input) {
    let waitingPeople = Number(input[0]);
    let liftState = input[1].split(" ").map(Number);
    let isThereMorePeople = true;
    
    for (let w = 0; w < liftState.length; w++) {
        let wagon = liftState[w];
        for (let i = 0; i < 4; i++){
            if (wagon < 4) {
                wagon++;
                waitingPeople--;
                if (waitingPeople === 0) {
                    isThereMorePeople = false;
                    liftState[w] = wagon;
                    break;
                }
            }
        }
        if (!isThereMorePeople) {
            break;
        }
        liftState[w] = wagon;
    }

    if (liftState.includes(0) || liftState.includes(1) || liftState.includes(2) || liftState.includes(3))  {
        console.log("The lift has empty spots!");
        console.log(liftState.join(" "));
    } else if (waitingPeople > 0) {
        console.log(`There isn't enough space! ${waitingPeople} people in a queue!`);
        console.log(liftState.join(" "));
    } else {
        console.log(liftState.join(" "));
    }
}

theLift([
    "15",
    "0 0 0 0 0"
   ])
   