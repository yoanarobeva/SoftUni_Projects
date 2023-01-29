function password (input) {
    let index = 0;
    let userName = input[index];
    index++;
    let realPassword = input[index];
    index++;

    let currentPassword = input[index];

    while (true) {
        if (currentPassword == realPassword) {
            console.log(`Welcome ${userName}!`);
            break;
        }
        index++;
        currentPassword = input[index];
    }
}

password(["Gosho",
"secret",
"secret"])

