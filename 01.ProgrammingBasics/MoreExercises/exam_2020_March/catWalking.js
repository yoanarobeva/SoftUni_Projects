function catWalking (input) {
    let minutesWalkPerDay = Number(input[0]);
    let walksPerDay = Number(input[1]);
    let coloriesPerDay = Number(input[2]);

    let totalMinWalk = minutesWalkPerDay * walksPerDay;
    let totalColories = totalMinWalk * 5;
    let halfColories = coloriesPerDay / 2;

    if (totalColories >= halfColories) {
        console.log(`Yes, the walk for your cat is enough. Burned calories per day: ${totalColories}.`);
    } else {
        console.log(`No, the walk for your cat is not enough. Burned calories per day: ${totalColories}.`);
    }
}

catWalking (["30", "3", "600"])