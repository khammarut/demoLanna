var mongoose = require('mongoose');

var outputSchema = mongoose.Schema({
    projectname : {type:String , required : true},
    trimas : {type:Number , required : true},
    volume : {type:String , required : true},
    quality : {type:String , required : true},
    time : {type:String , required : true},
    cost : {type:String , required : true}
})

var OutputModel = mongoose.model('Outputs' , outputSchema);
module.exports = OutputModel;