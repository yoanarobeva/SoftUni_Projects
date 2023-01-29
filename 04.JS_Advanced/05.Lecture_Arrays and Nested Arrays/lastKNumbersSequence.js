function lastKNumbersSequence(n, k) {
    let sequence = [1,1];

    for (let i = 2; i < n; i++) {
        let nextNumbers = sequence.slice(-k);
        let num = nextNumbers.reduce((a, b) => a + b);
        sequence.push(num)
    }

   // console.log(sequence);
   return sequence;
}

lastKNumbersSequence(6, 3);
console.log('_________');
lastKNumbersSequence(8, 2);