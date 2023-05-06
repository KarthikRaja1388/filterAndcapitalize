// create a class Book
class Book {
  constructor(name, author, year) {
    this.name = name;
    this.author = author;
    this.year = year;
  }
}

//An array to store the list
const bookArray = [];

let bookNameElementNode = document.querySelector(".book-name");
let authorNameElementNode = document.querySelector(".author-name");
let publishedYearElementNode = document.querySelector(".year-published");
let btnAdd = document.querySelector(".btn-add-book");
let tableBody = document.querySelector(".table-body");
let btnFilter = document.querySelector(".btn-filter");
let yearFilterElementNode = document.querySelector(".year-filter");
let publishedAfterTitle = document.querySelector(".published-after");
// on clicking add btn, push the book to the array

btnAdd.addEventListener("click", () => {
  let bookName = bookNameElementNode.value;
  let authorName = authorNameElementNode.value;
  let publishedYear = publishedYearElementNode.value;

  if (bookName !== "" && authorName !== "" && publishedYear !== "") {
    if (!isNaN(parseInt(publishedYear) && publishedYear > 2023)) {
      let book = new Book(bookName, authorName, publishedYear);
      bookArray.push(book);
      displayBooksList(bookArray);
      clearInputFields();
      clearBorder();
    } else {
      publishedYearElementNode.style.border = "1px solid red";
    }
  } else {
    bookNameElementNode.style.border = "1px solid red";
    authorNameElementNode.style.border = "1px solid red";
    publishedYearElementNode.style.border = "1px solid red";
  }
});
// display the books in the list
function displayBooksList(books) {
  tableBody.innerHTML = "";

  if (books.length > 0) {
    books.forEach((element) => {
      let tr = document.createElement("tr");
      tr.innerHTML = `<td>${element.name}</td>
              <td>${element.author}</td>
              <td>${element.year}</td>`;

      tableBody.appendChild(tr);
    });
  }
}

function displayEmptyListMessage() {
  if (bookArray.length === 0) {
    let tr = document.createElement("tr");
    tr.innerHTML = `<td colspan="3">No items added yet.</td>`;
    tr.setAttribute("class", "empty-message");
    tableBody.appendChild(tr);
  } else {
    let emptymessage = document.querySelector(".empty-message");
    emptymessage.style.display = "none";
  }
}
displayEmptyListMessage();
// on click on filter btn fetch books published aftrer 2010
btnFilter.addEventListener("click", () => {
  let year = parseInt(yearFilterElementNode.value);

  if (year !== "" && !isNaN(year)) {
    publishedAfterTitle.textContent = `List of books published after ${year}`;
    yearFilterElementNode.style.border = "none";
  } else {
    yearFilterElementNode.style.border = "1px solid red";
  }
  let filteredBooks = bookArray.filter((book) => {
    return book.year >= year;
  });
  if (filteredBooks.length !== 0) {
    displayBooksList(filteredBooks);
  }
});

// display the new list and capitalize the authors

function clearInputFields() {
  bookNameElementNode.value = "";
  authorNameElementNode.value = "";
  publishedYearElementNode.value = "";
}

function clearBorder() {
  bookNameElementNode.style.border = "none";
  authorNameElementNode.style.border = "none";
  publishedYearElementNode.style.border = "none";
}
