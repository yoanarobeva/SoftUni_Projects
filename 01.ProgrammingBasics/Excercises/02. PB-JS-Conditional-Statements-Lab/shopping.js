function shopping (input) {
    let budget = Number(input[0]);
    let vgaCount = Number(input[1]);
    let cpuCount = Number(input[2]);
    let ramCount = Number(input[3]);

    let vgaPrice = 250 * vgaCount;
    let cpuPrice = 0.35 * vgaPrice * cpuCount;
    let ramPrice = 0.1 * vgaPrice * ramCount;

    let sum = vgaPrice + cpuPrice + ramPrice;

    if (vgaCount > cpuCount) {
        sum = 0.85 * sum;
    }

    let diff = Math.abs(budget - sum).toFixed(2);

    if (budget >= sum) {
        console.log(`You have ${diff} leva left!`)
    } else {
        console.log(`Not enough money! You need ${diff} leva more!`)
    }
}


shopping (["920.45",
"3",
"1",
"1"])

