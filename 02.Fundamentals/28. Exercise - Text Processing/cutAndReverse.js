function cutAndReverse(input) {
    let firstWord  = input.slice( 0, input.length / 2).split("").reverse().join("");
    let secondWord = input.slice(input.length / 2).split("").reverse().join("");

    console.log(firstWord);
    console.log((secondWord));
}

cutAndReverse('tluciffiDsIsihTgnizamAoSsIsihT');