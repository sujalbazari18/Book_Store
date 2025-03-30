const express = require('express');
const router = express.Router();
const Book = require('../models/books.js');

// Get all books with sorting and filtering
router.get('/', async (req, res) => {   
    try {
        const { sortBy, order, author, category } = req.query;

        // Build query object
        let query = {};
        if (author) query.author = author;
        if (category) query.category = category;

        // Build sort object
        let sortOptions = {};
        if (sortBy && order) {
            sortOptions[sortBy] = order === 'asc' ? 1 : -1;
        }

        const books = await Book.find(query).sort(sortOptions);
        res.json(books);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
});

// Add a new book
router.post('/add', async (req, res) => {
    try {
        const { title, author, category, rating, description } = req.body;
        const newBook = new Book({ title, author, category, rating, description });
        await newBook.save();
        res.status(201).json({ message: 'Book added successfully', book: newBook });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
});

// Get a book by ID
router.get('/:id', async (req, res) => {
    try {
        const book = await Book.findById(req.params.id);
        if (!book) return res.status(404).json({ message: 'Book not found' });
        res.json(book);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
});

// Update a book by ID
router.put('/:id', async (req, res) => {
    try {
        const { title, author, category, rating, description, price, publicationDate } = req.body;

        // Find and update the book
        const updatedBook = await Book.findByIdAndUpdate(
            req.params.id,
            { title, author, category, rating, description, price, publicationDate },
            { new: true, runValidators: true } // Return the updated document and validate
        );

        if (!updatedBook) {
            return res.status(404).json({ message: 'Book not found' });
        }

        res.json({ message: 'Book updated successfully', book: updatedBook });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
});

// Delete a book by ID
router.delete('/:id', async (req, res) => {
    try {
        const book = await Book.findByIdAndDelete(req.params.id);
        if (!book) return res.status(404).json({ message: 'Book not found' });
        res.json({ message: 'Book deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
});

module.exports = router;
