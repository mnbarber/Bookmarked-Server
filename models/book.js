const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    title: String,
    author_name: [String],
    coverId: Number,
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
});

module.exports = mongoose.model('Book', bookSchema);