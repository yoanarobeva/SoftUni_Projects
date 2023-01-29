function repainting (input) {
    let metersNylon = Number(input[0]) + 2;
    let letersPaint = Number(input[1]) * 1.1;
    let letersThinner = Number(input[2]);
    let workingHours = Number(input[3]);

    let priceNylon = metersNylon * 1.50;
    let pricePaint = letersPaint * 14.50;
    let priceThinner = letersThinner * 5;

    let sum = 0.40 + priceNylon + pricePaint + priceThinner;
    let pricePerHour = sum * 0.3;
    let total = sum + pricePerHour * workingHours;

    console.log (total);

}

repainting(["10 ",
"11 ",
"4 ",
"8 "]
)