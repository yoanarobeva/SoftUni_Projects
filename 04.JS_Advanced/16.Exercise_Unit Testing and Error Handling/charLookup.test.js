const { assert } = require('chai');
const lookupChar = require('./charLookup');

describe('test char lookup', () => {
    it('function doesnt work with incorrect input', () => {
        assert.equal(lookupChar(1, 'a'), undefined);
        assert.equal(lookupChar(1, 0), undefined);
        assert.equal(lookupChar('a', '1'), undefined);
        assert.equal(lookupChar([1,2,3], 0), undefined);
        assert.equal(lookupChar({}, 0), undefined);
        assert.equal(lookupChar(undefined, 0), undefined);
        assert.equal(lookupChar('abc', []), undefined);
        assert.equal(lookupChar('abc', null), undefined);
        assert.equal(lookupChar('abc', NaN), undefined);
    })

    it('function doesnt work without input', () => {
        assert.equal(lookupChar(), undefined);
    })

    it('function doesnt work with empty string', () => {
        assert.equal(lookupChar('', 0), undefined);
    })

    it('function doesnt work without index', () => {
        assert.equal(lookupChar('abc'), undefined);
    })

    it('function doesnt work with index outside the upper bound', () => {
        assert.equal(lookupChar('abc', 3), 'Incorrect index');
    })

    it('function doesnt work with index outside the down bound', () => {
        assert.equal(lookupChar('abc', -1), 'Incorrect index');
    })

    it('function doesnt work with float number index', () => {
        assert.equal(lookupChar('abc', 1.3), 'Incorrect index');
    })

    it('function works with correct input', () => {
        assert.equal(lookupChar('abc', 0), 'a');
    })

    it('function works with correct input', () => {
        assert.equal(lookupChar('abcdefg', 3), 'd');
    })
})