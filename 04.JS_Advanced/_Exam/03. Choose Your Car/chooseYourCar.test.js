const chooseYourCar = require('./chooseYourCar');
const { assert } = require('chai');

describe("chooseYourCar", function() {

    describe("choosingType", function() {

        it("throws error with invalid year", function() {
            assert.throws(() => {chooseYourCar.choosingType('Sedan', 'green', 1899)});
            assert.throws(() => {chooseYourCar.choosingType('Sedan', 'green', 2023)});
        });

        it("throws error with different from sedan type", function() {
            assert.throws(() => {chooseYourCar.choosingType('Hatchback', 'green', 2000)});
        });

        it("the year is greater or equal to 2010", function() {
            assert.equal(chooseYourCar.choosingType('Sedan', 'green', 2020), 'This green Sedan meets the requirements, that you have.');
        });

        it("the year is greater or equal to 2010, edge case", function() {
            assert.equal(chooseYourCar.choosingType('Sedan', 'green', 2010), 'This green Sedan meets the requirements, that you have.');
        });

        it("the year is less than 2010", function() {
            assert.equal(chooseYourCar.choosingType('Sedan', 'green', 2009), 'This Sedan is too old for you, especially with that green color.');
        });
    });

    describe("brandName", function() {

        it("removing brand works, happy path", function() {
            assert.equal(chooseYourCar.brandName(["BMW", "Toyota", "Peugeot"], 1), 'BMW, Peugeot');
        });

        it("works with array with length 1", function() {
            assert.equal(chooseYourCar.brandName(["BMW"], 0), '');
        });

        it("the brands is array validation", function() {
            assert.throws(() => {chooseYourCar.brandName('abc', 0)});
            assert.throws(() => {chooseYourCar.brandName(0, 0)});
            assert.throws(() => {chooseYourCar.brandName({}, 0)});
            assert.throws(() => {chooseYourCar.brandName([], 0)});
        });

        it("the index is a number in array.length range validation", function() {
            assert.throws(() => {chooseYourCar.brandName(["BMW", "Toyota", "Peugeot"], -1)});
            assert.throws(() => {chooseYourCar.brandName(["BMW", "Toyota", "Peugeot"], 3)});
            assert.throws(() => {chooseYourCar.brandName(["BMW", "Toyota", "Peugeot"], 100)});
            assert.throws(() => {chooseYourCar.brandName(["BMW", "Toyota", "Peugeot"], NaN)});
            assert.throws(() => {chooseYourCar.brandName(["BMW", "Toyota", "Peugeot"])});
            assert.throws(() => {chooseYourCar.brandName(["BMW", "Toyota", "Peugeot"], '0')});
            assert.throws(() => {chooseYourCar.brandName(["BMW", "Toyota", "Peugeot"], [])});
            assert.throws(() => {chooseYourCar.brandName(["BMW", "Toyota", "Peugeot"], 0.2)});
            assert.throws(() => {chooseYourCar.brandName(["BMW", "Toyota", "Peugeot"], {})});
        });
    });

    describe("CarFuelConsumption", function() {

        it("happy path, less than 7L", function() {
            assert.equal(chooseYourCar.carFuelConsumption(100, 4), "The car is efficient enough, it burns 4.00 liters/100 km.")
            assert.equal(chooseYourCar.carFuelConsumption(200, 8), "The car is efficient enough, it burns 4.00 liters/100 km.")
        });

        it("happy path, less than 7L, edge case", function() {
            assert.equal(chooseYourCar.carFuelConsumption(100, 7), "The car is efficient enough, it burns 7.00 liters/100 km.")
            assert.equal(chooseYourCar.carFuelConsumption(200, 14), "The car is efficient enough, it burns 7.00 liters/100 km.")
        });

        it("happy path, less than 7L, its toFixed", function() {
            assert.notEqual(chooseYourCar.carFuelConsumption(100, 7), "The car is efficient enough, it burns 7 liters/100 km.")
            assert.notEqual(chooseYourCar.carFuelConsumption(200, 14), "The car is efficient enough, it burns 7 liters/100 km.")
        });

        it("more than 7L", function() {
            assert.equal(chooseYourCar.carFuelConsumption(100, 8), "The car burns too much fuel - 8.00 liters!")
            assert.equal(chooseYourCar.carFuelConsumption(200, 16), "The car burns too much fuel - 8.00 liters!")
        });

        it("more than 7L, its toFixed", function() {
            assert.notEqual(chooseYourCar.carFuelConsumption(100, 8), "The car burns too much fuel - 8 liters!")
            assert.notEqual(chooseYourCar.carFuelConsumption(200, 16), "The car burns too much fuel - 8 liters!")
        });

        it("the distance is number", function() {
            assert.throws(() => {chooseYourCar.carFuelConsumption('1', 1)});
            assert.throws(() => {chooseYourCar.carFuelConsumption('a', 1)});
            assert.throws(() => {chooseYourCar.carFuelConsumption([], 1)});
            assert.throws(() => {chooseYourCar.carFuelConsumption({}, 1)});
            assert.throws(() => {chooseYourCar.carFuelConsumption(undefined, 1)});
            assert.throws(() => {chooseYourCar.carFuelConsumption(-1, 1)});
            assert.throws(() => {chooseYourCar.carFuelConsumption(0, 1)});
        });

        it("the liters is number", function() {
            assert.throws(() => {chooseYourCar.carFuelConsumption(1, '1')});
            assert.throws(() => {chooseYourCar.carFuelConsumption(1, 'a')});
            assert.throws(() => {chooseYourCar.carFuelConsumption(1, [])});
            assert.throws(() => {chooseYourCar.carFuelConsumption(1, {})});
            assert.throws(() => {chooseYourCar.carFuelConsumption(1, undefined)});
            assert.throws(() => {chooseYourCar.carFuelConsumption(1, 0)});
            assert.throws(() => {chooseYourCar.carFuelConsumption(1, -1)});
        });

        it("the input is correct", function() {
            assert.throws(() => {chooseYourCar.carFuelConsumption()});
            assert.throws(() => {chooseYourCar.carFuelConsumption(1)});
            assert.throws(() => {chooseYourCar.carFuelConsumption('1', '1')});
            assert.throws(() => {chooseYourCar.carFuelConsumption([], [])});
            assert.throws(() => {chooseYourCar.carFuelConsumption({}, {})});
            assert.throws(() => {chooseYourCar.carFuelConsumption(0, 0)});
            assert.throws(() => {chooseYourCar.carFuelConsumption(-1, -1)});
        });
    });
});
