function oldBooks (input) {
    let index = 0;
    let favouriteBook = input[index];
    index++;

    let bookCounter = 0;

    while (true) {
        let currentBook = input[index];
        if (currentBook === favouriteBook) {
            console.log(`You checked ${bookCounter} books and found it.`);
            break;
        } else if(currentBook === "No More Books"){
            console.log(`The book you search is not here!`);
            console.log(`You checked ${bookCounter} books.`);
            break;
        } else {
            index++;
            bookCounter++;
        }
    }
}

oldBooks(["Bourne",
"True Story",
"Forever",
"More Space",
"The Girl",
"Spaceship",
"Strongest",
"Profit",
"Tripple",
"Stella",
"The Matrix",
"Bourne"])



