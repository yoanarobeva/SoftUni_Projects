const { assert } = require('chai');
const sum = require('./sumOfNumbers');

describe('sum test', function () {
    it('the input is array of numbers', () => {
        assert.equal(sum([0, 0]), 0)
    })

    it('the input sums the array of numbers', () => {
        assert.equal(sum([1, 2, 3]), 6)
    })

    it('the array contains numbers as strings', () => {
        assert.equal(sum([1, '2', 3]), 6)
    })
})