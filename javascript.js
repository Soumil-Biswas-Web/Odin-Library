const myLibrary = [];

function Book(name, writer, numberOfPages, isRead) {
    this.name = name;
    this.writer = writer;
    this.pages = numberOfPages;
    this.isRead = isRead;

    this.info = function() {
        readStatement = "Unlogged";
        if (this.isRead == true) readStatement = "read";
        else if (this.isRead == false) readStatement = "not read yet";

        string = this.name + " by " + this.writer + ", " + this.pages + " pages, " + readStatement + ".";

        return string;
    }
}

function addBookToLibrary(Book) {
    myLibrary.append(Book);
    console.log(Book.name + " added to Library.")
}

function showBooks(Book) {}

// Driver Code

const theHobbit = new Book ("The Hobbit", "J.R.R. Tolkien", 295, false);
console.log(theHobbit.info());

addBookToLibrary(theHobbit);

// Style the website like nhentai lol. Add light mode option as well.
