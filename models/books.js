const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        min: 0,
        max: 5
    },
    price: {
        type: Number,
    },
    publicationDate: {
        type: Date,
    }
});

module.exports = mongoose.model('Book', bookSchema);
