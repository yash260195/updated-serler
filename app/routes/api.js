var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var fs = require('fs');
var articleData = require('../data/articlesubmitted.json');

//to load article page 
router.get('/api', function(req, res) {
    res.json(articleData);
});

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: false}));

router.post('/api', function(req, res) {
	articleData.unshift(req.body);
    fs.writeFile('app/data/articlesubmitted.json', JSON.stringify(articleData), 'utf8', 
        function(err) { console.log(err)} );
	res.json(articleData);
});

module.exports = router;