const mongoose = require("mongoose");
// optional shortcut to the mongoose.Schema class
const Schema = mongoose.Schema;

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


const citySchema = new Schema(
    {
      city: {
        type: String,
        required: true
      },
      province: {
        type: String,
        enum: provinces,
      },
      population: {
        type: Number,
        required: true,
        min: 0,
      },
    },
    {
      timestamps: true,
    }
  );
  
  // Compile the schema into a model and export it
  module.exports = mongoose.model("City", citySchema);