function yardGreening (input) {
    
    let meters = Number(input[0]);
    let sum = meters * 7.61;
    let discount = sum * 0.18;
    let total = sum - discount;

    console.log (`The final price is: ${total} lv. `);
    console.log (`The discount is: ${discount} lv.`);
}

yardGreening(["550"]);