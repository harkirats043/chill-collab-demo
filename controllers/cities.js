const City = require("../models/city");

module.exports = {
    new: newCity,
    create: createOne
}

function newCity (req,res) {
    res.render('cities/new', {errorMsg: "", title: "Add Canadian City"})
}

function createOne(req,res){
    
}