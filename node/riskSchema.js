var mongoose = require('mongoose');

var riskSchema = mongoose.Schema({
    projectname : {type:String , require : true},
    step : {type:String , require : true},
    risk : {type:String , require : true},
    closerisk : {type:String , require : true}
})

var RiskModel = mongoose.model('risks' , riskSchema);
module.exports = RiskModel;