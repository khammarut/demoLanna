var mongoose = require('mongoose');

var stepschema = mongoose.Schema({
    projectname : {type:String , require : true},
    steps : {type:String , require : true},
    trimas : {type:String , require : true},
    goal : {type:String , require : true},
    area : {type:String , require : true},
    pro : {type:String , require : true},
    in : {type:String , require : true},
    etc : {type:String , require : true},
    sub : {type:String , require : true}
})

var StepModel = mongoose.model('steps' , stepschema);
module.exports = StepModel;