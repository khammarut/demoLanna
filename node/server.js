const express = require('express');
const bodyParser = require('body-parser');
const app = express();
require('./db');
const LoginModel = require('./loginSchema');
const desProjectModel = require('./desProjectSchema');
const OutputModel = require('./outputSchema');
const OutcomeModel = require('./outcomeSchema');
const BudgetModel = require('./budgetSchema');
const LastBudgetModel = require('./lastBudgetSchema');
const DesBudgetModel = require('./desBudgetScheme');
const ProjectModel = require('./projectSchema');
const RiskModel = require('./riskSchema');
const ProjectApprove = require('./projectApprove');
const StepModel = require('./stepSchema');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

app.use(function (req, res, next){
    res.setHeader('Access-Control-Allow-Origin' , '*');
    res.setHeader('Access-Control-Allow-Methods' , 'GET,POST,PUT,DELETE');
    res.setHeader('Access-Control-Allow-Headers' , 'content-type , x-access-token');
    res.setHeader('Access-Control-Allow-Credentials' , true);
    next();
});

app.get('/login/:username/:password' , (req , res)=>{
    LoginModel.find({username: req.params.username , password:req.params.password} , (error , doc)=>{
        if(error) res.json({"result": "failed"});   

        res.json({"result" : "success" , "status" : doc});
    });
});

app.get('/description/:projectname' , (req,res)=>{     
    projectname = req.params.projectname;                                              //Get DescriptionProject หัวข้อที่ 9
    desProjectModel.find({projectname : projectname},(err , doc)=>{
        if (err) {
            res.json({"result" : "faild"});
        }
        res.json({"result" : "success" , data : doc});
    });
});

app.get('/descriptionid/:id' , (req,res)=>{     
    id = req.params.id;                                              
    desProjectModel.find({_id : id},(err , doc)=>{
        if (err) {
            res.json({"result" : "faild"});
        }
        res.json({"result" : "success" , data : doc});
    });
});

app.post('/description', (req ,res)=>{                                        //Post DescriptionProject หัวข้อที่ 9
    desProjectModel.create(req.body , (err , doc) => {
        if(err) res.json({"result" : "failed"});

        res.json({"result" : "success"});
     });
});

app.delete('/description/:id' , (req,res)=>{     
    id = req.params.id;                                                  
    desProjectModel.deleteOne({_id : id},(err , doc)=>{
        if (err) {
            res.json({"result" : "faild"});
        }
        res.json({"result" : "success" });
    });
});

app.put('/description/:id' , (req,res)=>{     
    desProjectModel.updateOne({_id : req.body._id} ,{$set : req.body},(err , doc)=>{
        if (err) {
            res.json({"result" : err});
        }
        res.json({"result" : "success" });
    });
});

app.get('/output/:projectname' , (req,res)=>{     
    projectname = req.params.projectname;                                              
    OutputModel.find({projectname : projectname},(err , doc)=>{
        if (err) {
            res.json({"result" : "faild"});
        }
        res.json({"result" : "success" , data : doc});
    });
});

app.get('/outputid/:id' , (req,res)=>{     
    id = req.params.id;                                              
    OutputModel.find({_id : id},(err , doc)=>{
        if (err) {
            res.json({"result" : "faild"});
        }
        res.json({"result" : "success" , data : doc});
    });
});

app.post('/output', (req ,res)=>{                              
    OutputModel.create(req.body , (err , doc) => {
        if(err) res.json({"result" : "failed"});

        res.json({"result" : "success"});
     });
});

app.delete('/output/:id' , (req,res)=>{     
    id = req.params.id;                                                  
    OutputModel.deleteOne({_id : id},(err , doc)=>{
        if (err) {
            res.json({"result" : "faild"});
        }
        res.json({"result" : "success" });
    });
});

app.put('/output/:id' , (req,res)=>{     
    OutputModel.updateOne({_id : req.body._id} ,{$set : req.body},(err , doc)=>{
        if (err) {
            res.json({"result" : err});
        }
        res.json({"result" : "success" });
    });
});

app.get('/outcome/:projectname' , (req,res)=>{     
    projectname = req.params.projectname;                                              
    OutcomeModel.find({projectname : projectname},(err , doc)=>{
        if (err) {
            res.json({"result" : "faild"});
        }
        res.json({"result" : "success" , data : doc});
    });
});

app.get('/outcomeid/:id' , (req,res)=>{     
    id = req.params.id;                                              
    OutcomeModel.find({_id : id},(err , doc)=>{
        if (err) {
            res.json({"result" : "faild"});
        }
        res.json({"result" : "success" , data : doc});
    });
});

app.post('/outcome', (req ,res)=>{                              
    OutcomeModel.create(req.body , (err , doc) => {
        if(err) res.json({"result" : "failed"});

        res.json({"result" : "success"});
     });
});

