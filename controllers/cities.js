const City = require("../models/city");

const provinces= [
    "AB",  
    "BC",  
    "MB", 
    "NB",  
    "NL", 
    "NT",  
    "NS",  
    "NU",  
    "ON",  
    "PE",  
    "QC",  
    "SK",
    "YT"  
]
module.exports = {
    new: newCity,
    create: createOne
}

function newCity (req,res) {
    res.render('cities/new', {errorMsg: "", title: "Add Canadian City",provinces})
}

function createOne(req,res){

}