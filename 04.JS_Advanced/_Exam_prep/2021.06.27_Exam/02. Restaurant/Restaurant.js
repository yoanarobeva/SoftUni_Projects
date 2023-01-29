class Restaurant {
    constructor(budgetMoney) {
        this.budgetMoney = budgetMoney;
        this.menu = {};
        this.stockProducts = {};
        this.history = [];
        this.menuCount = 0;
    }

    loadProducts(products) {
        for (let el of products) {
            let [productName, productQuantity, productTotalPrice] = el.split(' ');
            productQuantity = Number(productQuantity);
            productTotalPrice = Number(productTotalPrice);

            if (productTotalPrice <= this.budgetMoney) {
                if (this.stockProducts[productName]) {
                    this.stockProducts[productName] += productQuantity;
                } else {
                    this.stockProducts[productName] = productQuantity;
                }
                this.budgetMoney -= productTotalPrice;
                this.history.push(`Successfully loaded ${productQuantity} ${productName}`);
            } else {
                this.history.push(`There was not enough money to load ${productQuantity} ${productName}`)
            }
        }
        return this.history.join('\n')
    }

    addToMenu(meal, neededProducts, price) {
    
        if (!this.menu.hasOwnProperty(meal)) {
            this.menu[meal] = {neededProducts, price};
            this.menuCount++;
        } else {
            return `The ${meal} is already in the our menu, try something different.`;
        }

        if (this.menuCount === 1) {
            return `Great idea! Now with the ${meal} we have 1 meal in the menu, other ideas?`;
        } else {
            return `Great idea! Now with the ${meal} we have ${this.menuCount} meals in the menu, other ideas?`;
        }
    }

    showTheMenu() {
        if (this.menuCount === 0) {
            return "Our menu is not ready yet, please come later..."
        }

        let text = [];
        Array.from(Object.entries(this.menu)).forEach(x => text.push(`${x[0]} - $ ${x[1].price}`));
        return text.join('\n');
    }

    makeTheOrder(meal) {
        if (!this.menu[meal]) {
            return `There is not ${meal} yet in our menu, do you want to order something else?`;
        }

        let productsArr = this.menu[meal].neededProducts;
        let weHaveAll = true;

        for (let el of productsArr) {
            let [productName, productQuantity] = el.split(' ')
            productQuantity = Number(productQuantity);

            if (this.stockProducts[productName]) {
                if (this.stockProducts[productName] >= productQuantity) {
                    this.stockProducts[productName] -= productQuantity;
                } else {
                    weHaveAll = false;
                }
            } else {
                weHaveAll = false;
            }
                
        }

        if(weHaveAll) {
            this.budgetMoney += this.menu[meal].price;
            return `Your order (${meal}) will be completed in the next 30 minutes and will cost you ${this.menu[meal].price}.`;
        } else {
            return `For the time being, we cannot complete your order (${meal}), we are very sorry...`;
        }
    }
}

let kitchen = new Restaurant(1000);
kitchen.loadProducts(['Yogurt 30 3', 'Honey 50 4', 'Strawberries 20 10', 'Banana 5 1']);
kitchen.addToMenu('frozenYogurt', ['Yogurt 1', 'Honey 1', 'Banana 1', 'Strawberries 10'], 9.99);
kitchen.addToMenu('Pizza', ['Flour 0.5', 'Oil 0.2', 'Yeast 0.5', 'Salt 0.1', 'Sugar 0.1', 'Tomato sauce 0.5', 'Pepperoni 1', 'Cheese 1.5'], 15.55)
console.log(kitchen.makeTheOrder('frozenYogurt'));
console.log(kitchen.budgetMoney);
