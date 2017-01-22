const express = require('express');
const app = express();

const rp = require('request-promise');
const _ = require('lodash');
const moment = require('moment');
moment().format();

const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

//Enter Constants

app.set('port', (process.env.PORT || 9001));

//Just a test function - confirm that your express app is working and successfully deployed
app.get('/', function(req, res) {
    res.send('Express app is working');
});

app.post('/post', function(req, res) {
//slash command request logic here
});

//enter functions to do the legwork!

app.listen(app.get('port'), function() {
    console.log('Node app is running on port', app.get('port'));
});
