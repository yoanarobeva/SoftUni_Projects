const carService = require('./carService');
const { assert } = require('chai');

describe("Tests carService variable", function() {
    describe("Tests isItExpensive function", function() {

        it("works with issue values Engine and Transmission", function() {
            assert.equal(carService.isItExpensive('Engine'), `The issue with the car is more severe and it will cost more money`);
            assert.equal(carService.isItExpensive('Transmission'), `The issue with the car is more severe and it will cost more money`)
        });

        it("works with different issue value", function() {
            assert.equal(carService.isItExpensive('bodyWork'), `The overall price will be a bit cheaper`);
        });
    });

    describe("Tests discount function", function() {

        it("works with the numberOfParts range", function() {
            assert.equal(carService.discount(3, 10), `Discount applied! You saved 1.5$`);
            assert.equal(carService.discount(7, 10), `Discount applied! You saved 1.5$`);
            assert.equal(carService.discount(8, 10), `Discount applied! You saved 3$`);
            assert.equal(carService.discount(2, 10), "You cannot apply a discount");
        });

        it("input validation", function() {
            assert.throws(() => {carService.discount('', 0)});
            assert.throws(() => {carService.discount(0, '')});

        });
    });

    describe("Tests partsToBuy function", function() {
        it("works with valid input", function() {
            assert.equal(carService.partsToBuy([{ part: "blowoff valve", price: 145 }, { part: "coil springs", price: 230 }], ["blowoff valve", "injectors"]), 145);
        });

        it("dont work with empty partsCatalog", function() {
            assert.equal(carService.partsToBuy([], ["blowoff valve", "injectors"]), 0);
        });

        it("dont work with invalid parameters", function() {
            assert.throws(() => {carService.partsToBuy(0, ["blowoff valve", "injectors"])});
            assert.throws(() => {carService.partsToBuy('', ["blowoff valve", "injectors"])});
            assert.throws(() => {carService.partsToBuy({}, ["blowoff valve", "injectors"])});
            assert.throws(() => {carService.partsToBuy(undefined, ["blowoff valve", "injectors"])});
            assert.throw(() => {carService.partsToBuy([{ part: "blowoff valve", price: 145 }, { part: "coil springs", price: 230 }], 0)});
            assert.throw(() => {carService.partsToBuy([{ part: "blowoff valve", price: 145 }, { part: "coil springs", price: 230 }], '')});
            assert.throws(() => {carService.partsToBuy([{ part: "blowoff valve", price: 145 }, { part: "coil springs", price: 230 }], {})});
            assert.throws(() => {carService.partsToBuy([{ part: "blowoff valve", price: 145 }, { part: "coil springs", price: 230 }], undefined)});
        });
    });
});
