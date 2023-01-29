function aluminumJoinery (input) {
    let count = Number(input[0]);
    let type = input[1];
    let deliveryType = input[2];

    let totalPrice = 0;
    let isNotValid = false;

    if (count <= 10) {
        console.log(`Invalid order`)
        isNotValid = true;
    }

    switch (type) {
        case "90X130": 
            totalPrice = count * 110;
            if (count >= 60) {
                totalPrice = totalPrice * 0.92;
            } else if (count >= 30) {
                totalPrice = totalPrice * 0.95;
            }
        break;
        case "100X150":
            totalPrice = count * 140;
            if (count >= 80) {
                totalPrice = totalPrice * 0.9;
            } else if (count >= 40) {
                totalPrice = totalPrice * 0.94;
            }     
        break;
        case "130X180":
            totalPrice = count * 190;
            if (count >= 50) {
                totalPrice = totalPrice * 0.88;
            } else if (count >= 20) {
                totalPrice = totalPrice * 0.93;
            }
        break;
        case "200X300":
            totalPrice = count * 250;
            if (count >= 50) {
                totalPrice = totalPrice * 0.86;
            } else if (count >= 25) {
                totalPrice = totalPrice * 0.91;
            }
        break;
    }

    if (deliveryType === "With delivery") {
        totalPrice += 60;
    }

    if (count > 99) {
        totalPrice = totalPrice * 0.96;
    } 

    if(!isNotValid) {
        console.log(`${totalPrice.toFixed(2)} BGN`)
    }
}

aluminumJoinery (["105", 
    "100X150",
    "With delivery"
    ])