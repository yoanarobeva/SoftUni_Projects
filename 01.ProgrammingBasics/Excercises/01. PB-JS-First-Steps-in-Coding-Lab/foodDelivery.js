function foodDelivery(input) {
    let chickenMenus = Number(input[0]);
    let fishMenus = Number(input[1]);
    let veggiMenus = Number(input[2]);

    let chickenMenusPrice = chickenMenus * 10.35;
    let fishMenusPrice = fishMenus * 12.40;
    let veggiMenusPrice = veggiMenus * 8.15;
    let dessertPrice = (chickenMenusPrice + fishMenusPrice + veggiMenusPrice) * 0.2;

    let total = chickenMenusPrice + fishMenusPrice + veggiMenusPrice + dessertPrice + 2.50;

    console.log(total);
}

foodDelivery(["2 ",
"4 ",
"3 "]
)