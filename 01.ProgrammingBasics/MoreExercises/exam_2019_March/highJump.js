function highJump (input) {
    let index = 0;
    let goal = Number(input[index]);
    index++
    let currentJump = Number(input[index]);

    let startHeigth = goal - 30;
    let jumpCounter = 1;
    let failedJump = 0;

    while (true) {

        if (currentJump > startHeigth) {
            if (startHeigth >= goal) {
                console.log(`Tihomir succeeded, he jumped over ${goal}cm after ${jumpCounter} jumps.`);
                return;
            }
            startHeigth += 5;
            failedJump = 0;
            
        } else {
            failedJump++;
            if (failedJump === 3) {
                console.log(`Tihomir failed at ${startHeigth}cm after ${jumpCounter} jumps.`);
                return;
            }
            
        }

        index++;
        currentJump = Number(input[index]);
        jumpCounter++;
    }
}

highJump(["250",
"225",
"224",
"225",
"228",
"231",
"235",
"234",
"235"])




