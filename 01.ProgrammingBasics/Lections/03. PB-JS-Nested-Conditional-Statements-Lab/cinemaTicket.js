function cinemaTicket (input) {
    let dayOfTheWeek = input[0];
    let price = 0;

    switch (dayOfTheWeek) {
        case "Monday": 
        case "Tuesday":
        case "Friday": price = 12; break;
        case "Wednesday":
        case "Thursday": price = 14; break;
        case "Saturday":
        case "Sunday": price = 16; break;
    }
    console.log(price);
}

cinemaTicket(["Monday"])