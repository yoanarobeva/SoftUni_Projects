const { assert } = require('chai');
const rgbToHexColor = require('./rGBToHex');

describe('test rgb to hex colors function', () => {
    it('works with three numeric values as an argument,color black', () => {
        assert.equal(rgbToHexColor(0,0,0), '#000000')
    })

    it('works with three numeric values as an argument,color white', () => {
        assert.equal(rgbToHexColor(255,255,255), '#FFFFFF')
    })

    it('work with every color', () => {
        assert.equal(rgbToHexColor(167, 41, 32), '#A72920')
    })

    it('dont work with strings', () => {
        assert.equal(rgbToHexColor('0', 0, 0), undefined)
        assert.equal(rgbToHexColor(0,'0', 0), undefined)
        assert.equal(rgbToHexColor(0, 0,'0'), undefined)
    })

    it('dont work with values out ot upper bound', () => {
        assert.equal(rgbToHexColor(300, 0, 0), undefined)
        assert.equal(rgbToHexColor(0, 300, 0), undefined)
        assert.equal(rgbToHexColor(0, 0, 300), undefined)
    })

    it('dont work with negative values', () => {
        assert.equal(rgbToHexColor(-1, 0, 0), undefined)
        assert.equal(rgbToHexColor(0, -1, 0), undefined)
        assert.equal(rgbToHexColor(0, 0, -1), undefined)
    })

    it('dont work with missing argument', () => {
        assert.equal(rgbToHexColor(0), undefined)
        assert.equal(rgbToHexColor(0, 0), undefined)
        assert.equal(rgbToHexColor(), undefined)
    })

    it('dont work with floating numbers', () => {
        assert.equal(rgbToHexColor(1.5, 0, 0), undefined)
        assert.equal(rgbToHexColor(0, 1.5, 0), undefined)
        assert.equal(rgbToHexColor(0, 0, 1.5), undefined)
    })

    it('dont work with array input', () => {
        assert.equal(rgbToHexColor([1,1,1]), undefined)
    })

    it('puts a "0" before', () => {
        assert.notEqual(rgbToHexColor(1,5,1), '#151')
    })
})