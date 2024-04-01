
const fs = require('fs');

const bookData = fs.readFileSync('books.json');
const books = JSON.parse(bookData);

const getAllBooks = (req, res) => {
    res.json(books);
}

const getBookById = (req, res) => {
    
    const id = req.params.id;
    console.log("searching for book id:", id);
    const book = books.find(book => book.id === id);
    res.json(book);
}

module.exports = {
    getAllBooks,
    getBookById
}