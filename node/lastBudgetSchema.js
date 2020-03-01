var mongoose = require('mongoose');

var lastBudgetSchema = mongoose.Schema({
    projectname : {type:String , require:true},
    year : {type:Number , require : true},
    goal : {type:String , require : true},
    budget : {type:Number , require : true}
})

var LastBudgetModel = mongoose.model('lastbudgets' , lastBudgetSchema);
module.exports = LastBudgetModel;