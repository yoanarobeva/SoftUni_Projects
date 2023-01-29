function skiTrip (input) {
    let days = Number(input[0]);
    let roomType = input[1];
    let comment = input[2];

    let sum = 0;
    let nights = days - 1;

    switch (roomType) {
        case "room for one person": 
            sum = nights * 18;
            break;
        case "apartment": 
            sum = nights * 25;
            if (days < 10) {
                sum = sum * 0.7;
            } else if (days > 15) {
                sum = sum * 0.5;
            } else {
                sum = sum * 0.65;
            }
            break;
        case "president apartment": 
           sum = nights * 35;
           if (days < 10) {
            sum = sum * 0.9;
        } else if (days > 15) {
            sum = sum * 0.8;
        } else {
            sum = sum * 0.85;
        }
            break;
    }

    if (comment === "positive") {
        sum = sum * 1.25;
    } else if (comment === "negative") {
        sum = sum * 0.9;
    }
    console.log(sum.toFixed(2));
}

skiTrip(["12",
"room for one person",
"positive"])


