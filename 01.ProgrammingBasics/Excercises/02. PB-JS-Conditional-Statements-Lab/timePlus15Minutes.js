function timePlus15Minutes (input) {
    let hours = Number (input[0]);
    let minutes = Number (input[1]);

    let sumMinutes = minutes + hours * 60;
    let plusMinutes = sumMinutes + 15;

    let newHours = Math.trunc (plusMinutes / 60);
    let newMinutes = plusMinutes % 60;

    if (newHours >= 24) {
        newHours = newHours - 24;
    }

    if (newMinutes < 10) {
        console.log(`${newHours}:0${newMinutes}`);
    } else {
        console.log(`${newHours}:${newMinutes}`);
    }

}

timePlus15Minutes (["23", "59"]);