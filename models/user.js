//Dependency
const mongoose = require("mongoose");

//Create instance of mongoose schema
const Schema = mongoose.Schema;

//Defines object structure for collection
const userSchema = new Schema({
  name: String,
});

//Creates collection with about schema
const User = mongoose.model("User", userSchema);

//Exports model
module.exports = User;
