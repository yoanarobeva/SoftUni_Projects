class LibraryCollection {
    constructor(capacity) {
        this.capacity = capacity;
        this.books = [];
    }

    addBook(bookName, bookAuthor) {
        if (this.capacity === this.books.length) {
            throw new Error("Not enough space in the collection.");
        }

        this.books.push({ bookName, bookAuthor, payed: false });
        return `The ${bookName}, with an author ${bookAuthor}, collect.`;
    }

    payBook(bookName) {
        let isThereBook = false;

        for (let el of this.books) {

            if (el.bookName === bookName) {
                isThereBook = true;

                if (el.payed === true) {
                    throw new Error(`${bookName} has already been paid.`)
                }

                el.payed = true;
                return `${el.bookName} has been successfully paid.`;
            }
        }

        if (!isThereBook) {
            throw new Error(`${bookName} is not in the collection.`);
        }
    }

    removeBook(bookName) {
        let isThereBook = false;

        for (let el of this.books) {

            if (el.bookName === bookName) {
                isThereBook = true;

                if (el.payed === false) {
                    throw new Error(`${el.bookName} need to be paid before removing from the collection.`)
                }

                let index = this.books.indexOf(el);
                this.books.splice(index, 1);
                return `${el.bookName} remove from the collection.`
            }
        }

        if (!isThereBook) {
            throw new Error("The book, you're looking for, is not found.")
        }
    }

    getStatistics(bookAuthor) {

        if (!bookAuthor) {
            let text = `The book collection has ${this.capacity - this.books.length} empty spots left.`
            this.books.sort((a,b) => a.bookName.localeCompare(b.bookName));
            this.books.forEach(x => text += `\n${x.bookName} == ${x.bookAuthor} - ${x.payed ? 'Has Paid' : 'Not Paid'}.`);
            return text;
        }

        let isThereSuchAnAuthor = false;
        
        for (let el of this.books) {
            if (el.bookAuthor === bookAuthor) {
                isThereSuchAnAuthor = true;
                return `${el.bookName} == ${el.bookAuthor} - ${el.payed ? 'Has Paid' : 'Not Paid'}.`;
            }
        }

        if (!isThereSuchAnAuthor) {
            throw new Error(`${bookAuthor} is not in the collection.`)
        }
    }
}

const library = new LibraryCollection(5)
library.addBook('Don Quixote', 'Miguel de Cervantes');
library.payBook('Don Quixote');
library.addBook('Ulysses', 'James Joyce');
library.addBook('In Search of Lost Time', 'Marcel Proust');
console.log(library.getStatistics());
