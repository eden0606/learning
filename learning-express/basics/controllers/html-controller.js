// a module
const bodyParser = require('body-parser');

// gets the body parser url aka post data/http request, makes certain that http request is
// formatted properly for what's expected from the parser 
const urlencodedParser = bodyParser.urlencoded({extended: false});

module.exports = function(app) {

    app.get('/', function(req, res) {
        res.render('index', { id: req.params.id });
    });

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
    
}