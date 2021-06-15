const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// equal to environment variable (port on production etc.) or 3000
const port = process.env.PORT || 3000; 

// gets the body parser url aka post data/http request, makes certain that http request is
// formatted properly for what's expected from the parser 
const urlencodedParser = bodyParser.urlencoded({extended: false});

// for handling json
const jsonParser = bodyParser.json();

// downloads specified file, express.static(where to find file) is middleware that gets file 
app.use('/static', express.static(__dirname + '/public'));

// next = built in express function that is provided for middleware to the function
// that you give as the callback function when the route is matched
// next means run the next middleware
app.use('/', function(req, res, next) {
    console.log('request url: ' + req.url);
    next();
});

// using ejs (effective javascript) as a template, so it knows where to find the files 
// setting ejs as the view engine 
app.set('view engine', 'ejs');

// ./ = homepage, req = request, res = response
// homepage shows "hi"
// href generates http request to /assets that will then look for the file that is specified aka style.css
// this is the way to do it without templating
/*app.get('/', function(req, res) {
    res.send('<html><head><link href=static/style.css type=text/css rel=stylesheet /></head><body><h1>hi</h1></body></html>')
});*/

// this is the way to do it with templating and it'll automatically do it for you
// goes to where you set the views (views folder) and will look for whatever name you specify in ejs form
app.get('/', function(req, res) {
    res.render('index', { id: req.params.id });
});

// adding json data
// shows json data {"firsname": "eden", "lastname": "chou"}
app.get('/api', function(req, res) {
    res.json({firstname: 'eden', lastname: 'chou'});
});

// passing variables via route
// : = variable, says that id can be anything
// this is the way to do it without templating
/*app.get('/person/:id', function(req, res) {
    res.send('<html><head></head><body><h1>person: ' + req.params.id + '</h1></body></html>')
});*/

// doing it with templating
// second argument with req.params.id can be used as a way to get a variable to be used elsewhere
// qstr = query string (ex: http://localhost:3000/person/1?qstr=123) to put a qstr
app.get('/person/:id', function(req, res) {
    res.render('person', { id: req.params.id, qstr: req.query.qstr });
});

// both urlencodedParser and function will be run when /person is seen
// body, firstname, lastname is all coming from urlencodedParser
app.post('/person', urlencodedParser, function(req, res) {
    res.send('thank you');
    console.log(req.body.firstname);
    console.log(req.body.lastname);
});


app.post('/personjson', jsonParser, function(req, res) {
    res.send('thank you for the json data');
    console.log(req.body.firstname);
    console.log(req.body.lastname);
});

// requests below are the ideas/formatting of what a restful api is
app.get('/api/person/:id', function(req, res) {
    // get that data from database
});

app.post('/api/person', function(req, res) {
    // save to the database
});

app.delete('/api/person/:id', function(req, res) {
    // delete from the database
});

app.listen(3000);