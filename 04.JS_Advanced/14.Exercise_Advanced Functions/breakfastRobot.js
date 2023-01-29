function solution() {
    
    function processor(input) {
        let [instr, microel, quant] = input.split(" ");
        if (instr === 'report') {
            return instructions.report();
        } else {
            return instructions[instr](microel, quant);
        }
    }

    let microelements = {
        protein: 0,
        carbohydrate: 0,
        fat: 0,
        flavour: 0
    }

    let recipes = {
        apple: {
            carbohydrate: 1,
            flavour: 2
        },
        lemonade: {
            carbohydrate: 10,
            flavour: 20
        },
        burger: {
            carbohydrate: 5,
            fat: 7,
            flavour: 3
        },
        eggs: {
            protein: 5,
            fat: 1,
            flavour: 1
        },
        turkey: {
            protein: 10,
            carbohydrate: 10,
            fat: 10,
            flavour: 10
        }
    }

    let instructions = {
        restock: (microelement, quantity) => {
            microelements[microelement] += Number(quantity)
            return "Success";
        },
        prepare: (recipe, quantity) => {
            let meal = recipes[recipe];
            let mealIngredients = Array.from(Object.keys(meal));
        
            for (let x of mealIngredients) {
                if (meal[x] * Number(quantity) > microelements[x]) {
                    return `Error: not enough ${x} in stock`;
                }
            }

            mealIngredients.forEach(x => microelements[x] -= (meal[x] * Number(quantity)))
            return 'Success';
        },
        report: () => `protein=${microelements.protein} carbohydrate=${microelements.carbohydrate} fat=${microelements.fat} flavour=${microelements.flavour}`
    }
    return processor;
}

let manager = solution ();
console.log (manager ("restock flavour 50")); // Success 
console.log (manager ("prepare lemonade 4")); // Success 
