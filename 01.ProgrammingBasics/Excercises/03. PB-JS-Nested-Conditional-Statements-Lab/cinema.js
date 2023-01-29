function cinema (input) {
   let projectionType = input[0];
   let rows = Number(input[1]);
   let columns = Number(input[2]);
   let finalPrice = 0;

   switch (projectionType) {
       case "Premiere":
           finalPrice = rows * columns * 12;
           console.log(`${finalPrice.toFixed(2)} leva`);
           break;
        case "Normal":
            finalPrice = rows * columns * 7.50;
            console.log(`${finalPrice.toFixed(2)} leva`);
            break;
        case "Discount":
            finalPrice = rows * columns * 5;
            console.log(`${finalPrice.toFixed(2)} leva`);
            break;
   }
}
cinema(["Premiere",
"10",
"12"])
