var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var fs = require('fs');
var modData = require('../data/articlesubmitted.json');

//to load news page 
router.get('/apimoderator', function(req, res) {
    res.json(modData);
});

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: false}));

router.post('/apimoderator', function(req, res) {
	modData.unshift(req.body);
    fs.writeFile('app/data/articlesubmitted.json', JSON.stringify(modData), 'utf8', 
        function(err) { 
            if(err){
            console.log(err);
            }
        });
	res.json(modData);
});
router.delete('/apimoderator/:id', function(req, res) {
	modData.splice(req.params.id, 1);
    fs.writeFile('app/data/articlesubmitted.json', JSON.stringify(modData), 'utf8', 
        function(err) { 
            if(err){
            console.log(err);
            }
        });
	res.json(modData);
});

module.exports = router;