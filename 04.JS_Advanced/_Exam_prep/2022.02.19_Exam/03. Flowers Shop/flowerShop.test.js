const flowerShop = require('./flowerShop');
const { assert } = require('chai');

describe("Tests flowerShop", function () {

    describe("tests calcPriceOfFlowers function", function () {
        it("type of flower is string", function () {
            assert.throws(() => { flowerShop.calcPriceOfFlowers(0, 0, 0) }, "Invalid input!");
            assert.throws(() => { flowerShop.calcPriceOfFlowers([], 0, 0) }, "Invalid input!");
            assert.throws(() => { flowerShop.calcPriceOfFlowers({}, 0, 0) }, "Invalid input!");
            assert.throws(() => { flowerShop.calcPriceOfFlowers(undefined, 0, 0) }, "Invalid input!");
        });

        it("type of price is number", function () {
            assert.throws(() => { flowerShop.calcPriceOfFlowers('Rose', '0', 0) }, "Invalid input!");
            assert.throws(() => { flowerShop.calcPriceOfFlowers('Rose', [], 0) }, "Invalid input!");
            assert.throws(() => { flowerShop.calcPriceOfFlowers('Rose', {}, 0) }, "Invalid input!");
            assert.throws(() => { flowerShop.calcPriceOfFlowers('Rose', undefined, 0) }, "Invalid input!");
        });

        it("type of quantity is number", function () {
            assert.throws(() => { flowerShop.calcPriceOfFlowers('Rose', 0, '0') }, "Invalid input!");
            assert.throws(() => { flowerShop.calcPriceOfFlowers('Rose', 0, []) }, "Invalid input!");
            assert.throws(() => { flowerShop.calcPriceOfFlowers('Rose', 0, {}) }, "Invalid input!");
            assert.throws(() => { flowerShop.calcPriceOfFlowers('Rose', 0, {}) }, "Invalid input!");
        });

        it("the result is rounded to second digit after the decimal point", function () {
            assert.equal(flowerShop.calcPriceOfFlowers('Rose', 2, 1), `You need $2.00 to buy Rose!`);
            assert.notEqual(flowerShop.calcPriceOfFlowers('Rose', 2, 1), `You need $2 to buy Rose!`);
        });

    });

    describe("tests checkFlowersAvailable function", function () {

        it("works correctly with present flower", function () {
            assert.equal(flowerShop.checkFlowersAvailable("Rose", ["Rose", "Lily", "Orchid"]), `The Rose are available!`)
        });

        it("works correctly with not present flower", function () {
            assert.equal(flowerShop.checkFlowersAvailable("Tulip", ["Rose", "Lily", "Orchid"]), `The Tulip are sold! You need to purchase more!`)
        });
    });

    describe("tests sellFlowers function", function () {

        it("type of gardenArr is array", function () {
            assert.throws(() => { flowerShop.sellFlowers('', 0) }, "Invalid input!");
            assert.throws(() => { flowerShop.sellFlowers(0, 0) }, "Invalid input!");
            assert.throws(() => { flowerShop.sellFlowers({}, 0) }, "Invalid input!");
            assert.throws(() => { flowerShop.sellFlowers(undefined, 0) }, "Invalid input!");
        });

        it("type of space is number", function () {
            assert.throws(() => { flowerShop.sellFlowers(["Rose", "Lily", "Orchid"], '0') }, "Invalid input!");
            assert.throws(() => { flowerShop.sellFlowers(["Rose", "Lily", "Orchid"], []) }, "Invalid input!");
            assert.throws(() => { flowerShop.sellFlowers(["Rose", "Lily", "Orchid"], {}) }, "Invalid input!");
            assert.throws(() => { flowerShop.sellFlowers(["Rose", "Lily", "Orchid"], 1.5) }, "Invalid input!");
            assert.throws(() => { flowerShop.sellFlowers(["Rose", "Lily", "Orchid"], undefined) }, "Invalid input!");
        });

        it("space is in gardenArr indexes range", function () {
            assert.throws(() => { flowerShop.sellFlowers(["Rose", "Lily", "Orchid"], -1) }, "Invalid input!");
            assert.throws(() => { flowerShop.sellFlowers(["Rose", "Lily", "Orchid"], 3) }, "Invalid input!");
        });

        it("works correctly with present flower", function () {
            assert.equal(flowerShop.sellFlowers(["Rose", "Lily", "Orchid"], 0), 'Lily / Orchid');
        });

    });
});
