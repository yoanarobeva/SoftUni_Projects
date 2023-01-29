const companyAdministration = require('./companyAdministration');
const { assert } = require('chai');

describe("Tests companyAdministration", function() {

    describe("tests hiringEmployee function", function() {

        it("the position is programmer", function() {
            assert.throws(() => { companyAdministration.hiringEmployee('Yoana', 'Architect', 6)}, 'We are not looking for workers for this position.')
        });

        it("yearsExperience is more or equal to 3", function() {
            assert.equal(companyAdministration.hiringEmployee('Yoana', 'Programmer', 3),`Yoana was successfully hired for the position Programmer.`)
        });

        it("yearsExperience is less than 3", function() {
            assert.equal(companyAdministration.hiringEmployee('Yoana', 'Programmer', 2),'Yoana is not approved for this position.')
        });
    });

    describe("tests calculateSalary function", function() {

        it("the input is valid", function() {
            assert.throws(() => {companyAdministration.calculateSalary("0")}, "Invalid hours");
            assert.throws(() => {companyAdministration.calculateSalary(-1)}, "Invalid hours");
            assert.throws(() => {companyAdministration.calculateSalary([])}, "Invalid hours");
            assert.throws(() => {companyAdministration.calculateSalary({})}, "Invalid hours");
            assert.throws(() => {companyAdministration.calculateSalary(undefined)}, "Invalid hours");
        });

        it("works with input less than 160 hours", function() {
            assert.equal(companyAdministration.calculateSalary(160), 2400);
        });

        it("works with input more than 160 hours", function() {
            assert.equal(companyAdministration.calculateSalary(161), 3415);
        });
    });

    describe("tests firedEmployee function", function() {

        it("employees input is correct(array)", function() {
            assert.throws(() => {companyAdministration.firedEmployee(0, 0)}, "Invalid input");
            assert.throws(() => {companyAdministration.firedEmployee('', 0)}, "Invalid input");
            assert.throws(() => {companyAdministration.firedEmployee({}, 0)}, "Invalid input");
            assert.throws(() => {companyAdministration.firedEmployee(1.5, 0)}, "Invalid input");
        });

        it("index input is correct(number, in array range)", function() {
            assert.throws(() => {companyAdministration.firedEmployee(['abc', 'def', 'ghi'], 3)}, "Invalid input");
            assert.throws(() => {companyAdministration.firedEmployee(['abc', 'def', 'ghi'], -1)}, "Invalid input");
            assert.throws(() => {companyAdministration.firedEmployee(['abc', 'def', 'ghi'], '3')}, "Invalid input");
            assert.throws(() => {companyAdministration.firedEmployee(['abc', 'def', 'ghi'], [])}, "Invalid input");
            assert.throws(() => {companyAdministration.firedEmployee(['abc', 'def', 'ghi'], {})}, "Invalid input");
            assert.throws(() => {companyAdministration.firedEmployee(['abc', 'def', 'ghi'], 3.5)}, "Invalid input");
            assert.throws(() => {companyAdministration.firedEmployee(['abc', 'def', 'ghi'], undefined)}, "Invalid input");
        });

        it("works with correct input", function() {
            assert.equal(companyAdministration.firedEmployee(["Petar", "Ivan", "George"], 1), "Petar, George");
        });
    });
});
