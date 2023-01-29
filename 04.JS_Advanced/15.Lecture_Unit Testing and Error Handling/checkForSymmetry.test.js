const { assert } = require('chai');
const isSymmetric = require('./checkForSymmetry');

describe('test isSymmetric', () => {
    it('the argument is array', () => {
        assert.equal(isSymmetric([]), true);
    })

    it('incorrect input type object', () => {
        assert.equal(isSymmetric({}), false);
    })

    it('incorrect input type string', () => {
        assert.equal(isSymmetric(''), false);
    })

    it('incorrect input type number', () => {
        assert.equal(isSymmetric(0), false);
    })

    it('incorrect input type boolean', () => {
        assert.equal(isSymmetric(true), false);
    })

    it('the input array is symetric', () => {
        assert.equal(isSymmetric([1,2,3,2,1]), true);
    })

    it('the input array is symetric', () => {
        assert.equal(isSymmetric([1,2,2,1]), true);
    })

    it('returns false for type mismatch', () => {
        assert.equal(isSymmetric([1,'2',2,1]), false);
    })

    it('the input array is symetric', () => {
        assert.equal(isSymmetric([1,2,3,4,5]), false);
    })

    it('the input array is symetric', () => {
        assert.equal(isSymmetric([0]), true);
    })

    it('the input array is not symetric because of the types in it', () => {
        assert.equal(isSymmetric([1,2,3,'4',5]), false);
    })

    it('the input array of strings is symetric', () => {
        assert.equal(isSymmetric(['a', 'b', 'a']), true);
    })

    it('the input array of strings is symetric', () => {
        assert.equal(isSymmetric('aba'), false);
    })
})