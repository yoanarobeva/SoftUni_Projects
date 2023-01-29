function agencyProfit (input) {
    let name = input[0];
    let adultTicketNumber = Number(input[1]);
    let kidTicketNumber = Number(input[2]);
    let adultNetoPrice = Number(input[3]);
    let taxPrice = Number(input[4]);

    let kidNetoPrice = adultNetoPrice * 0.3;
    let adultPrice = adultNetoPrice + taxPrice;
    let kidPrice = kidNetoPrice + taxPrice;

    let profit = (adultPrice * adultTicketNumber + kidPrice * kidTicketNumber) * 0.2;
    
    console.log(`The profit of your agency from ${name} tickets is ${profit.toFixed(2)} lv.`);
}

agencyProfit (["WizzAir","15","5","120","40"]);