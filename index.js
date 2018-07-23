var Express = require('express');
var app = Express();
var path  = require('path');

app.get('/',function(req,res){
    res.sendFile(path.join(__dirname+'/index.html'));
});

app.get('/css/style.css',function(req,res){
    res.sendFile(path.join(__dirname + '/css/style.css'));
});
app.get('/js/default.js',function(req,res){
    res.sendFile(path.join(__dirname + '/js/default.js'));
});

app.set('port', process.env.PORT || 3000);
app.listen(app.get('port'), function(){

    console.log('Express is run on http://localhost:' + app.get('port') + '; press control + C to finish.');
});