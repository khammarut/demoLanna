var mongoose = require('mongoose');

var budgetSchema = mongoose.Schema({
    projectname : {type:String , require : true},
    year : {type:Number , require : true},
    goal : {type:String , require : true},
    budget : {type:Number , require : true}
})

var BudgetModel = mongoose.model('budgets' , budgetSchema);
module.exports = BudgetModel;