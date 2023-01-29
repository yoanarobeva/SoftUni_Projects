function moving (input) {
    let index = 0;
    let width = Number(input[index]);
    index++;
    let length = Number(input[index]);
    index++;
    let heigth = Number(input[index]);
    index++;
    let currentBoxes = input[index];

    let roomVolume = width * length * heigth;
    let allBoxes = 0;
    let diff = 0;
    let isRoomFinished = false;

    while (currentBoxes !== "Done") {
        allBoxes += Number(currentBoxes);

        if (allBoxes > roomVolume) {
            diff = allBoxes - roomVolume;
            console.log(`No more free space! You need ${diff} Cubic meters more.`)
            isRoomFinished = true;
            break;
        }

        index++;
        currentBoxes = input[index];
    }
    
    if(!isRoomFinished) {
        diff = roomVolume - allBoxes;
        console.log(`${diff} Cubic meters left.`);
    }
}

moving(["10", 
"1",
"2",
"4", 
"6",
"Done"])

