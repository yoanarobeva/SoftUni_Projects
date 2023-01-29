class ChristmasDinner {

    constructor(budget) {
        this.budget = budget;
        this.dishes = [];
        this.products = [];
        this.guests = {};
    }

    setBudget() {
        if (this.budget < 0) {
            throw new Error ("The budget cannot be a negative number")
        }
    }

    shopping(product) {
        let [productName, price] = product;
        price = Number(price);

        if (this.budget < price) {
            throw new Error ("Not enough money to buy this product")
        }

        this.products.push(productName);
        this.budget -= price;
        return `You have successfully bought ${productName}!`;
    }

    recipes(recipe) {
        let {recipeName, productsList} = recipe;
        let isPresent = true;

        productsList.forEach(x => {
            if (!this.products.includes(x)) {
                isPresent = false;
            }
        })

        if (!isPresent) {
            return "We do not have this product";
        } else {
            this.dishes.push({ recipeName, productsList });
            return `${recipeName} has been successfully cooked!`;
        }
    }

    inviteGuests(name, dish) {
        let isPresent = false;
        for (let el of this.dishes) {
            if (el.recipeName === dish) {
                isPresent = true;
            } 
        }
        if (!isPresent) {
            throw new Error ("We do not have this dish");
        }

        if (this.guests.hasOwnProperty(name)) {
            throw new Error ("This guest has already been invited")
        }

        this.guests[name] = dish;
        return `You have successfully invited ${name}!`
    }

    showAttendance() {
        let text = '';
        let guests = Array.from(Object.keys(this.guests));

        for (let name of guests) {
            for (let el of this.dishes) {
                if (this.guests[name] === el.recipeName) {
                    text += `${name} will eat ${this.guests[name]}, which consists of ${el.productsList.join(', ')}\n`
                }
            }
        }
        return text.trim();
    }
}

let dinner = new ChristmasDinner(300);

dinner.shopping(['Salt', 1]);
dinner.shopping(['Beans', 3]);
dinner.shopping(['Cabbage', 4]);
dinner.shopping(['Rice', 2]);
dinner.shopping(['Savory', 1]);
dinner.shopping(['Peppers', 1]);
dinner.shopping(['Fruits', 40]);
dinner.shopping(['Honey', 10]);

dinner.recipes({
    recipeName: 'Oshav',
    productsList: ['Fruits', 'Honey']
});
dinner.recipes({
    recipeName: 'Folded cabbage leaves filled with rice',
    productsList: ['Cabbage', 'Rice', 'Salt', 'Savory']
});
dinner.recipes({
    recipeName: 'Peppers filled with beans',
    productsList: ['Beans', 'Peppers', 'Salt']
});

dinner.inviteGuests('Ivan', 'Oshav');
dinner.inviteGuests('Petar', 'Folded cabbage leaves filled with rice');
dinner.inviteGuests('Georgi', 'Peppers filled with beans');

console.log(dinner.showAttendance());


