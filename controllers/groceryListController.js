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
      .then((data) => res.json(data))
      .catch((err) => console.log(err));
  },
};
