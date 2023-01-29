const testNumbers = require('./testNumbers');
const { assert } = require('chai');

describe("Tests testNumbers", function() {

    describe("sumNumber", function() {

        it("num1 is number", function() {
            assert.equal(testNumbers.sumNumbers('', 0), undefined);
            assert.equal(testNumbers.sumNumbers([], 0), undefined);
            assert.equal(testNumbers.sumNumbers({}, 0), undefined);
        });

        it("num2 is number", function() {
            assert.equal(testNumbers.sumNumbers(0, ''), undefined);
            assert.equal(testNumbers.sumNumbers(0, []), undefined);
            assert.equal(testNumbers.sumNumbers(0, {}), undefined);
        });

        it("num1 and num 2 are numbers", function() {
            assert.equal(testNumbers.sumNumbers('', ''), undefined);
            assert.equal(testNumbers.sumNumbers([], []), undefined);
            assert.equal(testNumbers.sumNumbers({}, {}), undefined);
        });

        it("happy path edge", function() {
            assert.equal(testNumbers.sumNumbers(0, 0), 0.00);
            assert.equal(testNumbers.sumNumbers(-1, -1), -2.00);
            assert.equal(testNumbers.sumNumbers(0.5, 0.5), 1.00);
        });

        it("happy path edge", function() {
            assert.equal(testNumbers.sumNumbers(3, 5), 8.00);
        });

    });

    describe("numberChecker", function() {
        
        it("throws an error if the input cant be parsed to number", function() {
            assert.throws(() => {testNumbers.numberChecker('a')});
            assert.throws(() => {testNumbers.numberChecker(NaN)});
            //assert.throws(() => {testNumbers.numberChecker('')});
            //assert.throws(() => {testNumbers.numberChecker([])});
            assert.throws(() => {testNumbers.numberChecker({})});
        });

        it("the input can be parsed to number and is odd", function() {
            assert.equal(testNumbers.numberChecker('1'),"The number is odd!");
            assert.equal(testNumbers.numberChecker(1),"The number is odd!");
            assert.equal(testNumbers.numberChecker(1.1),"The number is odd!");
        });
        
        it("the input can be parsed to number and is even", function() {
            assert.equal(testNumbers.numberChecker('2'),"The number is even!");
            assert.equal(testNumbers.numberChecker(2),"The number is even!");
        });
    });

    describe("averageSumArray", function() {
        
        it("happy path", function() {
            assert.equal(testNumbers.averageSumArray([1,1,1,1]), 1);
            assert.equal(testNumbers.averageSumArray([1,2,3,4]), 2.5);
        });
    });
});
