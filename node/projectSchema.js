var mongoose = require('mongoose');

var projectSchema = mongoose.Schema({
    projectname : {type:String , required : true},
    department : {type:String , required : true},
    coordinator : {type:String , required : true},
    position : {type:String , required : true},
    phone : {type:String , required : true},
    fax : {type:String , required : true},
    telephone : {type:String , required : true},
    email : {type:String , required : true},
    incom : {type:String , required : true},
    excom : {type:String , required : true},
    strategic : {type:String , required : true},
    duration : {type:String , required : true},
    importance : {type:String , required : true},
    obproject : {type:String , required : true},
    goalproject : {type:String , required : true},
    projectarea : {type:String , required : true},
    targetgroup : {type:String , required : true},
    totalbudget : {type:String , required : true},
    followstep : {type:String , required : true},
    followtools : {type:String , required : true},
    followtime : {type:String , required : true},
})

var projetcModel = mongoose.model('projectdbs' , projectSchema);
module.exports = projetcModel;