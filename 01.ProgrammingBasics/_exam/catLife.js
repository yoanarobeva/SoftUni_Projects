function catLife (input) {
    let breed = input[0];
    let sex = input[1];

    let catsLifeInYears = 0;
    let isValid = true;

    if (sex === "m") {
        switch (breed) {
            case "British Shorthair": catsLifeInYears = 13; break;
            case "Siamese": catsLifeInYears = 15; break;
            case "Persian": catsLifeInYears = 14; break;
            case "Ragdoll": catsLifeInYears = 16; break;
            case "American Shorthair": catsLifeInYears = 12; break;
            case "Siberian": catsLifeInYears = 11; break;
            default: console.log(`${breed} is invalid cat!`); isValid = false; break;
        }
    } else if (sex === "f") {
        switch (breed) {
            case "British Shorthair": catsLifeInYears = 14; break;
            case "Siamese": catsLifeInYears = 16; break;
            case "Persian": catsLifeInYears = 15; break;
            case "Ragdoll": catsLifeInYears = 17; break;
            case "American Shorthair": catsLifeInYears = 13; break;
            case "Siberian": catsLifeInYears = 12; break;
            default: console.log(`${breed} is invalid cat!`); isValid = false; break;
        }
    }

    let catsLifeInMonths = catsLifeInYears * 12 / 6;
    if (isValid) {
        console.log(`${catsLifeInMonths} cat months`);
    }
}

catLife(["Tom",
"m"])



