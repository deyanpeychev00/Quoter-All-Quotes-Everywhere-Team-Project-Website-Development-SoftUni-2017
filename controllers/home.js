const mongoose = require('mongoose');
const Article = mongoose.model('Article');
let id = 0;
module.exports = {
    index: (req, res) => {
        res.render('home/index');
    },

    wall: (req, res) => {
        Article.find({}).populate('author').sort('-date').then(articles => {
            articles = articles.sort((a,b) => a.date <= b.date);
            articles.forEach(a => a.showID = id++);

            res.render('home/wall',{articles: articles});
        })
    },

    devsInfoGet: (req, res) => {
        res.render('developers/info');
    },

};