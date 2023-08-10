const City = require("../models/city");

module.exports = {
    new: newCity,
}

function newCity (req,res) {
    res.render('cities/new', {errorMsg: "", title: "Add Canadian City"})
}