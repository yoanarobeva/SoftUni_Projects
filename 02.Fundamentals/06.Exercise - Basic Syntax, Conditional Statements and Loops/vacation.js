function vacation(people, type, day) {
    let totalPrice = 0;

    if (day === "Friday") {
        switch (type) {
            case "Students": totalPrice = 8.45 * people; break;
            case "Business":
                if (people > 100) {
                    totalPrice = 10.90 * (people - 10);
                } else {
                    totalPrice = 10.90 * people;
                }
                break;
            case "Regular": totalPrice = 15 * people; break;
        }
    } else if (day === "Saturday") {
        switch (type) {
            case "Students": totalPrice = 9.8 * people; break;
            case "Business":
                if (people > 100) {
                    totalPrice = 15.6 * (people - 10);
                } else {
                    totalPrice = 15.6 * people;
                }
                break;
            case "Regular": totalPrice = 20 * people; break;
        }
    } else if (day === "Sunday") {
        switch (type) {
            case "Students": totalPrice = 10.46 * people; break;
            case "Business":
                if (people > 100) {
                    totalPrice = 16 * (people - 10);
                } else {
                    totalPrice = 16 * people;
                }
                break;
            case "Regular": totalPrice = 22.50 * people; break;
        }
    }

    if (type === "Students" && people >= 30) {
        totalPrice = totalPrice * 0.85;
    }
    if (type === "Regular" && people >= 10 && people <= 20) {
        totalPrice = totalPrice * 0.95;
    }

    console.log(`Total price: ${totalPrice.toFixed(2)}`)

}
vacation (30,
    "Students",
    "Sunday"
    );
vacation (40,
    "Regular",
    "Saturday"
    );