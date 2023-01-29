function piccolo(input) {
    let parkingSet = new Set();

    for (let line of input) {
        let [command, plate] = line.split(", ");

        if (command === 'IN') {
            parkingSet.add(plate);
        } else {
            parkingSet.delete(plate);
        }
    }

    if (parkingSet.size === 0) {
        console.log(`Parking Lot is Empty`);
    } else {
        let parkingArr = Array.from(parkingSet.values()).sort();
        console.log(parkingArr.join("\n"));
    }
}

piccolo(['IN, CA2844AA',
'IN, CA1234TA',
'OUT, CA2844AA',
'IN, CA9999TT',
'IN, CA2866HI',
'OUT, CA1234TA',
'IN, CA2844AA',
'OUT, CA2866HI',
'IN, CA9876HH',
'IN, CA2822UU']
)