function solution() {
    let initialString = '';

    function append(string) {
        return initialString += string;
        
    }

    function removeStart(n) {
        return initialString = initialString.substring(n);
        
    }

    function removeEnd(n) {
        return initialString = initialString.substring(0, initialString.length - n);
        
    }

    function print() {
        return console.log(initialString);
    }

    return {
        append,
        removeStart,
        removeEnd,
        print
    }
}

let firstZeroTest = solution();

firstZeroTest.append('hello');
firstZeroTest.append('again');
firstZeroTest.removeStart(3);
firstZeroTest.removeEnd(4);
firstZeroTest.print();

let secondZeroTest = solution();

secondZeroTest.append('123');
secondZeroTest.append('45');
secondZeroTest.removeStart(2);
secondZeroTest.removeEnd(1);
secondZeroTest.print();

