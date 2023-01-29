function depositCalculator(input) {
    let deposit = Number(input[0]);
    let time = Number(input[1]);
    let procent = Number(input[2]);

    let lihva = deposit * procent /100;
    let lihvaMonth = lihva / 12;
    let sum = lihvaMonth * time + deposit;

    console.log(sum);
}

depositCalculator(["200 ",
"3 ",
"5.7 "]
)