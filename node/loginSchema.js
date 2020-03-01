var mongoose = require('mongoose');

var LoginSchema = mongoose.Schema({
    username : {type:String , required : true},
    password : {type:String , required : true},
    status : {type:String , required : true}
})

var LoginModel = mongoose.model('users' , LoginSchema);
module.exports = LoginModel;