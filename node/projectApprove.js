var mongoose = require('mongoose');

var projectapproveSchema = mongoose.Schema({
    projecthead : {type:String , required : true},
    projectname : {type:String , required : true},
    department : {type:String , required : true},
    budget : {type:Number , required : true},
    strategic : {type:String , required : true},
    metric : {type:String , required : true},
    progress : {type:Boolean , default : false},
    report : {type:Boolean , default : false},
    creative : {type:Boolean , default : false},
    picdio : {type:Boolean , default : false},
    output : {type:Boolean , default : false},
    dataprogress : {type:Boolean , default : false},
    result : {type:Boolean , default : false},
})

var projetcApproveModel = mongoose.model('projectapprove' , projectapproveSchema);
module.exports = projetcApproveModel;