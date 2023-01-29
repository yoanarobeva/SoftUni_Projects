function movieProfit (input) {
    let movieName = input[0];
    let daysCount = Number(input[1]);
    let ticketCount = Number(input[2]);
    let ticketPrice = Number(input[3]);
    let percentCinema = Number(input[4]);

    let ticketProfitPerDay = ticketCount * ticketPrice;
    let ticketProfit = ticketProfitPerDay * daysCount;
    let profit = ticketProfit - ticketProfit * percentCinema / 100;

    console.log(`The profit from the movie ${movieName} is ${profit.toFixed(2)} lv.`);
}

movieProfit (["The Programmer",
    "20",
    "500",
    "7.50",
    "7"])