app.delete('/outcome/:id' , (req,res)=>{     
    id = req.params.id;                                                  
    OutcomeModel.deleteOne({_id : id},(err , doc)=>{
        if (err) {
            res.json({"result" : "faild"});
        }
        res.json({"result" : "success" });
    });
});

app.put('/outcome/:id' , (req,res)=>{     
    OutcomeModel.updateOne({_id : req.body._id} ,{$set : req.body},(err , doc)=>{
        if (err) {
            res.json({"result" : err});
        }
        res.json({"result" : "success" });
    });
});

app.get('/budget/:projectname' , (req,res)=>{     
    projectname = req.params.projectname;                                              
    BudgetModel.find({projectname : projectname},(err , doc)=>{
        if (err) {
            res.json({"result" : "faild"});
        }
        res.json({"result" : "success" , data : doc});
    });
});

app.get('/budgetid/:id' , (req,res)=>{     
    id = req.params.id;                                              
    BudgetModel.find({_id : id},(err , doc)=>{
        if (err) {
            res.json({"result" : "faild"});
        }
        res.json({"result" : "success" , data : doc});
    });
});

app.post('/budget', (req ,res)=>{                              
    BudgetModel.create(req.body , (err , doc) => {
        if(err) res.json({"result" : "failed"});

        res.json({"result" : "success"});
     });
});

app.delete('/budget/:id' , (req,res)=>{     
    id = req.params.id;                                                  
    BudgetModel.deleteOne({_id : id},(err , doc)=>{
        if (err) {
            res.json({"result" : "faild"});
        }
        res.json({"result" : "success" });
    });
});

app.put('/budget/:id' , (req,res)=>{     
    BudgetModel.updateOne({_id : req.body._id} ,{$set : req.body},(err , doc)=>{
        if (err) {
            res.json({"result" : err});
        }
        res.json({"result" : "success" });
    });
});

app.get('/lastbudget/:projectname' , (req,res)=>{     
    projectname = req.params.projectname;                                              
    LastBudgetModel.find({projectname : projectname},(err , doc)=>{
        if (err) {
            res.json({"result" : "faild"});
        }
        res.json({"result" : "success" , data : doc});
    });
});

app.get('/lastbudgetid/:id' , (req,res)=>{     
    id = req.params.id;                                              
    LastBudgetModel.find({_id : id},(err , doc)=>{
        if (err) {
            res.json({"result" : "faild"});
        }
        res.json({"result" : "success" , data : doc});
    });
});

app.post('/lastbudget', (req ,res)=>{                              
    LastBudgetModel.create(req.body , (err , doc) => {
        if(err) res.json({"result" : "failed"});

        res.json({"result" : "success"});
     });
});

app.delete('/lastbudget/:id' , (req,res)=>{     
    id = req.params.id;                                                  
    LastBudgetModel.deleteOne({_id : id},(err , doc)=>{
        if (err) {
            res.json({"result" : "faild"});
        }
        res.json({"result" : "success" });
    });
});

app.put('/lastbudget/:id' , (req,res)=>{     
    LastBudgetModel.updateOne({_id : req.body._id} ,{$set : req.body},(err , doc)=>{
        if (err) {
            res.json({"result" : err});
        }
        res.json({"result" : "success" });
    });
});


app.get('/desbudget/:projectname' , (req,res)=>{     
    projectname = req.params.projectname;                                              
    DesBudgetModel.find({projectname : projectname},(err , doc)=>{
        if (err) {
            res.json({"result" : "faild"});
        }
        res.json({"result" : "success" , data : doc});
    });
});

app.get('/desbudgetid/:id' , (req,res)=>{     
    id = req.params.id;                                              
    DesBudgetModel.find({_id : id},(err , doc)=>{
        if (err) {
            res.json({"result" : "faild"});
        }
        res.json({"result" : "success" , data : doc});
    });
});

app.post('/desbudget', (req ,res)=>{                              
    DesBudgetModel.create(req.body , (err , doc) => {
        if(err) res.json({"result" : "failed"});

        res.json({"result" : "success"});
     });
});

app.delete('/desbudget/:id' , (req,res)=>{     
    id = req.params.id;                                                  
    DesBudgetModel.deleteOne({_id : id},(err , doc)=>{
        if (err) {
            res.json({"result" : "faild"});
        }
        res.json({"result" : "success" });
    });
});

app.put('/desbudget/:id' , (req,res)=>{     
    DesBudgetModel.updateOne({_id : req.body._id} ,{$set : req.body},(err , doc)=>{
        if (err) {
            res.json({"result" : err});
        }
        res.json({"result" : "success" });
    });
});


