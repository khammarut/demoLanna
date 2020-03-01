var mongoose = require('mongoose');

mongoose.connect('mongodb://heroku_s3xpzvh4:ndadaj1odpmiefa1kk9gn9gpcq@ds237267.mlab.com:37267/heroku_s3xpzvh4' , { useNewUrlParser: true })

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Connection Success');
});