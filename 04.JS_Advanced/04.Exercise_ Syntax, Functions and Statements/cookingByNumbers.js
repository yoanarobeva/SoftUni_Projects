function cookingByNumbers(number,...params) {
    let result = 0;
    number = Number(number);

    for (let operation of params) {
        switch (operation) {
            case 'chop': result = number / 2; break;
            case 'dice': result = Math.sqrt(number); break;
            case 'spice': result = number + 1; break;
            case 'bake': result = number * 3; break;
            case 'fillet': result = number - 0.2 * number; break;
        }
        console.log(result);
        number = result;
    }
}

cookingByNumbers('32', 'chop', 'chop', 'chop', 'chop', 'chop');
console.log('_____');
cookingByNumbers('9', 'dice', 'spice', 'chop', 'bake', 'fillet');