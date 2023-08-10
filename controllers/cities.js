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
    create: createOne,
    index
}

function newCity (req,res) {
    res.render('cities/new', {errorMsg: "", title: "Add Canadian City",provinces})
}

async function createOne(req,res){
    // res.send(req.body)
    const cityData = { ...req.body };
    if(cityData.population) {
        cityData.population = parseInt(cityData.population)
    }

    try {
        const createdCity = await City.create(cityData);
        console.log(createdCity);
         res.redirect(`/cities`);
      } catch (err) {
        console.log(err);
        res.render("cities/new", { errorMsg: err.message });
      }

}



async function index(req, res) {
    try {
      const results = await City.find({}).sort('city');
      res.render("cities/index", { cities: results, title: "All Cities" });
    } catch (err) {
      console.log(err);
      res.render("cities/index", { errorMsg: err.message });
    }
  }