const createCalculator = require('./addSubtract');
const { assert } = require('chai');

describe ('test createCalculator', () => {
    it ('the function returns object', () => {
        assert.equal(typeof createCalculator(), 'object')
    })

    it ('the function keep value', () => {
        let initialValue = createCalculator().get();
        assert.equal(initialValue, 0)
    })

    it ('the function keep value 0', () => {
        assert.equal(createCalculator().value, undefined)
    })

    it ('type of get is function', () => {
        assert.equal(typeof createCalculator().get, 'function')
    })

    it ('type of add is function', () => {
        assert.equal(typeof createCalculator().add, 'function')
    })

    it ('type of subtract is function', () => {
        assert.equal(typeof createCalculator().subtract, 'function')
    })

    it ('get function is working', () => {
        assert.equal(createCalculator().get(), 0)
    })

    it ('add function is working', () => {
        let calc = createCalculator();
        calc.add(5)
        calc.add(3)
        assert.equal(calc.get(), 8)
    })

    it ('subtract function is working', () => {
        let calc = createCalculator();
        calc.subtract(5)
        calc.subtract(3)
        assert.equal(calc.get(), -8)
    })

    it ('the calculator is working with numeric values', () => {
        let calc = createCalculator();
        calc.add(10);
        calc.subtract(5)
        assert.equal(calc.get(), 5)
    })

    it ('the calculator is working with string values', () => {
        let calc = createCalculator();
        calc.add('10');
        calc.subtract('5')
        assert.equal(calc.get(), 5)
    })

    it ('the calculator is working with floating values', () => {
        let calc = createCalculator();
        calc.add(10.5);
        calc.subtract(5.5)
        assert.equal(calc.get(), 5)
    })

    it ('the calculator is not working with text string values', () => {
        let calc = createCalculator();
        calc.add('hi');
        assert.isNaN(calc.get())
    })
})