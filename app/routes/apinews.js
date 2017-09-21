var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var fs = require('fs');
var newsData = require('../data/news.json');

//to load news page 
router.get('/apinews', function(req, res) {
    res.json(newsData);
});

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: false}));

router.post('/apinews', function(req, res) {
	newsData.unshift(req.body);
    fs.writeFile('app/data/news.json', JSON.stringify(newsData), 'utf8', 
        function(err) { 
            if(err){
            console.log(err);
            }
        });
	res.json(newsData);
});

router.delete('/apinews/:id', function(req, res) {
	newsData.splice(req.params.id, 1);
    fs.writeFile('app/data/news.json', JSON.stringify(newsData), 'utf8', 
        function(err) { 
            if(err){
            console.log(err);
            }
        });
	res.json(newsData);
});

module.exports = router;