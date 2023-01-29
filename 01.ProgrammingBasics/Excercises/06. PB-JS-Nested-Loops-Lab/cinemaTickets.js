function cinemaTickets (input) {
    let index = 0;
    let movie = input[index];
    index++;
    let freeSpaces = Number(input[index]);
    index++;
    let ticketType = input[index];

    let totalTickets = 0;
    let totalStudentTickets = 0;
    let totalStandartTickets = 0;
    let totalKidTickets = 0;

    while (movie !== "Finish") {
        let studentCounter = 0;
        let standartCounter = 0;
        let kidCounter = 0;
        let fullPercent = 0;
        let allTickets = 0;
        
        while (ticketType !== "End") {
            
            switch (ticketType) {
                case "student": studentCounter++; break;
                case "standard": standartCounter++; break;
                case "kid": kidCounter++; break;
            }
            
            allTickets = studentCounter + standartCounter + kidCounter;

            if (allTickets >= freeSpaces) {
                break;
            }
            index++;
            ticketType = input[index];
        }

        totalTickets += allTickets;
        totalStudentTickets += studentCounter;
        totalStandartTickets += standartCounter;
        totalKidTickets += kidCounter;

        fullPercent = allTickets / freeSpaces * 100;
        console.log(`${movie} - ${fullPercent.toFixed(2)}% full.`);
        
        index++;
        movie = input[index];
        index++;
        freeSpaces = Number(input[index]);
        index++;
        ticketType = input[index];
    }
    let percentStudentTickets = totalStudentTickets / totalTickets * 100;
    let percentStandartTickets = totalStandartTickets / totalTickets * 100;
    let percentKidTickets = totalKidTickets / totalTickets * 100;

    console.log(`Total tickets: ${totalTickets}`);
    console.log(`${percentStudentTickets.toFixed(2)}% student tickets.`)
    console.log(`${percentStandartTickets.toFixed(2)}% standard tickets.`);
    console.log(`${percentKidTickets.toFixed(2)}% kids tickets.`);
}

cinemaTickets(["The Matrix",
"20",
"student",
"standard",
"kid",
"kid",
"student",
"student",
"standard",
"student",
"End",
"The Green Mile",
"17",
"student",
"standard",
"standard",
"student",
"standard",
"student",
"End",
"Amadeus",
"3",
"standard",
"standard",
"standard",
"Finish"])

