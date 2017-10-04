var express = require('express');
var router = express.Router();

//to load article page 
router.get('/moderator', function(req, res){    
    
    res.render('moderator', {
        pageTitle: 'User Submissions',
        pageID: 'moderator'
    });
    /* res.send(`
    <link rel="stylesheet" type="text/css" href="/css/style.css" />
    <h1>SERLER Repository under development</h1>
    <img src="/images/logo/serlerlogo.jpg" alt="serlerlogo" style="height: 300px;" />
    <p>Welcome to news section</p>
    <script src="/reload/reload.js"></script>
    `); */
}); 

module.exports = router;