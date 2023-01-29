function hairSalon (input) {
    let index = 0;
    let wantedIncome = Number(input[index]);
    index++;
    let command = input[index];
    index++;
    let command2 = input[index];

    let income = 0;
    let isEnough = false;

    while (command !== "closed") {
        if (command === "haircut") {
            switch (command2) {
                case "mens": income += 15; break;
                case "ladies": income += 20; break;
                case "kids": income += 10; break;
            }
        } else if (command === "color") {
            switch (command2) {
                case "touch up": income += 20; break;
                case "full color": income += 30; break;
            }
        }

        if (income >= wantedIncome){
            console.log(`You have reached your target for the day!`);
            console.log(`Earned money: ${income}lv.`);
            isEnough = true;
            break;
        }
        index++;
        command = input[index];
        index++;
        command2 = input[index];
    }
    if(!isEnough) {
        console.log(`Target not reached! You need ${wantedIncome - income}lv. more.`);
        console.log(`Earned money: ${income}lv.`);
    }

}

hairSalon(["50",
"color",
"full color",
"haircut",
"ladies"])

