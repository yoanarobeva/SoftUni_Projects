function counterStrike(input) {
    let index = 0;
    let energy = Number(input.shift());

    let wonBattles = 0;
    let flag = false;

    for (let el of input) {

        if(el === "End of battle") {
            break;
        }

        distance = Number(el);
        
        if (energy < distance) {
            console.log(`Not enough energy! Game ends with ${wonBattles} won battles and ${energy} energy`);
            flag = true;
            break;
        }
        
        energy -= distance;
        wonBattles++;

        if (wonBattles % 3 === 0) {
            energy += wonBattles;
        }
    }
    
   if (!flag) {
    console.log(`Won battles: ${wonBattles}. Energy left: ${energy}`);
   }
}

counterStrike(["100",
"10",
"10",
"10",
"1",
"2",
"3",
"73",
"10"])

