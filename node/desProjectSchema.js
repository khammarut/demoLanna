var mongoose = require('mongoose');

var DesProjectSchema = mongoose.Schema({
    projectname : {type:String , require:true},
    activity : {type:String , require:true},
    description : {type:String , require:true}
})

var desProjectModel = mongoose.model('projectdescription' , DesProjectSchema);
module.exports = desProjectModel;