app.get('/risk/:projectname' , (req,res)=>{     
    projectname = req.params.projectname;                                              
    RiskModel.find({projectname : projectname},(err , doc)=>{
        if (err) {
            res.json({"result" : "faild"});
        }
        res.json({"result" : "success" , data : doc});
    });
});

app.get('/riskid/:id' , (req,res)=>{     
    id = req.params.id;                                              
    RiskModel.find({_id : id},(err , doc)=>{
        if (err) {
            res.json({"result" : "faild"});
        }
        res.json({"result" : "success" , data : doc});
    });
});

app.post('/risk', (req ,res)=>{                              
    RiskModel.create(req.body , (err , doc) => {
        if(err) res.json({"result" : "failed"});

        res.json({"result" : "success"});
     });
});

app.delete('/risk/:id' , (req,res)=>{     
    id = req.params.id;                                                  
    RiskModel.deleteOne({_id : id},(err , doc)=>{
        if (err) {
            res.json({"result" : "faild"});
        }
        res.json({"result" : "success" });
    });
});

app.put('/risk/:id' , (req,res)=>{     
    RiskModel.updateOne({_id : req.body._id} ,{$set : req.body},(err , doc)=>{
        if (err) {
            res.json({"result" : err});
        }
        res.json({"result" : "success" });
    });
});

app.get('/project/:projectname' , (req,res)=>{     
    projectname = req.params.projectname;                                              
    ProjectModel.find({projectname : projectname},(err , doc)=>{
        if (err) {
            res.json({"result" : "faild"});
        }
        res.json({"result" : "success" , data : doc});
    });
});

app.get('/project' , (req,res)=>{     
    ProjectModel.find((err , doc)=>{
        if (err) {
            res.json({"result" : "faild"});
        }
        res.json({"result" : "success" , data : doc});
    });
});


app.post('/project', (req ,res)=>{   
    console.log(req.body);
            
    ProjectModel.create(req.body , (err , doc) => {
        if(err) res.json({"result" : err});

        res.json({"result" : "success"});
     });
});

app.post('/projectapprove', (req ,res)=>{           
    ProjectApprove.create(req.body , (err , doc) => {
        if(err) res.json({"result" : err});

        res.json({"result" : "success"});
     });
});

app.get('/projectapprove', (req ,res)=>{           
    ProjectApprove.find((err , doc) => {
        if (err) {
            res.json({"result" : "faild"});
        }
        res.json({"result" : "success" , data : doc});
     });
});

app.delete('/projectapprove/:id' , (req,res)=>{     
    id = req.params.id;                                                  
    ProjectApprove.deleteOne({_id : id},(err , doc)=>{
        if (err) {
            res.json({"result" : "faild"});
        }
        res.json({"result" : "success" });
    });
});

app.get('/projectapprove/:id' , (req,res)=>{     
    id = req.params.id;                                              
    ProjectApprove.find({_id : id},(err , doc)=>{
        if (err) {
            res.json({"result" : "faild"});
        }
        res.json({"result" : "success" , data : doc});
    });
});

app.put('/projectapprove/:id' , (req,res)=>{     
    console.log(req.body._id);       
    ProjectApprove.updateOne({_id : req.body._id} ,{$set : req.body},(err , doc)=>{
        if (err) {
            res.json({"result" : err});
        }
        res.json({"result" : "success" });
    });
});

app.get('/step/:projectname' , (req,res)=>{     
    projectname = req.params.projectname;                                              
    StepModel.find({projectname : projectname},(err , doc)=>{
        if (err) {
            res.json({"result" : "faild"});
        }
        res.json({"result" : "success" , data : doc});
    });
});

app.get('/stepid/:id' , (req,res)=>{     
    id = req.params.id;                                              
    StepModel.find({_id : id},(err , doc)=>{
        if (err) {
            res.json({"result" : "faild"});
        }
        res.json({"result" : "success" , data : doc});
    });
});

app.post('/step', (req ,res)=>{           
    StepModel.create(req.body , (err , doc) => {
        if(err) res.json({"result" : err});

        res.json({"result" : "success"});
     });
});

app.delete('/step/:id' , (req,res)=>{     
    id = req.params.id;                                                  
    StepModel.deleteOne({_id : id},(err , doc)=>{
        if (err) {
            res.json({"result" : "faild"});
        }
        res.json({"result" : "success" });
    });
});

app.put('/step/:id' , (req,res)=>{     
    StepModel.updateOne({_id : req.body._id} ,{$set : req.body},(err , doc)=>{
        if (err) {
            res.json({"result" : err});
        }
        res.json({"result" : "success" });
    });
});

const port = process.env.PORT || 3000
app.listen(port, ()=>{
    console.log("Server Running");
});

