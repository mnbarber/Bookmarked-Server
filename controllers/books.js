const express = require('express');
const router = express.Router();
const Book = require('../models/book');
const verifyToken = require('../middleware/verify-token');

router.post('/', verifyToken, async (req, res) => {
    const { title, author_name, coverId } = req.body;
    const user = req.user._id;

    try {
        const newBook = new Book({ title, author_name, coverId, user });
        await newBook.save();
        res.status(201).json(newBook);
    } catch (err) {
        res.status(500).json({ message: 'Error saving book', error: err.message });
    }
});

module.exports = router;