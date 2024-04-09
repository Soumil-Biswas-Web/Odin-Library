// Library Array

let myLibrary = [];

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

// Create New Book Object
function createNewBook() {
    const bookData = new FormData(form);

    const name = bookData.get("book_name");
    const writer = bookData.get("book_author");
    const pages = bookData.get("book_pages");
    const isRead = bookData.get("isRead");

    const book = new Book (name, writer, pages, isRead);
    console.log(book.info());
    return book;
}

// Add book to Library

function addBookToLibrary(Book) {
    myLibrary.push(Book);
    console.log(Book.name + " added to Library.");
}

// Create Tabel entries for books

function createTableEntry(book, i){
    const row = document.createElement("tr");
    row.setAttribute('class', 'book_object');
    row.dataset.index = i;
    const name = document.createElement("td");
    const writer = document.createElement("td");
    const pages = document.createElement("td");
    const isRead = document.createElement("td");
    const remove = document.createElement("td");

    name.textContent = book.name;
    writer.textContent = book.writer;
    pages.textContent = book.pages;
    isRead.textContent = book.isRead === true? "Read" : "Not read yet";
    remove.append(removeBtn(row));


    row.append(name);
    row.append(writer);
    row.append(pages);
    row.append(isRead);
    row.append(remove);

    return row;
}

// Create Romve Button
function removeBtn(row) {
    const removeBtn = document.createElement("button");
    removeBtn.textContent = "Remove";
    removeBtn.classList = "remove_button";
    //removeBtn.setAttribute("style", "background-color: var(--theme-color); color: white; font-wieght: 600");
    removeBtn.addEventListener("click",  () => {
        myLibrary.splice(row.dataset.index, 1);
        row.remove();
        console.log(myLibrary);
      });

    return removeBtn;
}

// Clear Books from table
function clearTable(table) {
    const bookObjects = document.querySelectorAll(".book_object");
    bookObjects.forEach((bookObject) => {
        table.removeChild(bookObject);
    })
}

// Show All Books

function showBooks() {
    clearTable(table);

    myLibrary.forEach((book, i) => {
        table.append(createTableEntry(book, i));
    });
}

// On Click add_book

function onClickAddBook() {
    document.querySelector(".add_book").style.display = "block";
    document.querySelector(".show_books").style.display = "none";
}

// On Click show_books

function onClickShowBooks() {
    document.querySelector(".add_book").style.display = "none";
    document.querySelector(".show_books").style.display = "block";

    showBooks();
}

// Driver Code


const theHobbit = new Book ("The Hobbit", "J.R.R. Tolkien", 295, false);
const lotr = new Book("The Fellowship of the Ring", "JRR Tolkien", 450, false);
const wot = new Book("Wheel of Time", "Robert Jordan", 812, true);
const wimpy = new Book("Diary of a Wimpy Kid", "Dav Pilkie", 126, true);
/*console.log(theHobbit.info());
console.log(myLibrary);*/

addBookToLibrary(theHobbit);
addBookToLibrary(lotr);
addBookToLibrary(wot);
addBookToLibrary(wimpy);


const buttonAddBook = document.querySelector(".button_add_book");
buttonAddBook.addEventListener("click", onClickAddBook);

const form = document.querySelector("#book_form");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const newBook = createNewBook();
    addBookToLibrary(newBook);
});

const table = document.querySelector(".books");

const buttonShowBooks = document.querySelector(".button_show_books");
buttonShowBooks.addEventListener("click", onClickShowBooks);

// Theme Function
function setTheme() {
    const root = document.documentElement;
    const newTheme = root.className === 'dark' ? 'light' : 'dark';
    root.className = newTheme;
}

const themeButton = document.querySelector(".theme_button");
console.log("Theme Button initiated");
themeButton.addEventListener("click", setTheme);