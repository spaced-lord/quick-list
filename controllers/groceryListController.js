const db = require("../models");

module.exports = {
  addToList: function (req, res) {
    const groceryList = req.body.map((item) => {
      return { name: item };
    });
    db.GroceryList.collection
      .insertMany(groceryList)
      .then((data) => res.json(data))
      .catch((err) => console.log(err));
  },
  getGroceryList: function (req, res) {
    db.GroceryList.find()
      .sort({ name: 1 })
      .then((data) => res.json(data))
      .catch((err) => console.log(err));
  },
  deleteOne: function (req, res) {
    db.GroceryList.deleteMany({ name: req.params.name })
      .then((data) => res.json(data))
      .catch((err) => console.log(err));
  },
  deleteAll: function (req, res) {
    db.GroceryList.deleteMany({})
      .then((data) => {
        res.json(data);
      })
      .catch((err) => console.log(err));
  },
};
