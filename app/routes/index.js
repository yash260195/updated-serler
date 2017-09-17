var express = require('express');
var router = express.Router();

//to load main page of the server
router.get('/', function(req, res){    
    res.send(`
    <link rel="stylesheet" type="text/css" href="/css/style.css" />
    <h1>SERLER Repository under development</h1>
    <img src="/images/logo/serlerlogo.jpg" alt="serlerlogo" style="height: 300px;" />
    <p>Welcome to news section</p>
    <script src="/reload/reload.js"></script>
    `);
}); 

module.exports = router;