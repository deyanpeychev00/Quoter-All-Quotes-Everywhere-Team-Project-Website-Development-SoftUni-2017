const mongoose = require('mongoose');
const Article = mongoose.model('Article');

module.exports = {
    index: (req, res) => {
        res.render('home/index');
    },

    wall: (req, res) => {
        Article.find({}).populate('author').sort('-date').then(articles => {
            let pagesNumber = Math.ceil(Array.from(articles).length/10);
            console.log(pagesNumber);
            articles = articles.sort((a,b) => a.date <= b.date);
            res.render('home/wall',{articles: articles});
        })
    },

    devsInfoGet: (req, res) => {
        res.render('developers/info');
    },

};