var express           = require('express'),
    app               = express(),
    bodyParser        = require('body-parser'),
    mongoose          = require('mongoose'),
    meetupsController = require('./server/controllers/meetups-controller');
    spacesController = require('./server/controllers/spaces-controller');

mongoose.connect('mongodb://localhost:27017/mean-demo');

app.use(bodyParser());

app.get('/', function (req, res) {
  res.sendfile(__dirname + '/client/views/index.html');
});

app.use('/js', express.static(__dirname + '/client/js'));
app.use('/img', express.static(__dirname + '/client/img'));
app.use('/css', express.static(__dirname + '/client/css'));

//REST API
app.get('/api/meetups', meetupsController.list);
app.post('/api/meetups', meetupsController.create);

app.get('/api/spaces', spacesController.list);
app.post('/api/spaces', spacesController.create);

app.listen(2000, function() {
  console.log('I\'m Listening...');
})