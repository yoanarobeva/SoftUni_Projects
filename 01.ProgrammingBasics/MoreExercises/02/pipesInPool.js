function pipesInPool(input) {
    let v = Number(input[0]);
    let p1 = Number(input[1]);
    let p2 = Number(input[2]);
    let h = Number(input[3]);

    let litersFromP1 = h * p1;
    let litersFromP2 = h * p2;

    let poolFullness = litersFromP1 + litersFromP2;
    let poolFullnessPercent = poolFullness / v * 100;
    let fillFromP1Percent = litersFromP1 / poolFullness * 100;
    let fillFromP2Percent = litersFromP2 / poolFullness * 100;

    if (poolFullness <= v) {
        console.log(`The pool is ${poolFullnessPercent.toFixed(2)}% full. Pipe 1: ${fillFromP1Percent.toFixed(2)}%. Pipe 2: ${fillFromP2Percent.toFixed(2)}%.`);
    } else {
        let diff = poolFullness - v;
        console.log(`For ${h} hours the pool overflows with ${diff} liters.`);
    }
}

pipesInPool(["1000", "100", "120", "3"]);