const library = require('./library');
const { assert } = require('chai');

describe("Tests library", function() {

    describe("calcPriceOfBook ", function() {

        it("nameOfBook input is correct(string)", function() {
            assert.throws(() => {library.calcPriceOfBook(0, 0)});
            assert.throws(() => {library.calcPriceOfBook([], 0)});
            assert.throws(() => {library.calcPriceOfBook({}, 0)});
        });

        it("year input is correct(string)", function() {
            assert.throws(() => {library.calcPriceOfBook('Book', '')});
            assert.throws(() => {library.calcPriceOfBook('Book', 1.1)});
            assert.throws(() => {library.calcPriceOfBook('Book', [])});
            assert.throws(() => {library.calcPriceOfBook('Book', {})});
        });

        it("happy path", function() {
            assert.equal(library.calcPriceOfBook("Book", 1981), `Price of Book is 20.00`)
        });

        it("happy path - edge", function() {
            assert.equal(library.calcPriceOfBook("Book", 1980), `Price of Book is 10.00`)
        });
    });

    describe("findBook", function() {

        it("happy path", function() {
            assert.equal(library.findBook(["Troy", "Life Style", "Torronto"], 'Troy'), "We found the book you want.");
        });

        it("if the book is missing", function() {
            assert.equal(library.findBook(["Troy", "Life Style", "Torronto"], 'Book'), "The book you are looking for is not here!");
        });

        it("throws an error if booksArr length is 0", function() {
            assert.throws(() => {library.findBook([], 'Troy')});
        });
    });

    describe("arrangeTheBooks", function() {

        it("the input is correct (number)", function() {
            assert.throws(() => {library.arrangeTheBooks(1.1)})
            assert.throws(() => {library.arrangeTheBooks(-1)})
            assert.throws(() => {library.arrangeTheBooks('')})
            assert.throws(() => {library.arrangeTheBooks([])})
            assert.throws(() => {library.arrangeTheBooks({})})
        });

        it('enough space', () => {
            assert.equal(library.arrangeTheBooks(1), "Great job, the books are arranged.");
        })

        it('enough space edge', () => {
            assert.equal(library.arrangeTheBooks(40), "Great job, the books are arranged.");
        })

        it('not enough space', () => {
            assert.equal(library.arrangeTheBooks(41), "Insufficient space, more shelves need to be purchased.");
        })
    });
});
