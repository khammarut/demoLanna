var mongoose = require('mongoose');

var desbudgetSchema = mongoose.Schema({
    projectname : {type:String , require : true},
    activity : {type:Number , require : true},
    food : {type:Number , require : true},
    expert : {type:Number , require : true},
    daily : {type:Number , require : true},
    meeting : {type:Number , require : true},
    service : {type:Number , require : true},
    office : {type:Number , require : true},
    computer : {type:Number , require : true},
    durable : {type:Number , require : true},
    ground : {type:Number , require : true},
    sub : {type:Number , require : true},
    etc : {type:Number , require : true},
    total : {type:Number , require : true}
})

var DesBudgetModel = mongoose.model('desbudgets' , desbudgetSchema);
module.exports = DesBudgetModel;