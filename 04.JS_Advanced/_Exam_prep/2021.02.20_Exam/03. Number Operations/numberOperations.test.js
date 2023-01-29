const numberOperations = require('./numberOperations');
const { assert } = require('chai');

describe("Tests numberOperations", function() {
    describe("powNumber", function() {

        it("happy path", function() {
            assert.equal(numberOperations.powNumber(2), 4);
            assert.equal(numberOperations.powNumber(0), 0);
        });
    });

    describe("numberChecker", function() {  
        it("the parsed input is not a number", function() {
            assert.throws(() => {numberOperations.numberChecker('a')});
            assert.throws(() => {numberOperations.numberChecker(NaN)});
        });

        it("lower than 100", function() {
            assert.equal(numberOperations.numberChecker(99), "The number is lower than 100!");
            assert.equal(numberOperations.numberChecker('99'), "The number is lower than 100!");
        });

        it("lower than 100, min safe int", function() {
            assert.equal(numberOperations.numberChecker(Number.MIN_SAFE_INTEGER), "The number is lower than 100!");
        });

        it("lower than 100, negative", function() {
            assert.equal(numberOperations.numberChecker(-1), "The number is lower than 100!");
            assert.equal(numberOperations.numberChecker('-1'), "The number is lower than 100!");
        });

        it("lower than 100, 0", function() {
            assert.equal(numberOperations.numberChecker(0), "The number is lower than 100!");
            assert.equal(numberOperations.numberChecker('0'), "The number is lower than 100!");
        });

        it("lower than 100, floating num", function() {
            assert.equal(numberOperations.numberChecker(1.1), "The number is lower than 100!");
            assert.equal(numberOperations.numberChecker('1.1'), "The number is lower than 100!");
        });

        it("greater than 100", function() {
            assert.equal(numberOperations.numberChecker(101), "The number is greater or equal to 100!");
            assert.equal(numberOperations.numberChecker('101'), "The number is greater or equal to 100!");
        });

        it("greater than 100, edge", function() {
            assert.equal(numberOperations.numberChecker(100), "The number is greater or equal to 100!");
            assert.equal(numberOperations.numberChecker('100'), "The number is greater or equal to 100!");
        });

        it("greater than 100, float", function() {
            assert.equal(numberOperations.numberChecker(101.1), "The number is greater or equal to 100!");
            assert.equal(numberOperations.numberChecker('101.1'), "The number is greater or equal to 100!");
        });

        it("greater than 100, big integer", function() {
            assert.equal(numberOperations.numberChecker(Number.MAX_SAFE_INTEGER), "The number is greater or equal to 100!");
        });
    });

    describe("sumArrays", function() {
        
        it("happy path", function() {
            assert.deepEqual(numberOperations.sumArrays([1,2,3], [4,5,6]), [5,7,9]);
        });

        it("different length", function() {
            assert.deepEqual(numberOperations.sumArrays([1,2,3,4], [4,5,6]), [5,7,9,4]);
            assert.deepEqual(numberOperations.sumArrays([1,2,3], [4,5,6,7]), [5,7,9,7]);
        });

        it("happy path, float", function() {
            assert.deepEqual(numberOperations.sumArrays([1.1], [1.1]), [2.2]);
        });

        it("happy path, negative", function() {
            assert.deepEqual(numberOperations.sumArrays([-1,-2], [-1,-2]), [-2,-4]);
        });
    });
});
