const books = [
  { title: "The Alchemist", author: "Paulo Coelho", year: 1988 },
  { title: "Mockingbird", author: "George Orwell", year: 1949 },
  { title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 },
  { title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925 }
];

const getBookTitle=(books) => {
    const bookTitle = books.map(book => book.title);
    return bookTitle;
}

const title = getBookTitle(books);
console.log(title);