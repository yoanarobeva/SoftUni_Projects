function calorieObject(input) {
    let obj = {};

    for (let i = 0; i < input.length; i+=2) {
        let food = input[i];
        let calories = Number(input[i+1]);

        obj[food] = calories;
    }

    console.log(obj);
}

calorieObject(['Yoghurt', '48', 'Rise', '138', 'Apple', '52'])