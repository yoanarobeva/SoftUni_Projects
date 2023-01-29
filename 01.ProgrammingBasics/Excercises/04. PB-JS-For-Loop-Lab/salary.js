function salary (input) {
    let index = 0;
    let tabCount = Number(input[index]);
    index++
    let salary = Number(input[index]);
    index++;

    let lost = 0;

    for (let i = 1; i <= tabCount; i++){
        let currentTab = input[index];
        index++;
        if (currentTab === "Facebook") {
            lost += 150;
        } else if (currentTab === "Instagram") {
            lost += 100;
        } else if (currentTab === "Reddit") {
            lost += 50; 
        }

        if (lost >= salary) {
            console.log(`You have lost your salary.`);
            break;
        }
    }
    if ((salary - lost) > 0) {
    console.log(salary - lost);
    }
}

salary(["3",
"500",
"Facebook",
"Stackoverflow.com",
"softuni.bg"])

