var mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1/lanna_db' , { useNewUrlParser: true })

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Connection Success');
});