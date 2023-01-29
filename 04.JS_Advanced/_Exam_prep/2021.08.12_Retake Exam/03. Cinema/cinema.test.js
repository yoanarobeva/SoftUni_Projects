const cinema = require('./cinema');
const { assert } = require('chai');

describe("Tests cinema", function() {

    describe("showMovies", function() {
        
        it("happy path", function() {
            assert.equal(cinema.showMovies(["King Kong", "The Tomorrow War", "Joker"]), "King Kong, The Tomorrow War, Joker")
        });

        it("the array length is 0", function() {
            assert.equal(cinema.showMovies([]), "There are currently no movies to show.");
        });
    });

    describe("ticketPrice", function() {
        
        it("happy path", function() {
            assert.equal(cinema.ticketPrice('Normal'), 7.50);
            assert.equal(cinema.ticketPrice('Premiere'), 12.00);
            assert.equal(cinema.ticketPrice('Discount'), 5.50);
        });

        it("the type is not present", function() {
            assert.throw(() => {cinema.ticketPrice('Other')});
        });
    });

    describe("swapSeatsInHall", function() {
        
        it("firstPlace is correct input (number)", function() {
            assert.equal(cinema.swapSeatsInHall(0.1, 1), "Unsuccessful change of seats in the hall.")
            assert.equal(cinema.swapSeatsInHall('', 1), "Unsuccessful change of seats in the hall.")
            assert.equal(cinema.swapSeatsInHall([], 1), "Unsuccessful change of seats in the hall.")
            assert.equal(cinema.swapSeatsInHall({}, 1), "Unsuccessful change of seats in the hall.")
            assert.equal(cinema.swapSeatsInHall(100, 1), "Unsuccessful change of seats in the hall.")
            assert.equal(cinema.swapSeatsInHall(-1, 1), "Unsuccessful change of seats in the hall.")
            assert.equal(cinema.swapSeatsInHall(NaN, 1), "Unsuccessful change of seats in the hall.")
            assert.equal(cinema.swapSeatsInHall(undefined, 1), "Unsuccessful change of seats in the hall.")
        });

        it("firstPlace is correct input (number) edge values", function() {
            assert.equal(cinema.swapSeatsInHall(21, 1), "Unsuccessful change of seats in the hall.")
            assert.equal(cinema.swapSeatsInHall(0, 1), "Unsuccessful change of seats in the hall.")
        });


        it("secondPlace is correct input (number)", function() {
            assert.equal(cinema.swapSeatsInHall(1, 0.1), "Unsuccessful change of seats in the hall.")
            assert.equal(cinema.swapSeatsInHall(1, ''), "Unsuccessful change of seats in the hall." );
            assert.equal(cinema.swapSeatsInHall(1, []), "Unsuccessful change of seats in the hall." );
            assert.equal(cinema.swapSeatsInHall(1, {}), "Unsuccessful change of seats in the hall." );
            assert.equal(cinema.swapSeatsInHall(1, 100), "Unsuccessful change of seats in the hall." );
            assert.equal(cinema.swapSeatsInHall(1, -1), "Unsuccessful change of seats in the hall." );
            assert.equal(cinema.swapSeatsInHall(1, NaN), "Unsuccessful change of seats in the hall." );
            assert.equal(cinema.swapSeatsInHall(1, undefined), "Unsuccessful change of seats in the hall." );
        });
        
        it("secondPlace is correct input (number) edge values", function() {
            assert.equal(cinema.swapSeatsInHall(1, 21), "Unsuccessful change of seats in the hall." )
            assert.equal(cinema.swapSeatsInHall(1, 0), "Unsuccessful change of seats in the hall." )
        });

        it("both are incorrect", function() {
            assert.equal(cinema.swapSeatsInHall('', ''), "Unsuccessful change of seats in the hall.")
            assert.equal(cinema.swapSeatsInHall(0, 0), "Unsuccessful change of seats in the hall.")
            assert.equal(cinema.swapSeatsInHall(21, 21), "Unsuccessful change of seats in the hall.")
            assert.equal(cinema.swapSeatsInHall(1.1, 1.1), "Unsuccessful change of seats in the hall.")
            assert.equal(cinema.swapSeatsInHall(-1, -1), "Unsuccessful change of seats in the hall.")
        });

        it("secondPlace = firstPlace", function() {
            assert.equal(cinema.swapSeatsInHall(1, 1), "Unsuccessful change of seats in the hall." )
        });

        it("happy path", function() {
            assert.equal(cinema.swapSeatsInHall(1, 2), "Successful change of seats in the hall." );
            assert.equal(cinema.swapSeatsInHall(19, 20), "Successful change of seats in the hall." );
        });

        it("happy path edge", function() {
            assert.equal(cinema.swapSeatsInHall(19, 20), "Successful change of seats in the hall." );
        });

    });
});

