class VegetableStore {
    constructor(owner, location) {
        this.owner = owner;
        this.location = location;
        this.availableProducts = [];
    }

    loadingVegetables (vegetables) {
        let typeArr = [];

        for (let el of vegetables) {
            let [type, quantity, price] = el.split(' ');
            quantity = Number(quantity);
            price = Number(price);
            let isThereVeg = false;
            
            for (let veg of this.availableProducts) {

                if (type === veg.type) {
                    isThereVeg = true;
                    veg.quantity += quantity

                    if (veg.price < price) {
                        veg.price = price;
                    }
                }
            }
            if(!isThereVeg) {
                this.availableProducts.push({ type, quantity, price });
                typeArr.push(type);
            }
        }
        return `Successfully added ${typeArr.join(', ')}`;
    }

    buyingVegetables (selectedProducts) {
        let totalPrice = 0;

        for (let el of selectedProducts) {
            let [type, quantity] = el.split(' ');
            quantity = Number(quantity);
            let isPresent = false;

            for (let veg of this.availableProducts) {

                if (veg.type === type) {
                    isPresent = true;

                    if (quantity > veg.quantity) {
                        throw new Error (`The quantity ${quantity} for the vegetable ${type} is not available in the store, your current bill is $${totalPrice.toFixed(2)}.`)
                    }

                    totalPrice += (veg.price * quantity);
                    veg.quantity -= quantity;
                }
            }

            if (!isPresent) {
                throw new Error (`${type} is not available in the store, your current bill is $${totalPrice.toFixed(2)}.`);
            }
        }
        return `Great choice! You must pay the following amount $${totalPrice.toFixed(2)}.`;
    }

    rottingVegetable (type, quantity) {
        let isPresent = false;

        for (let veg of this.availableProducts) {

            if (veg.type === type) {
                isPresent = true;

                if (quantity > veg.quantity) {
                    veg.quantity = 0;
                    return `The entire quantity of the ${type} has been removed.`;
                }

                veg.quantity -= quantity;
                return `Some quantity of the ${type} has been removed.`;
            }
        }

        if (!isPresent) {
            throw new Error (`${type} is not available in the store.`)
        }
    }

    revision () {
        let text = "Available vegetables:"
        this.availableProducts.sort((a,b) => a.price - b.price);
        this.availableProducts.forEach(x => text += `\n${x.type}-${x.quantity}-$${x.price}`);
        text += `\nThe owner of the store is ${this.owner}, and the location is ${this.location}.`

        return text;
    }
}

let vegStore = new VegetableStore("Jerrie Munro", "1463 Pette Kyosheta, Sofia");
console.log(vegStore.loadingVegetables(["Okra 2.5 3.5", "Beans 10 2.8", "Celery 5.5 2.2", "Celery 0.5 2.5"]));
console.log(vegStore.rottingVegetable("Okra", 1));
console.log(vegStore.rottingVegetable("Okra", 2.5));
console.log(vegStore.buyingVegetables(["Beans 8", "Celery 1.5"]));
console.log(vegStore.revision());



