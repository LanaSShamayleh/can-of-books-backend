'user strict';

const mongoose = require('mongoose');
const bookSchema = require('./Model/books.model.js')
const userSchema = mongoose.Schema({
    email: { type: String },
    book: [bookSchema]
})

const userModel = mongoose.model("Userschema", userSchema);

module.exports = userModel;