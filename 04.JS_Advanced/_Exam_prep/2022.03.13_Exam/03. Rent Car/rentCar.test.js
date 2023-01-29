const { assert } = require('chai');
const rentCar = require('./rentCar');

describe("Tests rentACar", function () {
    describe("tests searchCar", function () {
        it("the shop is array", function () {
            assert.throws(() => { rentCar.searchCar(0, 'Audi') });
            assert.throws(() => { rentCar.searchCar('', 'Audi') });
            assert.throws(() => { rentCar.searchCar({}, 'Audi') });
            assert.throws(() => { rentCar.searchCar(undefined, 'Audi') });
            assert.throws(() => { rentCar.searchCar() });
            assert.throws(() => { rentCar.searchCar([], 'Audi') });
        });

        it("the model is string", function () {
            assert.throws(() => { rentCar.searchCar(["Volkswagen", "BMW", "Audi"], '') });
            assert.throws(() => { rentCar.searchCar(["Volkswagen", "BMW", "Audi"], 0) });
            assert.throws(() => { rentCar.searchCar(["Volkswagen", "BMW", "Audi"], []) });
            assert.throws(() => { rentCar.searchCar(["Volkswagen", "BMW", "Audi"], {}) });
            assert.throws(() => { rentCar.searchCar(["Volkswagen", "BMW", "Audi"], undefined) });
        });

        it("throw an error with not matching elements", function () {
            assert.throws(() => { rentCar.searchCar(["Volkswagen", "BMW", "Audi"], 'Mazda') });
        });

        it("works with correct input", function () {
            assert.equal(rentCar.searchCar(["Volkswagen", "BMW", "Audi"], 'Audi'), `There is 1 car of model Audi in the catalog!`);
        });
    });

    describe("tests calculatePriceOfCar", function () {
        it("the model input is string", function () {
            assert.throws(() => { rentCar.calculatePriceOfCar(0, 0) }, "Invalid input!");
            assert.throws(() => { rentCar.calculatePriceOfCar([], 0) }, "Invalid input!");
            assert.throws(() => { rentCar.calculatePriceOfCar({}, 0) }, "Invalid input!");
            assert.throws(() => { rentCar.calculatePriceOfCar(undefined, 0) }, "Invalid input!");
        });

        it("the days input is number", function () {
            assert.throws(() => { rentCar.calculatePriceOfCar('Audi', '0') }, "Invalid input!");
            assert.throws(() => { rentCar.calculatePriceOfCar('Audi', 3.5) }, "Invalid input!");
            assert.throws(() => { rentCar.calculatePriceOfCar('Audi', []) }, "Invalid input!");
            assert.throws(() => { rentCar.calculatePriceOfCar('Audi', {}) }, "Invalid input!");
            assert.throws(() => { rentCar.calculatePriceOfCar('Audi', undefined) }, "Invalid input!");
        });

        it("throws an error if there is no such model", function () {
            assert.throws(() => { rentCar.calculatePriceOfCar('Mazda', 3) }, 'No such model in the catalog!');
        });

        it("works with correct input", function () {
            assert.equal(rentCar.calculatePriceOfCar('Audi', 3), 'You choose Audi and it will cost $108!');
        });
    });

    describe("tests checkBudget", function () {
        it("costPerDay input type is valid (number)", function () {
            assert.throws(() => { rentCar.checkBudget('0', 0, 0) }, "Invalid input!");
            assert.throws(() => { rentCar.checkBudget(1.2, 0, 0) }, "Invalid input!");
            assert.throws(() => { rentCar.checkBudget([], 0, 0) }, "Invalid input!");
            assert.throws(() => { rentCar.checkBudget({}, 0, 0) }, "Invalid input!");
        });

        it("days input type is valid (number)", function () {
            assert.throws(() => { rentCar.checkBudget(0, '0', 0) }, "Invalid input!");
            assert.throws(() => { rentCar.checkBudget(0, 1.2, 0) }, "Invalid input!");
            assert.throws(() => { rentCar.checkBudget(0, [], 0) }, "Invalid input!");
            assert.throws(() => { rentCar.checkBudget(0, {}, 0) }, "Invalid input!");
        });

        it("budget input type is valid (number)", function () {
            assert.throws(() => { rentCar.checkBudget(0, 0, '0') }, "Invalid input!");
            assert.throws(() => { rentCar.checkBudget(0, 0, 1.2) }, "Invalid input!");
            assert.throws(() => { rentCar.checkBudget(0, 0, []) }, "Invalid input!");
            assert.throws(() => { rentCar.checkBudget(0, 0, {}) }, "Invalid input!");
        });

        it("the budget is enough", function () {
            assert.equal(rentCar.checkBudget(1000, 3, 3000), 'You rent a car!');
            assert.equal(rentCar.checkBudget(1000, 3, 4000), 'You rent a car!');
        });

        it("the budget is not enough", function () {
            assert.equal(rentCar.checkBudget(1000, 3, 2999), 'You need a bigger budget!');
            assert.equal(rentCar.checkBudget(1000, 3, 2000), 'You need a bigger budget!');
        });
    });
});
