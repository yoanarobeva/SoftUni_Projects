class Garden {
    constructor(spaceAvailable) {
        this.spaceAvailable = spaceAvailable;
        this.plants = [];
        this.storage = [];
    }

    addPlant(plantName, spaceRequired) {
        if (this.spaceAvailable < spaceRequired) {
            throw new Error("Not enough space in the garden.");
        }
        this.plants.push({plantName, spaceRequired, ripe: false, quantity: 0 })
        this.spaceAvailable -= spaceRequired;
        return `The ${plantName} has been successfully planted in the garden.`;
    }

    ripenPlant(plantName, quantity) { 
        if (quantity <= 0) {
            throw new Error (`The quantity cannot be zero or negative.`)
        }
        let isTherePlant = false;

        for (let x of this.plants) {
            if (x.plantName === plantName) {
                isTherePlant = true;
                if (x.ripe === true) {
                    throw new Error (`The ${x.plantName} is already ripe.`);
                } else {
                    x.ripe = true;
                    x.quantity += quantity;
                    if (quantity === 1) {
                        return `${quantity} ${plantName} has successfully ripened.`
                    } else {
                        return `${quantity} ${plantName}s have successfully ripened.`
                    }
                }
            }
        }    
        
        if (!isTherePlant) {
            throw new Error(`There is no ${plantName} in the garden.`)
        }
    }

    harvestPlant(plantName) {
        let isTherePlant = false
        for (let x of this.plants) {
            if (x.plantName === plantName) {
                if (x.ripe === false) {
                    throw new Error (`The ${plantName} cannot be harvested before it is ripe.`)
                }
                let index = this.plants.indexOf(x);
                this.storage.push({plantName: x.plantName, quantity: x.quantity});
                this.spaceAvailable += x.spaceRequired;
                this.plants.splice(index, 1)
                isTherePlant = true;

                return `The ${plantName} has been successfully harvested.`
            }
        }
        if (!isTherePlant) {
            throw new Error (`There is no ${plantName} in the garden.`)
        }
    }

    generateReport() {
        let text = `The garden has ${this.spaceAvailable} free space left.\n`;
        text += "Plants in the garden: "
        let plantsArr = []
        this.plants.forEach(x => {
            plantsArr.push(x.plantName);
        })
        text += plantsArr.join(', ');
        if (this.storage.length === 0) {
            text += `\nPlants in storage: The storage is empty.`;
        } else {
            text += '\nPlants in storage: ';
            let plantsQuantity = []
            this.storage.forEach(x => {
                plantsQuantity.push(`${x.plantName} (${x.quantity})`);
            })
            text += plantsQuantity.join(', ');
        }
        return text;
    }
}

const myGarden = new Garden(250)
console.log(myGarden.addPlant('apple', 20));
console.log(myGarden.addPlant('orange', 200));
console.log(myGarden.addPlant('raspberry', 10));
console.log(myGarden.ripenPlant('apple', 10));
console.log(myGarden.ripenPlant('orange', 1));
console.log(myGarden.harvestPlant('orange'));
console.log(myGarden.generateReport());
