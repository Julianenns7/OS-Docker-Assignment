const {
    getAllBooks,
    getBookById
} = require("./controllers")

const express = require('express');

const router = express.Router();

router.get('/', getAllBooks )

router.get('/:id', getBookById)
module.exports = router;