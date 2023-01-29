function sumSeconds(input) {
    let secOne = Number (input[0]);
    let secTwo = Number (input[1]);
    let secThree = Number (input[2]);
    
    let totalTime = secOne + secTwo + secThree;

    let minutes = Math.trunc(totalTime / 60);
    let seconds = totalTime % 60;

    if(seconds < 10) {
        console.log(`${minutes}:0${seconds}`);
    } else {
        console.log(`${minutes}:${seconds}`);
    }

}

sumSeconds(["35",
"45",
"44"])
