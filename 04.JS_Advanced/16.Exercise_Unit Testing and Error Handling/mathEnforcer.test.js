const { assert } = require('chai');
const mathEnforcer = require('./mathEnforcer')

describe('tests mathEnforcer', () => {
    describe('tests addFive', () => {
        it('the argument is number', () => {
            assert.equal(mathEnforcer.addFive('1'), undefined);
        })

        it('there is an argument', () => {
            assert.equal(mathEnforcer.addFive(), undefined);
        })

        it('works with correct number', () => {
            assert.equal(mathEnforcer.addFive(1), 6);
        })

        it('works with correct floating number', () => {
            assert.equal(mathEnforcer.addFive(1.5), 6.5);
        })

        it('works with correct negative numbers', () => {
            assert.equal(mathEnforcer.addFive(-1), 4);
        })
    })

    describe('tests subtractTen', () => {
        it('the argument is number', () => {
            assert.equal(mathEnforcer.subtractTen('1'), undefined);
        })

        it('there is an argument', () => {
            assert.equal(mathEnforcer.subtractTen(), undefined);
        })

        it('works with correct number', () => {
            assert.equal(mathEnforcer.subtractTen(20), 10);
        })

        it('works with correct floating number', () => {
            assert.equal(mathEnforcer.subtractTen(20.5), 10.5);
        })

        it('works with correct negative numbers', () => {
            assert.equal(mathEnforcer.subtractTen(-20), -30);
        })

        it('works when the argument is smaller', () => {
            assert.equal(mathEnforcer.subtractTen(5), -5);
        })
    })

    describe('tests sum', () => {
        it('the first argument is number', () => {
            assert.equal(mathEnforcer.sum('1', 0), undefined);
        })

        it('the second argument is number', () => {
            assert.equal(mathEnforcer.sum(0, '1'), undefined);
        })

        it('there is arguments', () => {
            assert.equal(mathEnforcer.sum(), undefined);
            assert.equal(mathEnforcer.sum(1), undefined);
        })

        it('works with correct number', () => {
            assert.equal(mathEnforcer.sum(5, 6), 11);
        })

        it('works with correct floating number', () => {
            assert.equal(mathEnforcer.sum(5.5, 6.5), 12);
        })

        it('works with correct negative numbers', () => {
            assert.equal(mathEnforcer.sum(-20, -10), -30);
        })
    })
})