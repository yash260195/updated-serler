var express = require('express');
var router = express.Router();

//For routing speakers in URL
router.get('/speakers', function(req, res){
    var info = '';
    var dataFile = req.app.get('appData');
    dataFile.speakers.forEach(function(item) {
        info += `
        <li>
            <h2>${item.name}</h2>
            <img src="/images/news/${item.shortname}_tn.png" alt="speaker" style="height: 300px;" />
            <p>${item.summary}</p>
        </li>
        `;
    });
    res.send(`
    <link rel="stylesheet" type="text/css" href="/css/style.css" />
    <h1>SERLER Repository under development</h1>
    ${info}
    <script src="/reload/reload.js"></script>
    `);
}); 
router.get('/speakers/:speakerid', function(req, res){
    var dataFile = req.app.get('appData');
    var speaker = dataFile.speakers[req.params.speakerid];

    res.send(`
    <link rel="stylesheet" type="text/css" href="/css/style.css" />
    <h1>${speaker.title}</h1>
    <h2> with ${speaker.name}</h2>
    <img src="/images/news/${speaker.shortname}_tn.png" alt="speaker" style="height: 300px;" />
    <p>${speaker.summary}</p>
    <script src="/reload/reload.js"></script>
    `);
});

module.exports = router;