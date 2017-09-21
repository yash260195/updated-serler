var express = require('express');
var router = express.Router();

//to load news page 
router.get('/news', function(req, res){    
    
    res.render('news', {
        pageTitle: 'News Entry',
        pageID: 'news'
    });
}); 

module.exports = router;