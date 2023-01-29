function fruitShop (input) {
    let fruitName = input[0];
    let dayOfTheWeek = input[1];
    let count = Number(input[2]);
    let totalPrice = 0;

    if (dayOfTheWeek === "Monday" || dayOfTheWeek === "Tuesday"
    || dayOfTheWeek === "Wednesday" || dayOfTheWeek === "Thursday"
    || dayOfTheWeek === "Friday") {
        switch(fruitName) {
            case "banana": totalPrice = 2.50 * count;
                console.log(totalPrice.toFixed(2)); 
                break;
            case "apple": totalPrice = 1.20 * count;
                console.log(totalPrice.toFixed(2)); 
                break;
            case "orange": totalPrice = 0.85 * count;
                console.log(totalPrice.toFixed(2)); 
                break;
            case "grapefruit": totalPrice = 1.45 * count;
                console.log(totalPrice.toFixed(2)); 
                break;
            case "kiwi": totalPrice = 2.70 * count;
                console.log(totalPrice.toFixed(2)); 
                break;
            case "pineapple": totalPrice = 5.50 * count;
                console.log(totalPrice.toFixed(2)); 
                break;
            case "grapes": totalPrice = 3.85 * count;
                console.log(totalPrice.toFixed(2)); 
                break;
            default: console.log("error"); 
                break;
        }
    } else if (dayOfTheWeek === "Saturday" || dayOfTheWeek === "Sunday") {
        switch(fruitName) {
            case "banana": totalPrice = 2.70 * count; 
                console.log(totalPrice.toFixed(2));
                break;
            case "apple": totalPrice = 1.25 * count; 
                console.log(totalPrice.toFixed(2));
                break;
            case "orange": totalPrice = 0.9 * count; 
                console.log(totalPrice.toFixed(2));
                break;
            case "grapefruit": totalPrice = 1.60 * count; 
                console.log(totalPrice.toFixed(2));
                break;
            case "kiwi": totalPrice = 3 * count; 
                console.log(totalPrice.toFixed(2));
                break;
            case "pineapple": totalPrice = 5.60 * count; 
                console.log(totalPrice.toFixed(2));
                break;
            case "grapes": totalPrice = 4.20 * count; 
                console.log(totalPrice.toFixed(2));
                break;
            default: console.log("error"); 
                break;  
        } 
    } else {
        console.log("error");
    }
}

fruitShop(["orange",
"Sunday",
"3"])





