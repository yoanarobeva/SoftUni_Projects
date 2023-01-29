function matchTickets (input) {
    let budget = Number(input[0]);
    let type = input[1];
    let people = Number(input[2]);

    let transport = 0;
    let sumTickets = 0;

    if (type === "VIP") {
        sumTickets = people * 499.99;
    } else {
        sumTickets = people * 249.99;
    }

    if (people >= 1 && people <= 4) {
        transport = budget * 0.75;
    } else if (people >= 5 && people <= 9) {
        transport = budget * 0.6;
    } else if (people >= 10 && people <= 24) {
        transport = budget * 0.5;
    } else if (people >= 25 && people <= 49) {
        transport = budget * 0.4;
    } else if (people >= 50) {
        transport = budget * 0.25;
    }

    let spendedMoney = sumTickets + transport;
    let diff = Math.abs(budget - spendedMoney);

    if (spendedMoney <= budget) {
        console.log(`Yes! You have ${diff.toFixed(2)} leva left.`);
    } else {
        console.log(`Not enough money! You need ${diff.toFixed(2)} leva.`)
    }

}

matchTickets(["3000", "VIP", "49"])