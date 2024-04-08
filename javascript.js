// Library Array

const myLibrary = [];

// Book Constructor

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

// Add book to Library

function addBookToLibrary(Book) {
    myLibrary.push(Book);
    console.log(Book.name + " added to Library.");
}

// Show All Books

function showBooks(Book) {}

// On Click add_book

function onClickAddBook() {
    document.querySelector(".add_book").style.display = "block";
    document.querySelector(".show_books").style.display = "none";
}

// On Click show_books

function onClickShowBooks() {
    document.querySelector(".add_book").style.display = "none";
    document.querySelector(".show_books").style.display = "block";
}

// Driver Code

/*
const theHobbit = new Bo/ok ("The Hobbit", "J.R.R. Tolkien", 295, false);
console.log(theHobbit.info());

addBookToLibrary(theHobbit);
*/

const buttonAddBook = document.querySelector(".button_add_book");
buttonAddBook.addEventListener("click", onClickAddBook);

const buttonShowBooks = document.querySelector(".button_show_books");
buttonShowBooks.addEventListener("click", onClickShowBooks);

// Style the website like nhentai lol. Add light mode option as well.
