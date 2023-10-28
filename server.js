var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use('/', express.static(path.join(__dirname, 'public')));
app.use('/dist', express.static(path.join(__dirname, 'dist')));

app.get('/sql', function (req, res) {
    res.send(`Executed SQL: <strong>${req.query.sql}</strong>`);
});

app.post('/sql', function (req, res) {
    res.send(`Executed SQL: <strong>${req.body.sql}</strong>`);
});

app.get('/exec', function (req, res) {
    res.send(`Executed Command: <strong>${req.query.exec}</strong>`);
});

app.post('/exec', function (req, res) {
    res.send(`Executed Command: <strong>${req.body.exec}</strong>`);
});

app.listen(8081);