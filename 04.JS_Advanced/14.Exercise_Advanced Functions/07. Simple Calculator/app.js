function calculator() {
    let firstField;
    let secondField;
    let resultField;
    return {
        init: (selector1, selector2, resultSelector) => {
            firstField = document.querySelector(selector1);
            secondField = document.querySelector(selector2);
            resultField = document.querySelector(resultSelector);
        },
        add: () => {
            resultField.value = Number(firstField.value) + Number(secondField.value);
        },
        subtract: () => {
            resultField.value = Number(firstField.value) - Number(secondField.value);
        }
    }
}

const calculate = calculator (); 
calculate.init ('#num1', '#num2', '#result'); 
