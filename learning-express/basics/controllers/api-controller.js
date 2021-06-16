// a module
module.exports = function(app) {

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
}