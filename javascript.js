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
    document.querySelector(".sign_in").style.display = "none";
    document.querySelector(".register").style.display = "none";
}

// On Click show_books

function onClickShowBooks() {
    document.querySelector(".add_book").style.display = "none";
    document.querySelector(".show_books").style.display = "block";
    document.querySelector(".sign_in").style.display = "none";
    document.querySelector(".register").style.display = "none";    

    showBooks();
}

// On Click sign_in

function onClickSignIn() {
    document.querySelector(".add_book").style.display = "none";
    document.querySelector(".show_books").style.display = "none";
    document.querySelector(".sign_in").style.display = "block";
    document.querySelector(".register").style.display = "none";    

    showBooks();
}

// On Click register

function onClickRegister() {
    document.querySelector(".add_book").style.display = "none";
    document.querySelector(".show_books").style.display = "none";
    document.querySelector(".sign_in").style.display = "none";
    document.querySelector(".register").style.display = "block";    

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

// Sign In Form

const buttonSignIn = document.querySelector(".sign_in_btn");
buttonSignIn.addEventListener("click", onClickSignIn);

// Register Form

const buttonRegister = document.querySelector(".register_btn");
buttonRegister.addEventListener("click", onClickRegister);

// Theme Function
function setTheme() {
    const root = document.documentElement;
    const newTheme = root.className === 'dark' ? 'light' : 'dark';
    root.className = newTheme;

    // Toggle icon svg
    if (themeButton) {
        themeButton.innerHTML = newTheme === 'dark'
            ? `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M361.5 1.2c5 2.1 8.6 6.6 9.6 11.9L391 121l107.9 19.8c5.3 1 9.8 4.6 11.9 9.6s1.5 10.7-1.6 15.2L446.9 256l62.3 90.3c3.1 4.5 3.7 10.2 1.6 15.2s-6.6 8.6-11.9 9.6L391 391 371.1 498.9c-1 5.3-4.6 9.8-9.6 11.9s-10.7 1.5-15.2-1.6L256 446.9l-90.3 62.3c-4.5 3.1-10.2 3.7-15.2 1.6s-8.6-6.6-9.6-11.9L121 391 13.1 371.1c-5.3-1-9.8-4.6-11.9-9.6s-1.5-10.7 1.6-15.2L65.1 256 2.8 165.7c-3.1-4.5-3.7-10.2-1.6-15.2s6.6-8.6 11.9-9.6L121 121 140.9 13.1c1-5.3 4.6-9.8 9.6-11.9s10.7-1.5 15.2 1.6L256 65.1 346.3 2.8c4.5-3.1 10.2-3.7 15.2-1.6zM160 256a96 96 0 1 1 192 0 96 96 0 1 1 -192 0zm224 0a128 128 0 1 0 -256 0 128 128 0 1 0 256 0z"/></svg>`
            : `<svg class="theme-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>weather-night</title><path d="M17.75,4.09L15.22,6.03L16.13,9.09L13.5,7.28L10.87,9.09L11.78,6.03L9.25,4.09L12.44,4L13.5,1L14.56,4L17.75,4.09M21.25,11L19.61,12.25L20.2,14.23L18.5,13.06L16.8,14.23L17.39,12.25L15.75,11L17.81,10.95L18.5,9L19.19,10.95L21.25,11M18.97,15.95C19.8,15.87 20.69,17.05 20.16,17.8C19.84,18.25 19.5,18.67 19.08,19.07C15.17,23 8.84,23 4.94,19.07C1.03,15.17 1.03,8.83 4.94,4.93C5.34,4.53 5.76,4.17 6.21,3.85C6.96,3.32 8.14,4.21 8.06,5.04C7.79,7.9 8.75,10.87 10.95,13.06C13.14,15.26 16.1,16.22 18.97,15.95M17.33,17.97C14.5,17.81 11.7,16.64 9.53,14.5C7.36,12.31 6.2,9.5 6.04,6.68C3.23,9.82 3.34,14.64 6.35,17.66C9.37,20.67 14.19,20.78 17.33,17.97Z" /></svg>`;
            
    }
}

const themeButton = document.querySelector(".theme_button");
console.log("Theme Button initiated");
themeButton.addEventListener("click", setTheme);