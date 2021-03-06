const mongoose = require('mongoose');

let articleSchema = mongoose.Schema({
    title: {type: String, required: true},
    content: {type: String, required: true},
    author: {type: mongoose.Schema.Types.ObjectId, required: true, ref: 'User'},
    date: {type: Date, default: Date()},
    likes: {type: []},
    likesCount: {type: Number, default: 0},
    showID: {type: Number}
});

const Article = mongoose.model('Article', articleSchema);

module.exports = Article;