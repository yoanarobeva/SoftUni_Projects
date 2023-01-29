class CarDealership {
    constructor(name) {
        this.name = name;
        this.availableCars = [];
        this.soldCars = [];
        this.totalIncome  = 0;
    }
    
    addCar (model, horsepower, price, mileage) {
        if (typeof model !== 'string' || model === '' || !Number.isInteger(horsepower) || horsepower < 0 || typeof price !== 'number' || price < 0 || typeof mileage !== 'number' || mileage < 0) {
            throw new Error ('Invalid input!');
        } 
        this.availableCars.push({model, horsepower, price, mileage});
        return `New car added: ${model} - ${horsepower} HP - ${mileage.toFixed(2)} km - ${price.toFixed(2)}$`
    }

    sellCar (model, desiredMileage) {
        let isThereSuchAModel = false;
        for (let el of this.availableCars) {

            if (el.model === model) {
                isThereSuchAModel = true;
                let mileageDiff = el.mileage - desiredMileage;

                if(el.mileage > desiredMileage) {
                    if (mileageDiff <= 40000) {
                        el.price -= (el.price * 0.05);
                    } else if (mileageDiff > 40000){
                        el.price -= (el.price * 0.1);
                    }
                }

                let index = this.availableCars.indexOf(el);
                let priceOfCurrent = el.price;
                this.soldCars.push(el);
                this.availableCars.splice(index, 1);
                this.totalIncome += el.price;

                return `${model} was sold for ${priceOfCurrent.toFixed(2)}$`
            }
        }

        if(!isThereSuchAModel) {
            throw new Error (`${model} was not found!`);
        }
    }

    currentCar () {
        let text = `-Available cars:`;

        if (this.availableCars.length === 0) {
            return "There are no available cars";
        }

        this.availableCars.forEach(x => text += `\n---${x.model} - ${x.horsepower} HP - ${x.mileage.toFixed(2)} km - ${x.price.toFixed(2)}$`);
        return text;
    }

    salesReport (criteria) {
        for (let el of this.soldCars) {
            if (!el[criteria]) {
                throw new Error("Invalid criteria!")
            }
        }

        if (criteria === 'horsepower') {
            this.soldCars.sort((a,b) => b.horsepower - a.horsepower);
        } else if (criteria === 'model') {
            this.soldCars.sort((a,b) => a.model.localeCompare(b.model));
        }

        let text = `-${this.name} has a total income of ${this.totalIncome.toFixed(2)}$`;
        text += `\n-${this.soldCars.length} cars sold:`;
        this.soldCars.forEach(x => text += `\n---${x.model} - ${x.horsepower} HP - ${x.price.toFixed(2)}$`);

        return text;
    }
}

let dealership = new CarDealership('SoftAuto');
dealership.addCar('Toyota Corolla', 100, 3500, 190000);
dealership.addCar('Mercedes C63', 300, 29000, 187000);
dealership.addCar('Audi A3', 120, 4900, 240000);
dealership.sellCar('Toyota Corolla', 230000);
dealership.sellCar('Mercedes C63', 110000);
console.log(dealership.salesReport('horsepower'));



