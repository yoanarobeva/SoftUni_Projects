const bookSelection = require('./bookSelection');
const { assert } = require('chai')

describe("Tests bookSelection", function() {
    describe("tests isGenreSuitable function", function() {

        it("works with not suitable for kids case", function() {
            assert.equal(bookSelection.isGenreSuitable('Thriller', 12), `Books with Thriller genre are not suitable for kids at 12 age`);
            assert.equal(bookSelection.isGenreSuitable('Horror', 12), `Books with Horror genre are not suitable for kids at 12 age`);
        });

        it("works with suitable for kids case", function() {
            assert.equal(bookSelection.isGenreSuitable('Comedy', 12), `Those books are suitable`);
            assert.equal(bookSelection.isGenreSuitable('Thriller', 13), `Those books are suitable`);
            assert.equal(bookSelection.isGenreSuitable('Horror', 13), `Those books are suitable`);
        });
    });

    describe("tests isItAffordable function", function() {

        it("the input is correct", function() {
            assert.throws(() => {bookSelection.isItAffordable('', 0)});
            assert.throws(() => {bookSelection.isItAffordable([], 0)});
            assert.throws(() => {bookSelection.isItAffordable({}, 0)});
            assert.throws(() => {bookSelection.isItAffordable()});
            assert.throws(() => {bookSelection.isItAffordable(0)});
            assert.throws(() => {bookSelection.isItAffordable(0, '')});
            assert.throws(() => {bookSelection.isItAffordable(0, [])});
            assert.throws(() => {bookSelection.isItAffordable(0, {})});
            assert.throws(() => {bookSelection.isItAffordable('', '')});
        });

        it("the function works correctly", function() {
            assert.equal(bookSelection.isItAffordable(5, 10),`Book bought. You have 5$ left`);
            assert.equal(bookSelection.isItAffordable(11, 10),"You don't have enough money");
        });

    });

    describe("tests suitableTitles function", function() {

        it("the input is correct", function() {
            assert.throws(() => {bookSelection.suitableTitles([{ title: "The Da Vinci Code", genre: "Thriller" }], 0)})
            assert.throws(() => {bookSelection.suitableTitles([{ title: "The Da Vinci Code", genre: "Thriller" }], [])})
            assert.throws(() => {bookSelection.suitableTitles([{ title: "The Da Vinci Code", genre: "Thriller" }], {})})
            assert.throws(() => {bookSelection.suitableTitles(0, 'Thriller')});
            assert.throws(() => {bookSelection.suitableTitles('', 'Thriller')});
            assert.throws(() => {bookSelection.suitableTitles({}, 'Thriller')});
        });

        it("the function works correctly", function() {
            assert(bookSelection.suitableTitles([{ title: "The Da Vinci Code", genre: "Thriller" }, { title: "The Matrix", genre: "Thriller" }],`Thriller`),[ "The Da Vinci Code", "The Matrix" ]);
        });

    });
 
});
