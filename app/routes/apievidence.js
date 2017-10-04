var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var fs = require('fs');
var eviData = require('../data/evidence.json');

//to load news page 
router.get('/apievidence', function(req, res) {
    res.json(eviData);
});

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: false}));

router.post('/apievidence', function(req, res) {
	eviData.unshift(req.body);
    fs.writeFile('app/data/evidence.json', JSON.stringify(eviData), 'utf8', 
        function(err) { 
            if(err){
            console.log(err);
            }
        });
	res.json(eviData);
});

router.delete('/apievidence/:id', function(req, res) {
	eviData.splice(req.params.id, 1);
    fs.writeFile('app/data/evidence.json', JSON.stringify(eviData), 'utf8', 
        function(err) { 
            if(err){
            console.log(err);
            }
        });
	res.json(eviData);
});

module.exports = router;