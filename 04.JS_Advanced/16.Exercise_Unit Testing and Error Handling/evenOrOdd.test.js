const { assert } = require('chai');
const isOddOrEven = require('./evenOrOdd');

describe('tests isOddOrEven', () => {
    it('the function works with even string lengths', () => {
        assert.equal(isOddOrEven('aa'), 'even');
    })

    it('the function works with odd string lengths', () => {
        assert.equal(isOddOrEven('a'), 'odd');
    })

    it('the function works correctly', () => {
        assert.equal(isOddOrEven('really'), 'even');
        assert.equal(isOddOrEven('works'), 'odd')
    })

    it('the function doesnt work with input that is not string', () => {
        assert.equal(isOddOrEven(1), undefined);
        assert.equal(isOddOrEven({}), undefined);
        assert.equal(isOddOrEven([]), undefined);
        assert.equal(isOddOrEven(), undefined);
    })
})