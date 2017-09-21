var express = require('express');
var app = express();
var reload = require('reload');
var dataFile = require('./data/data.json');

app.set('port', process.env.PORT || 3000);
app.set('appData', dataFile);
app.set('view engine', 'ejs');
app.set('views', 'app/views');

app.locals.siteTitle = 'SERLER';

app.use(express.static('app/public'));
app.use(require('./routes/index')); 
app.use(require('./routes/speakers')); 
app.use(require('./routes/articles'));
app.use(require('./routes/api'));
app.use(require('./routes/news'));
app.use(require('./routes/apinews'));

var server = app.listen(app.get('port'), function(){
	console.log('listening on port ' + app.get('port'));
});

reload(server, app);

/* var http = require('http');

var myServer = http.createServer(function(request, response) {
	response.writeHead(200, {"Content-Type" : "text/html"});
	response.write('<h1>Serler Repo Development</h1>');
	response.end();
});

myServer.listen(3000);
console.log('Go to browser and type in http://localhost:3000 to view the content.'); */