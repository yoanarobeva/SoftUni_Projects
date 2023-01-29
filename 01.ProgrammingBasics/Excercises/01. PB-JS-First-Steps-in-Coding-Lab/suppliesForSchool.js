function suppliesForSchool(input) {
    let pens = Number(input[0]);
    let markeri = Number(input[1]);
    let detergent = Number(input[2]);
    let percentDiscount = Number(input[3]);

    let pensPrice = pens * 5.80;
    let markeriPrice = markeri * 7.20;
    let detergentPrice = detergent * 1.20

    let discountSum = (pensPrice + markeriPrice + detergentPrice) * percentDiscount/100;
    let sum = (pensPrice + markeriPrice + detergentPrice) - discountSum;

    console.log(sum);
}

suppliesForSchool(["2 ",
"3 ",
"4 ",
"25 "]
);